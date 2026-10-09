/**
 * Interactive 3D Lanyard Component with Realistic 1.32 Fitted Proportions & Authentic Physics
 * Supports dual instances next to office entries:
 * 1. Digifox Studio (HEPL ID with custom lanyard)
 * 2. Madras MindWorks (MMW ID with new email & phone, custom lanyard)
 * Features click-to-flip, hook safe clearance, glossy laminate finish, and Three.js physics.
 */

(function () {
  'use strict';

  const CARD_WIDTH = 1.32;
  const CARD_HEIGHT = 2.25;
  const CORNER_RADIUS = 0.08;
  const THICKNESS = 0.018;
  const BEVEL = 0.007;
  const SLOT_WIDTH = 0.30;
  const SLOT_HEIGHT = 0.07;
  const SLOT_Y = CARD_HEIGHT / 2 - 0.13;
  const RING_RADIUS = 0.095;
  const RING_TUBE = 0.0135;
  const CLAMP_BODY = 0.15;
  const STRAP_WIDTH = 0.36;

  function traceRoundedRect(path, x, y, width, height, radius) {
    const r = Math.max(0, Math.min(radius, width / 2, height / 2));
    const k = r * 0.4477;
    path.moveTo(x + r, y);
    path.lineTo(x + width - r, y);
    path.bezierCurveTo(x + width - k, y, x + width, y + k, x + width, y + r);
    path.lineTo(x + width, y + height - r);
    path.bezierCurveTo(x + width, y + height - k, x + width - k, y + height, x + width - r, y + height);
    path.lineTo(x + r, y + height);
    path.bezierCurveTo(x + k, y + height, x, y + height - k, x, y + height - r);
    path.lineTo(x, y + r);
    path.bezierCurveTo(x, y + k, x + k, y, x + r, y);
  }

  function buildCardGeometry() {
    const outline = new THREE.Shape();
    traceRoundedRect(
      outline,
      -CARD_WIDTH / 2 + BEVEL,
      -CARD_HEIGHT / 2 + BEVEL,
      CARD_WIDTH - BEVEL * 2,
      CARD_HEIGHT - BEVEL * 2,
      Math.max(CORNER_RADIUS - BEVEL, 0.005)
    );

    const hole = new THREE.Path();
    traceRoundedRect(
      hole,
      -SLOT_WIDTH / 2 - BEVEL,
      SLOT_Y - SLOT_HEIGHT / 2 - BEVEL,
      SLOT_WIDTH + BEVEL * 2,
      SLOT_HEIGHT + BEVEL * 2,
      SLOT_HEIGHT / 2 + BEVEL
    );
    outline.holes.push(hole);

    const body = new THREE.ExtrudeGeometry(outline, {
      depth: THICKNESS,
      bevelEnabled: true,
      bevelThickness: BEVEL,
      bevelSize: BEVEL,
      bevelSegments: 4,
      curveSegments: 20
    });
    body.translate(0, 0, -THICKNESS / 2);

    // Front Face UVs
    const frontFace = new THREE.ShapeGeometry(outline, 20);
    const fPos = frontFace.getAttribute('position');
    const fUv = frontFace.getAttribute('uv');
    for (let i = 0; i < fPos.count; i++) {
      fUv.setXY(i, (fPos.getX(i) + CARD_WIDTH / 2) / CARD_WIDTH, (fPos.getY(i) + CARD_HEIGHT / 2) / CARD_HEIGHT);
    }
    fUv.needsUpdate = true;

    // Back Face UVs (Flipped horizontally so back reads correctly)
    const backFace = new THREE.ShapeGeometry(outline, 20);
    const bPos = backFace.getAttribute('position');
    const bUv = backFace.getAttribute('uv');
    for (let i = 0; i < bPos.count; i++) {
      bUv.setXY(i, 1.0 - (bPos.getX(i) + CARD_WIDTH / 2) / CARD_WIDTH, (bPos.getY(i) + CARD_HEIGHT / 2) / CARD_HEIGHT);
    }
    bUv.needsUpdate = true;

    return { body, frontFace, backFace };
  }

  function buildClampGeometry() {
    const shape = new THREE.Shape();
    const w = CARD_WIDTH * 0.28;
    traceRoundedRect(shape, -w / 2, -CLAMP_BODY / 2, w, CLAMP_BODY, 0.02);
    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.024,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.008,
      bevelSegments: 4,
      curveSegments: 8
    });
    geom.translate(0, 0, -0.012);
    return geom;
  }

  function createLanyardInstance(config) {
    const container = document.getElementById(config.containerId);
    if (!container) return;

    // Clear existing canvas
    const oldCanvas = container.querySelector('canvas');
    if (oldCanvas) oldCanvas.remove();

    let width = container.clientWidth || 340;
    let height = container.clientHeight || 480;
    if (width < 50) width = 340;
    if (height < 50) height = 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(24, width / height, 0.1, 100);
    camera.position.set(0, 0.35, 14.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (renderer.outputEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;

    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.55);
    frontLight.position.set(2, 5, 8);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.45);
    backLight.position.set(-2, 3, -8);
    scene.add(backLight);

    const cyanRim = new THREE.DirectionalLight(0x00f2fe, 0.25);
    cyanRim.position.set(-5, -2, 5);
    scene.add(cyanRim);

    function getCeilingAnchorY() {
      const halfFovRad = THREE.MathUtils.degToRad(camera.fov / 2);
      const visibleHalfHeight = camera.position.z * Math.tan(halfFovRad);
      return camera.position.y + visibleHalfHeight;
    }

    // Physics parameters
    const gravity = -38.0;
    const damping = 0.94;
    const segmentLength = 0.52;
    const numSegments = 4;

    const fixedPos = new THREE.Vector3(0, getCeilingAnchorY(), 0);
    const joints = [];
    for (let i = 0; i < numSegments; i++) {
      joints.push({
        pos: new THREE.Vector3(0, fixedPos.y - i * segmentLength, 0),
        oldPos: new THREE.Vector3(0, fixedPos.y - i * segmentLength, 0),
        vel: new THREE.Vector3(0, 0, 0)
      });
    }

    const hookLocalY = CARD_HEIGHT / 2 + 0.12; // Hook safe clearance
    const restHookY = fixedPos.y - numSegments * segmentLength;
    const initialCardY = restHookY - hookLocalY;

    // Card & Flip state
    let targetFlipAngle = 0;
    let currentFlipAngle = 0;

    const cardState = {
      pos: new THREE.Vector3(0, initialCardY, 0),
      oldPos: new THREE.Vector3(0, initialCardY, 0),
      rot: new THREE.Euler(0, 0, 0, 'YXZ'),
      rotVel: new THREE.Vector3(0, 0, 0),
      dragged: false,
      hovered: false
    };

    // Load Textures
    const textureLoader = new THREE.TextureLoader();
    const vQ = '?v=25';

    const frontTex = textureLoader.load(config.frontImage + vQ);
    frontTex.encoding = THREE.sRGBEncoding;
    frontTex.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 4;

    const backTex = textureLoader.load(config.backImage + vQ);
    backTex.encoding = THREE.sRGBEncoding;
    backTex.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 4;

    const strapTex = textureLoader.load(config.strapImage + vQ);
    strapTex.wrapS = THREE.ClampToEdgeWrapping;
    strapTex.wrapT = THREE.ClampToEdgeWrapping;
    strapTex.encoding = THREE.sRGBEncoding;
    strapTex.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 4;

    // Build Ribbon Strap Mesh
    const ribbonSegments = 36;
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

    const ribbonGeom = new THREE.BufferGeometry();
    ribbonGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ribbonGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    ribbonGeom.setIndex(indices);

    const ribbonMat = new THREE.MeshStandardMaterial({
      map: strapTex,
      side: THREE.DoubleSide,
      roughness: 0.65,
      metalness: 0.1
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeom, ribbonMat);
    scene.add(ribbonMesh);

    // Build Procedural 3D Card
    const cardGroup = new THREE.Group();
    scene.add(cardGroup);

    const { body, frontFace, backFace } = buildCardGeometry();

    // Glossy laminate plastic body
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.05
    });
    const bodyMesh = new THREE.Mesh(body, bodyMat);
    cardGroup.add(bodyMesh);

    // Front Face (Glossy clean)
    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.42,
      metalness: 0.02
    });
    const frontMesh = new THREE.Mesh(frontFace, frontMat);
    frontMesh.position.z = THICKNESS / 2 + 0.001;
    cardGroup.add(frontMesh);

    // Back Face (Glossy clean)
    const backMat = new THREE.MeshStandardMaterial({
      map: backTex,
      roughness: 0.42,
      metalness: 0.02,
      side: THREE.BackSide
    });
    const backMesh = new THREE.Mesh(backFace, backMat);
    backMesh.position.z = -THICKNESS / 2 - 0.001;
    cardGroup.add(backMesh);

    // Metal Clip & Clamp
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xd8e2ed,
      metalness: 0.95,
      roughness: 0.22
    });

    const clampGeom = buildClampGeometry();
    const clampMesh = new THREE.Mesh(clampGeom, metalMat);
    clampMesh.position.set(0, CARD_HEIGHT / 2 - 0.01, 0);
    cardGroup.add(clampMesh);

    const ringGeom = new THREE.TorusGeometry(RING_RADIUS, RING_TUBE, 16, 32);
    const ringMesh = new THREE.Mesh(ringGeom, metalMat);
    ringMesh.position.set(0, CARD_HEIGHT / 2 + 0.055, 0);
    cardGroup.add(ringMesh);

    // Fade out loading spinner once textures resolve
    setTimeout(() => {
      const loader = container.querySelector('.lanyard-loading');
      if (loader) loader.style.opacity = '0';
    }, 400);

    // Raycasting & Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isMouseDown = false;
    let mouseDownPos = { x: 0, y: 0 };
    let mouseDownTime = 0;
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersectPoint = new THREE.Vector3();

    function getPointerPos(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1,
        rawX: clientX,
        rawY: clientY
      };
    }

    function onPointerDown(e) {
      const p = getPointerPos(e);
      mouse.x = p.x;
      mouse.y = p.y;
      mouseDownPos = { x: p.rawX, y: p.rawY };
      mouseDownTime = performance.now();

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObject(cardGroup, true);
      if (hits.length > 0) {
        isMouseDown = true;
        cardState.dragged = true;
        document.body.style.cursor = 'grabbing';
      }
    }

    function onPointerMove(e) {
      const p = getPointerPos(e);
      mouse.x = p.x;
      mouse.y = p.y;

      if (isMouseDown && cardState.dragged) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, intersectPoint);
        if (intersectPoint) {
          cardState.pos.x = THREE.MathUtils.clamp(intersectPoint.x, -3.5, 3.5);
          cardState.pos.y = THREE.MathUtils.clamp(intersectPoint.y, -3.2, fixedPos.y - 0.5);
          cardState.pos.z = THREE.MathUtils.clamp(intersectPoint.z, -2.5, 3.5);
        }
      }
    }

    function onPointerUp(e) {
      if (isMouseDown) {
        const rawX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const rawY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
        const dist = Math.hypot(rawX - mouseDownPos.x, rawY - mouseDownPos.y);
        const elapsed = performance.now() - mouseDownTime;

        // Quick click triggers Flip
        if (dist < 8 && elapsed < 350) {
          targetFlipAngle += Math.PI;
        }

        isMouseDown = false;
        cardState.dragged = false;
        document.body.style.cursor = 'default';
      }
    }

    renderer.domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });

    // Animation Loop
    let lastTime = performance.now();

    function animate() {
      requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      // Smooth flip spin
      currentFlipAngle = THREE.MathUtils.lerp(currentFlipAngle, targetFlipAngle, 0.12);

      // Natural gentle breeze
      const breezeX = Math.sin(now * 0.0018) * 0.12;
      const breezeZ = Math.cos(now * 0.0015) * 0.08;

      fixedPos.set(0, getCeilingAnchorY(), 0);

      // Hook anchor point on card
      const hookWorld = new THREE.Vector3(0, hookLocalY, 0);
      hookWorld.applyEuler(cardState.rot);
      hookWorld.add(cardState.pos);

      // Verlet Cloth Simulation for Ribbon Joints
      joints[0].pos.copy(fixedPos);

      for (let i = 1; i < numSegments; i++) {
        const j = joints[i];
        if (!cardState.dragged) {
          j.vel.x = (j.pos.x - j.oldPos.x) * damping + breezeX * 0.05;
          j.vel.y = (j.pos.y - j.oldPos.y) * damping + gravity * dt * dt;
          j.vel.z = (j.pos.z - j.oldPos.z) * damping + breezeZ * 0.05;

          j.oldPos.copy(j.pos);
          j.pos.add(j.vel);
        }
      }

      // Relaxation constraints
      const targetEnd = cardState.dragged ? hookWorld : null;
      for (let iter = 0; iter < 5; iter++) {
        joints[0].pos.copy(fixedPos);
        for (let i = 0; i < numSegments - 1; i++) {
          const p1 = joints[i].pos;
          const p2 = joints[i + 1].pos;
          const delta = new THREE.Vector3().subVectors(p2, p1);
          const d = delta.length();
          if (d > 0.0001) {
            const diff = (d - segmentLength) / d;
            if (i === 0) {
              p2.sub(delta.multiplyScalar(diff));
            } else {
              p1.add(delta.clone().multiplyScalar(diff * 0.5));
              p2.sub(delta.multiplyScalar(diff * 0.5));
            }
          }
        }
        if (targetEnd) {
          joints[numSegments - 1].pos.lerp(targetEnd, 0.6);
        }
      }

      // Card physics when not dragged
      if (!cardState.dragged) {
        const lastJoint = joints[numSegments - 1].pos;
        const targetPos = new THREE.Vector3().subVectors(lastJoint, new THREE.Vector3(0, hookLocalY, 0));

        const vel = new THREE.Vector3().subVectors(cardState.pos, cardState.oldPos).multiplyScalar(damping);
        vel.y += gravity * dt * dt;
        vel.x += breezeX * 0.08;

        cardState.oldPos.copy(cardState.pos);
        cardState.pos.add(vel);

        // Spring towards suspension point
        cardState.pos.lerp(targetPos, 0.45);

        // Tilt based on swing velocity
        const vx = cardState.pos.x - cardState.oldPos.x;
        const vz = cardState.pos.z - cardState.oldPos.z;

        const targetRotZ = THREE.MathUtils.clamp(-vx * 7.5, -0.6, 0.6);
        const targetRotX = THREE.MathUtils.clamp(vz * 6.0, -0.5, 0.5);

        cardState.rot.z = THREE.MathUtils.lerp(cardState.rot.z, targetRotZ, 0.12);
        cardState.rot.x = THREE.MathUtils.lerp(cardState.rot.x, targetRotX, 0.12);
      }

      cardState.rot.y = currentFlipAngle;

      cardGroup.position.copy(cardState.pos);
      cardGroup.rotation.copy(cardState.rot);

      // Update Ribbon Geometry along dynamic spline
      const splinePoints = joints.map((j) => j.pos.clone());
      splinePoints.push(hookWorld);

      const curve = new THREE.CatmullRomCurve3(splinePoints);
      const curvePoints = curve.getPoints(ribbonSegments);

      const posAttr = ribbonGeom.attributes.position;
      const uvAttr = ribbonGeom.attributes.uv;

      for (let i = 0; i <= ribbonSegments; i++) {
        const pt = curvePoints[i];
        const t = i / ribbonSegments;
        const tangent = curve.getTangent(t);
        const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
        if (normal.lengthSq() < 0.001) normal.set(1, 0, 0);

        const halfW = (STRAP_WIDTH / 2) * (1.0 - t * 0.15);
        const vIdx = i * 2;

        posAttr.setXYZ(vIdx, pt.x - normal.x * halfW, pt.y - normal.y * halfW, pt.z - normal.z * halfW);
        uvAttr.setXY(vIdx, 1.0 - t, 0);

        posAttr.setXYZ(vIdx + 1, pt.x + normal.x * halfW, pt.y + normal.y * halfW, pt.z + normal.z * halfW);
        uvAttr.setXY(vIdx + 1, 1.0 - t, 1);
      }

      posAttr.needsUpdate = true;
      uvAttr.needsUpdate = true;
      ribbonGeom.computeVertexNormals();

      renderer.render(scene, camera);
    }

    // Dynamic resize handler
    function handleResize() {
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 480;
      if (w < 20 || h < 20) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      fixedPos.set(0, getCeilingAnchorY(), 0);
    }

    window.addEventListener('resize', handleResize);
    if (window.ResizeObserver) {
      new ResizeObserver(handleResize).observe(container);
    }

    animate();
  }

  function initAllLanyards() {
    if (typeof THREE === 'undefined') {
      setTimeout(initAllLanyards, 100);
      return;
    }

    // 1. Digifox Studio (HEPL ID)
    createLanyardInstance({
      containerId: 'lanyard-container',
      frontImage: 'assets/id_card_front.png',
      backImage: 'assets/id_card_back.png',
      strapImage: 'assets/hepl_lanyard.png'
    });

    // 2. Madras MindWorks (MMW ID with updated email & phone)
    createLanyardInstance({
      containerId: 'lanyard-container-mmw',
      frontImage: 'assets/mmw_id_front.png',
      backImage: 'assets/mmw_id_back.png',
      strapImage: 'assets/mmw_lanyard.png'
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllLanyards);
  } else {
    initAllLanyards();
  }

  window.initAllLanyards = initAllLanyards;
})();
