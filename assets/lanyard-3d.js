/**
 * Interactive 3D Lanyard Component with Verlet Physics & Balanced Studio Lighting
 * Integrated for Saravana Prakash R - Digifox Studio / HEPL ID Card
 */

(function() {
    'use strict';

    function initLanyard() {
        const container = document.getElementById('lanyard-container');
        if (!container) return;

        if (typeof THREE === 'undefined' || typeof THREE.GLTFLoader === 'undefined') {
            setTimeout(initLanyard, 100);
            return;
        }

        // Remove any existing canvas
        const existingCanvas = container.querySelector('canvas');
        if (existingCanvas) existingCanvas.remove();

        let width = container.clientWidth || 320;
        let height = container.clientHeight || 460;
        if (width < 50) width = 320;
        if (height < 50) height = 460;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(23, width / height, 0.1, 100);
        camera.position.set(0, 0.1, 17.0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.98; // Balanced exposure to prevent white blowout

        container.appendChild(renderer.domElement);

        // Balanced Studio Lighting: Soft ambient + key & fill lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
        scene.add(ambientLight);

        const frontKeyLight = new THREE.DirectionalLight(0xffffff, 1.2);
        frontKeyLight.position.set(3, 5, 10);
        scene.add(frontKeyLight);

        const backFillLight = new THREE.DirectionalLight(0xffffff, 0.9);
        backFillLight.position.set(-3, 4, -10);
        scene.add(backFillLight);

        const cyanRimLight = new THREE.DirectionalLight(0x00f5ff, 0.65);
        cyanRimLight.position.set(-6, -2, 5);
        scene.add(cyanRimLight);

        const magentaRimLight = new THREE.DirectionalLight(0xff359a, 0.45);
        magentaRimLight.position.set(6, -3, 4);
        scene.add(magentaRimLight);

        // Physics parameters (Verlet rope + rigid body)
        const gravity = -38.0;
        const damping = 0.95;
        const angularDamping = 0.93;
        const segmentLength = 0.82;
        const numSegments = 4;

        const fixedPos = new THREE.Vector3(0, 3.8, 0);
        const joints = [];
        for (let i = 0; i < numSegments; i++) {
            joints.push({
                pos: new THREE.Vector3(0, fixedPos.y - i * segmentLength, 0),
                oldPos: new THREE.Vector3(0, fixedPos.y - i * segmentLength, 0),
                vel: new THREE.Vector3(0, 0, 0)
            });
        }

        // Card state
        const cardState = {
            pos: new THREE.Vector3(0, fixedPos.y - numSegments * segmentLength - 0.4, 0),
            oldPos: new THREE.Vector3(0, fixedPos.y - numSegments * segmentLength - 0.4, 0),
            rot: new THREE.Euler(0, 0, 0, 'YXZ'),
            rotVel: new THREE.Vector3(0, 0, 0),
            dragged: false,
            hovered: false
        };

        // Texture Loader
        const textureLoader = new THREE.TextureLoader();
        
        // Load composite card texture
        const cardAtlasTex = textureLoader.load('assets/card_composite.png');
        cardAtlasTex.encoding = THREE.sRGBEncoding;
        cardAtlasTex.flipY = false;
        cardAtlasTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

        // Load lanyard strap texture
        const lanyardTex = textureLoader.load('assets/hepl_lanyard.png');
        lanyardTex.wrapS = THREE.RepeatWrapping;
        lanyardTex.wrapT = THREE.ClampToEdgeWrapping;
        lanyardTex.encoding = THREE.sRGBEncoding;

        // Create Ribbon Mesh (Flat band oriented toward camera)
        const ribbonWidth = 0.44;
        const ribbonSegments = 36;
        const ribbonGeom = new THREE.BufferGeometry();
        
        const vertexCount = (ribbonSegments + 1) * 2;
        const positions = new Float32Array(vertexCount * 3);
        const uvs = new Float32Array(vertexCount * 2);
        const indices = [];

        for (let i = 0; i < ribbonSegments; i++) {
            const a = i * 2;
            const b = i * 2 + 1;
            const c = (i + 1) * 2;
            const d = (i + 1) * 2 + 1;
            indices.push(a, b, c);
            indices.push(b, d, c);
        }

        ribbonGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        ribbonGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
        ribbonGeom.setIndex(indices);

        const ribbonMat = new THREE.MeshStandardMaterial({
            map: lanyardTex,
            side: THREE.DoubleSide,
            roughness: 0.7,
            metalness: 0.05
        });
        const ribbonMesh = new THREE.Mesh(ribbonGeom, ribbonMat);
        scene.add(ribbonMesh);

        // Load 3D Card Model
        const cardGroup = new THREE.Group();
        scene.add(cardGroup);

        const gltfLoader = new THREE.GLTFLoader();
        gltfLoader.load('assets/card.glb', (gltf) => {
            const model = gltf.scene;
            
            // Apply balanced PBR materials
            model.traverse((child) => {
                if (child.isMesh) {
                    if (child.name === 'card' || (child.material && child.material.name === 'base')) {
                        child.material = new THREE.MeshPhysicalMaterial({
                            map: cardAtlasTex,
                            roughness: 0.45,
                            metalness: 0.0,
                            clearcoat: 0.25,
                            clearcoatRoughness: 0.25,
                            reflectivity: 0.8
                        });
                    } else if (child.name === 'clip' || child.name === 'clamp' || (child.material && child.material.name === 'metal')) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0xd0d8e2,
                            metalness: 0.9,
                            roughness: 0.3
                        });
                    }
                }
            });

            model.scale.set(2.35, 2.35, 2.35);
            model.position.set(0, -1.2, -0.05);
            cardGroup.add(model);

            // Hide loading overlay once model is ready
            const loadingOverlay = container.querySelector('.lanyard-loading');
            if (loadingOverlay) loadingOverlay.style.opacity = '0';
        }, undefined, (err) => {
            console.error('Error loading card.glb:', err);
        });

        // Pointer / Dragging interaction
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        const dragOffset = new THREE.Vector3();
        let lastMousePos = new THREE.Vector2();
        let mouseSpeed = new THREE.Vector2();

        function getPointerPos(e) {
            const rect = renderer.domElement.getBoundingClientRect();
            const clientX = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX) || 0;
            const clientY = (e.touches && e.touches[0] ? e.touches[0].clientY : e.clientY) || 0;
            return {
                x: ((clientX - rect.left) / rect.width) * 2 - 1,
                y: -((clientY - rect.top) / rect.height) * 2 + 1,
                rawX: clientX,
                rawY: clientY
            };
        }

        function getWorldPointFromPointer(pointerPos) {
            const v = new THREE.Vector3(pointerPos.x, pointerPos.y, 0.5);
            v.unproject(camera);
            const dir = v.sub(camera.position).normalize();
            const distance = -camera.position.z / dir.z;
            return camera.position.clone().add(dir.multiplyScalar(distance));
        }

        function onPointerDown(e) {
            const pos = getPointerPos(e);
            pointer.x = pos.x;
            pointer.y = pos.y;
            lastMousePos.set(pos.rawX, pos.rawY);

            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects(cardGroup.children, true);
            const worldPt = getWorldPointFromPointer(pos);

            // Grab if clicked card mesh OR within card bounding radius
            const distToCard = worldPt.distanceTo(cardState.pos);
            if (intersects.length > 0 || distToCard < 3.2) {
                cardState.dragged = true;
                dragOffset.copy(cardState.pos).sub(worldPt);
                container.style.cursor = 'grabbing';
                if (e.cancelable && e.preventDefault) e.preventDefault();
            }
        }

        function onPointerMove(e) {
            const pos = getPointerPos(e);
            pointer.x = pos.x;
            pointer.y = pos.y;

            mouseSpeed.x = pos.rawX - lastMousePos.x;
            mouseSpeed.y = pos.rawY - lastMousePos.y;
            lastMousePos.set(pos.rawX, pos.rawY);

            if (cardState.dragged) {
                const worldPt = getWorldPointFromPointer(pos);
                cardState.pos.x = worldPt.x + dragOffset.x;
                cardState.pos.y = worldPt.y + dragOffset.y;
                if (e.cancelable && e.preventDefault) e.preventDefault();
            } else {
                raycaster.setFromCamera(pointer, camera);
                const intersects = raycaster.intersectObjects(cardGroup.children, true);
                if (intersects.length > 0) {
                    if (!cardState.hovered) {
                        cardState.hovered = true;
                        container.style.cursor = 'grab';
                    }
                } else if (cardState.hovered) {
                    cardState.hovered = false;
                    container.style.cursor = 'default';
                }
            }
        }

        function onPointerUp() {
            if (cardState.dragged) {
                cardState.dragged = false;
                container.style.cursor = cardState.hovered ? 'grab' : 'default';
                
                // Add natural fling momentum
                cardState.rotVel.y += THREE.MathUtils.clamp(mouseSpeed.x * 0.08, -15, 15);
                cardState.rotVel.x -= THREE.MathUtils.clamp(mouseSpeed.y * 0.05, -10, 10);
            }
        }

        renderer.domElement.addEventListener('mousedown', onPointerDown);
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('mouseup', onPointerUp);

        renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: false });
        window.addEventListener('touchmove', onPointerMove, { passive: false });
        window.addEventListener('touchend', onPointerUp);

        // Resize observer for responsive layout
        function updateSize() {
            if (!container) return;
            const newW = container.clientWidth || 320;
            const newH = container.clientHeight || 460;
            if (newW > 50 && newH > 50) {
                camera.aspect = newW / newH;
                camera.updateProjectionMatrix();
                renderer.setSize(newW, newH);
            }
        }

        window.addEventListener('resize', updateSize);
        if (window.ResizeObserver) {
            const ro = new ResizeObserver(updateSize);
            ro.observe(container);
        }

        // CatmullRom Spline for Ribbon
        const curvePoints = [
            fixedPos,
            joints[1].pos,
            joints[2].pos,
            joints[3].pos,
            cardState.pos
        ];
        const spline = new THREE.CatmullRomCurve3(curvePoints, false, 'chordal');

        // Physics & Animation Loop
        let lastTime = performance.now();

        function animate() {
            requestAnimationFrame(animate);

            const now = performance.now();
            const dt = Math.min((now - lastTime) / 1000, 0.033);
            lastTime = now;

            // 1. Update Card Position from Drag or Physics
            if (cardState.dragged) {
                cardState.pos.lerp(targetWorldPos, 0.35);
                
                // Tilt card toward drag movement
                const targetRotZ = -THREE.MathUtils.clamp(mouseSpeed.x * 0.02, -0.6, 0.6);
                const targetRotX = THREE.MathUtils.clamp(mouseSpeed.y * 0.02, -0.6, 0.6);
                cardState.rot.z += (targetRotZ - cardState.rot.z) * 0.15;
                cardState.rot.x += (targetRotX - cardState.rot.x) * 0.15;
            } else {
                // Gravity & velocity verlet for card
                const vel = cardState.pos.clone().sub(cardState.oldPos).multiplyScalar(damping);
                vel.y += gravity * dt * dt;
                cardState.oldPos.copy(cardState.pos);
                cardState.pos.add(vel);

                // Angular physics & natural sway
                cardState.rot.x += cardState.rotVel.x * dt;
                cardState.rot.y += cardState.rotVel.y * dt;
                cardState.rot.z += cardState.rotVel.z * dt;

                // Restoring torque (return to upright face-forward)
                cardState.rotVel.x += (-cardState.rot.x * 7.5) * dt;
                cardState.rotVel.y += (-cardState.rot.y * 1.8) * dt;
                cardState.rotVel.z += (-cardState.rot.z * 10.0) * dt;

                cardState.rotVel.multiplyScalar(angularDamping);
            }

            // 2. Verlet Physics for Rope Joints
            joints[0].pos.copy(fixedPos); // Anchor is fixed

            for (let i = 1; i < numSegments; i++) {
                const j = joints[i];
                const jVel = j.pos.clone().sub(j.oldPos).multiplyScalar(damping);
                jVel.y += gravity * dt * dt;
                j.oldPos.copy(j.pos);
                j.pos.add(jVel);
            }

            // 3. Distance Constraints Relaxation
            const iterations = 8;
            for (let iter = 0; iter < iterations; iter++) {
                // Fixed to joint 1
                const d1 = joints[1].pos.clone().sub(joints[0].pos);
                const dist1 = d1.length();
                if (dist1 > 0.001) {
                    const diff1 = (dist1 - segmentLength) / dist1;
                    joints[1].pos.sub(d1.multiplyScalar(diff1));
                }

                // Joint to joint constraints
                for (let i = 1; i < numSegments - 1; i++) {
                    const d = joints[i + 1].pos.clone().sub(joints[i].pos);
                    const dist = d.length();
                    if (dist > 0.001) {
                        const diff = (dist - segmentLength) / dist;
                        joints[i].pos.add(d.clone().multiplyScalar(diff * 0.5));
                        joints[i + 1].pos.sub(d.multiplyScalar(diff * 0.5));
                    }
                }

                // Last joint to card top attachment point
                const cardTopPos = cardState.pos.clone().add(new THREE.Vector3(0, 0.4, 0));
                const dCard = cardTopPos.clone().sub(joints[numSegments - 1].pos);
                const distCard = dCard.length();
                if (distCard > 0.001) {
                    const diffCard = (distCard - 0.5) / distCard;
                    joints[numSegments - 1].pos.add(dCard.clone().multiplyScalar(diffCard * 0.5));
                    if (!cardState.dragged) {
                        cardState.pos.sub(dCard.multiplyScalar(diffCard * 0.5));
                    }
                }
            }

            // 4. Update 3D Card Transform
            cardGroup.position.copy(cardState.pos);
            cardGroup.rotation.copy(cardState.rot);

            // Natural pendular tilt based on attachment angle
            const swingDir = cardState.pos.clone().sub(joints[numSegments - 1].pos).normalize();
            if (!cardState.dragged) {
                cardGroup.rotation.z = -Math.asin(THREE.MathUtils.clamp(swingDir.x, -0.9, 0.9)) * 0.7;
            }

            // 5. Update Ribbon Mesh Geometry along Spline
            curvePoints[0].copy(fixedPos);
            for (let i = 1; i < numSegments; i++) {
                curvePoints[i].copy(joints[i].pos);
            }
            curvePoints[numSegments] = cardState.pos.clone().add(new THREE.Vector3(0, 0.35, 0));

            const splinePoints = spline.getPoints(ribbonSegments);
            const posAttr = ribbonGeom.attributes.position;
            const uvAttr = ribbonGeom.attributes.uv;

            const camPos = camera.position;
            const halfW = ribbonWidth * 0.5;

            for (let i = 0; i <= ribbonSegments; i++) {
                const pt = splinePoints[i];
                const t = i / ribbonSegments;

                // Calculate tangent
                let tangent;
                if (i === 0) {
                    tangent = splinePoints[1].clone().sub(pt).normalize();
                } else if (i === ribbonSegments) {
                    tangent = pt.clone().sub(splinePoints[i - 1]).normalize();
                } else {
                    tangent = splinePoints[i + 1].clone().sub(splinePoints[i - 1]).normalize();
                }

                // Normal perpendicular to tangent and camera forward
                const toCam = camPos.clone().sub(pt).normalize();
                const normal = new THREE.Vector3().crossVectors(tangent, toCam).normalize();
                if (normal.lengthSq() < 0.001) normal.set(1, 0, 0);

                const vIndex = i * 2;
                // Left vertex
                posAttr.setXYZ(vIndex, pt.x - normal.x * halfW, pt.y - normal.y * halfW, pt.z - normal.z * halfW);
                // Map horizontal texture along ribbon length: U along length, V across width
                uvAttr.setXY(vIndex, t * 3.5, 0);

                // Right vertex
                posAttr.setXYZ(vIndex + 1, pt.x + normal.x * halfW, pt.y + normal.y * halfW, pt.z + normal.z * halfW);
                uvAttr.setXY(vIndex + 1, t * 3.5, 1);
            }

            posAttr.needsUpdate = true;
            uvAttr.needsUpdate = true;
            ribbonGeom.computeVertexNormals();

            // Render
            renderer.render(scene, camera);
        }

        animate();
    }

    // Initialize on DOM ready or immediate
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanyard);
    } else {
        initLanyard();
    }

    window.initLanyard = initLanyard;
})();
