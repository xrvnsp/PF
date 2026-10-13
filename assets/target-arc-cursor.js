/**
 * TARGET ARC CURSOR
 * Seamless fusion of Iron Man Arc Reactor & React Bits Target Cursor
 * Features:
 * - Free-roaming Iron Man Arc Reactor with rotating outer ring & pulsing core
 * - Smooth Velocity Verlet spring transition into React Bits Target Reticle
 * - Snaps to interactive elements matching exact width, height, and border-radius
 * - Smart tactical HUD labels & energy click shockwave
 */

(function () {
  'use strict';

  // Desktop and hybrid pointer check — skip only pure touch devices with no mouse
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  const CORNER_ANGLES = [0, 90, 180, 270];
  const QUARTER = Math.PI / 2;

  function spring(state, goal, stiffness, damping, dt) {
    const steps = 2;
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      state.v += (stiffness * (goal - state.x) - damping * state.v) * h;
      state.x += state.v * h;
    }
  }

  function getAutoLabel(el) {
    if (!el) return '';
    if (el.hasAttribute('data-cursor-label')) return el.getAttribute('data-cursor-label');
    if (el.closest('.hero-resume-btn') || el.closest('[download]')) return 'DOWNLOAD CV';
    if (el.closest('#terminal-skip-btn')) return 'SKIP BOOT';
    if (el.closest('.nav-btn-resume')) return 'RESUME';
    if (el.closest('.nav-link')) {
      const text = el.textContent.trim().toUpperCase();
      return text ? `NAV: ${text}` : 'NAVIGATE';
    }
    if (el.closest('.timeline-lanyard-card') || el.closest('#lanyard-container') || el.closest('#lanyard-container-mmw')) return 'XR ID BADGE';
    if (el.closest('.project-card')) return 'INSPECT PROJECT';
    if (el.closest('.pico-hud-btn') || el.closest('#pico-xr-launcher')) return 'UNITY XR';
    if (el.closest('.pc-card-wrapper') || el.closest('.about-image')) return 'SP PROFILE';
    if (el.closest('.social-link') || el.closest('.social-icon')) return 'CONNECT';
    if (el.closest('.filter-btn')) return 'FILTER';
    if (el.closest('input, textarea, select')) return 'INPUT';
    if (el.closest('button, .btn')) return 'ENGAGE';
    if (el.closest('a')) return 'EXPLORE';
    return 'TARGET LOCKED';
  }

  function init() {
    // Remove old standalone cursor elements if present
    const oldCore = document.querySelector('.arc-cursor-core');
    const oldReactor = document.querySelector('.arc-cursor-reactor');
    if (oldCore) oldCore.remove();
    if (oldReactor) oldReactor.remove();

    // Build unified Target Arc Cursor DOM
    const root = document.createElement('div');
    root.id = 'target-arc-cursor';
    root.className = 'target-arc-cursor-root';
    root.setAttribute('aria-hidden', 'true');

    // Central Core Dot
    const dot = document.createElement('div');
    dot.className = 'tac-core-dot';

    // Arc Reactor SVG Halo
    const halo = document.createElement('div');
    halo.className = 'tac-reactor-halo';
    halo.innerHTML = `
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tac-gf" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="tac-core-gf" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="tac-core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="white" stop-opacity="1" />
            <stop offset="40%" stop-color="#c0ffff" stop-opacity="1" />
            <stop offset="100%" stop-color="#00f5ff" stop-opacity="1" />
          </radialGradient>
        </defs>
        <g class="tac-spin-group">
          <circle cx="30" cy="30" r="27" fill="none" stroke="#00f5ff" stroke-width="1.8" filter="url(#tac-gf)" />
          <circle cx="30" cy="3" r="2.4" fill="#00f5ff" filter="url(#tac-gf)" />
          <circle cx="53.38" cy="43.5" r="2.4" fill="#00f5ff" filter="url(#tac-gf)" />
          <circle cx="6.62" cy="43.5" r="2.4" fill="#00f5ff" filter="url(#tac-gf)" />
        </g>
        <line x1="30" y1="17" x2="30" y2="3" stroke="#00f5ff" stroke-width="1.6" filter="url(#tac-gf)" />
        <line x1="41.26" y1="36.5" x2="53.38" y2="43.5" stroke="#00f5ff" stroke-width="1.6" filter="url(#tac-gf)" />
        <line x1="18.74" y1="36.5" x2="6.62" y2="43.5" stroke="#00f5ff" stroke-width="1.6" filter="url(#tac-gf)" />
        <circle cx="30" cy="30" r="13" fill="rgba(0,10,28,0.93)" stroke="#00f5ff" stroke-width="1.5" filter="url(#tac-gf)" />
        <polygon points="19.6,24 40.4,24 30,42" fill="rgba(0,245,255,0.22)" stroke="#00f5ff" stroke-width="1.6" filter="url(#tac-gf)" />
        <circle cx="30" cy="30" r="5.5" fill="#00f5ff" class="tac-core-pulse" filter="url(#tac-core-gf)" />
        <circle cx="30" cy="30" r="3.6" fill="url(#tac-core-grad)" />
        <circle cx="30" cy="30" r="1.8" fill="white" />
      </svg>
    `;

    // 4 Corner Brackets
    const corners = [];
    for (let i = 0; i < 4; i++) {
      const c = document.createElement('span');
      c.className = `tac-corner-bracket tac-corner-${i}`;
      root.appendChild(c);
      corners.push(c);
    }

    // Tactical HUD Label
    const label = document.createElement('span');
    label.className = 'tac-target-label';
    root.appendChild(label);

    root.appendChild(halo);
    root.appendChild(dot);
    document.body.appendChild(root);

    // Physics State
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, inside: false, pressed: false };
    const centerX = { x: pointer.x, v: 0 };
    const centerY = { x: pointer.y, v: 0 };
    const halfW = { x: 26, v: 0 };
    const halfH = { x: 26, v: 0 };
    const radius = { x: 26, v: 0 };
    const turn = { x: 0, v: 0 };
    const lock = { x: 0, v: 0 };
    const presence = { x: 0, v: 0 };

    let currentTarget = null;
    let targetRadius = 0;
    let quarter = 0;
    let lastTime = performance.now();
    let raf = 0;
    let haloX = pointer.x, haloY = pointer.y;

    const TARGET_SELECTOR = 'a, button, .btn, .nav-link, .nav-btn-resume, .project-card, .timeline-content, .timeline-lanyard-card, .exp-logo-wrapper, .star-border-container, .pc-card-wrapper, .filter-btn, .lanyard-container, input, textarea, select, .pico-hud-btn, #pico-xr-launcher, [data-cursor-target]';
    const CORNER_SIZE = 14;
    const THICKNESS = 2;
    const PADDING = 8;
    const IDLE_SIZE = 26; // half of 52px halo

    function findTarget(x, y) {
      const el = document.elementFromPoint(x, y);
      return el ? el.closest(TARGET_SELECTOR) : null;
    }

    function lockOn(nextTarget) {
      if (nextTarget === currentTarget) return;
      currentTarget = nextTarget;
      if (currentTarget) {
        quarter = Math.round(turn.x / QUARTER);
        const style = window.getComputedStyle(currentTarget);
        targetRadius = parseFloat(style.borderTopLeftRadius) || 0;
        root.classList.add('tac-locked');
      } else {
        root.classList.remove('tac-locked');
      }
    }

    function loop(now) {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;

      // Handle disconnected target
      if (currentTarget && !currentTarget.isConnected) {
        lockOn(null);
      }

      const rect = currentTarget ? currentTarget.getBoundingClientRect() : null;
      const isLocked = !!(rect && pointer.inside);

      // Spring parameters
      const snapK = 260;
      const snapC = 28;

      spring(presence, pointer.inside ? 1 : 0, 300, 34, dt);
      spring(lock, isLocked ? 1 : 0, snapK, snapC, dt);

      let goalX = pointer.x;
      let goalY = pointer.y;
      let goalW = IDLE_SIZE;
      let goalH = IDLE_SIZE;
      let goalR = IDLE_SIZE;

      if (isLocked) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Subtle magnetic pull toward element center
        goalX = cx + (pointer.x - cx) * 0.12;
        goalY = cy + (pointer.y - cy) * 0.12;
        goalW = rect.width / 2 + PADDING;
        goalH = rect.height / 2 + PADDING;
        goalR = Math.min(targetRadius + PADDING, CORNER_SIZE * 1.5);
      }

      // Spring updates for center and dimensions
      spring(centerX, goalX, isLocked ? snapK : 1800, isLocked ? snapC : 80, dt);
      spring(centerY, goalY, isLocked ? snapK : 1800, isLocked ? snapC : 80, dt);
      spring(halfW, goalW, snapK, snapC, dt);
      spring(halfH, goalH, snapK, snapC, dt);
      spring(radius, goalR, snapK, snapC, dt);

      if (isLocked) {
        spring(turn, quarter * QUARTER, snapK, snapC, dt);
      } else {
        turn.x += 1.2 * dt; // Gentle ambient rotation
      }

      // Core dot tracks mouse with fast lerp
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;

      // Halo position: when locked, snaps smoothly to center of target; when free, drifts smoothly behind cursor
      const targetHaloX = isLocked ? centerX.x : pointer.x;
      const targetHaloY = isLocked ? centerY.y : pointer.y;
      haloX += (targetHaloX - haloX) * (isLocked ? 0.25 : 0.16);
      haloY += (targetHaloY - haloY) * (isLocked ? 0.25 : 0.16);
      halo.style.transform = `translate3d(${haloX.toFixed(2)}px, ${haloY.toFixed(2)}px, 0) translate(-50%, -50%)`;

      // When target is locked, halo scales proportionally to fit comfortably inside or behind target
      if (isLocked) {
        const haloScale = Math.min(2.0, Math.max(0.85, Math.min(halfW.x, halfH.y) / 22));
        halo.style.width = `${(52 * haloScale).toFixed(1)}px`;
        halo.style.height = `${(52 * haloScale).toFixed(1)}px`;
      } else {
        halo.style.width = '52px';
        halo.style.height = '52px';
      }

      // Update 4 corner brackets
      const cos = Math.cos(turn.x);
      const sin = Math.sin(turn.x);
      const w = Math.max(0, halfW.x);
      const h = Math.max(0, halfH.y);
      const local = [
        [-w, -h], // TL
        [w, -h],  // TR
        [w, h],   // BR
        [-w, h]   // BL
      ];
      const r = Math.max(0, radius.x);
      const degrees = (turn.x * 180) / Math.PI;

      let minX = Infinity;
      let minY = Infinity;

      for (let i = 0; i < 4; i++) {
        const [lx, ly] = local[i];
        const x = centerX.x + lx * cos - ly * sin;
        const y = centerY.y + lx * sin + ly * cos;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);

        const corner = corners[i];
        corner.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${(CORNER_ANGLES[i] + degrees).toFixed(2)}deg)`;
        corner.style.width = `${CORNER_SIZE}px`;
        corner.style.height = `${CORNER_SIZE}px`;
        corner.style.borderWidth = `${THICKNESS}px 0 0 ${THICKNESS}px`;
        corner.style.borderTopLeftRadius = `${r.toFixed(1)}px`;
      }

      // Update HUD Label
      if (isLocked && lock.x > 0.4) {
        const text = getAutoLabel(currentTarget);
        if (label.textContent !== text) label.textContent = text;
        label.style.transform = `translate3d(${(minX).toFixed(2)}px, ${(minY - 14).toFixed(2)}px, 0) translateY(-100%)`;
        label.style.opacity = Math.min(1, (lock.x - 0.4) * 2).toFixed(2);
      } else {
        label.style.opacity = '0';
      }

      root.style.opacity = pointer.inside ? '1' : '0';

      raf = requestAnimationFrame(loop);
    }

    // Robust pointer & mouse tracking
    function handleMove(e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.inside = true;
      const directTarget = (e.target && e.target.closest) ? e.target.closest(TARGET_SELECTOR) : null;
      lockOn(directTarget || findTarget(e.clientX, e.clientY));
    }

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('pointermove', handleMove, { passive: true });

    document.addEventListener('mouseover', (e) => {
      pointer.inside = true;
      const target = (e.target && e.target.closest) ? e.target.closest(TARGET_SELECTOR) : null;
      if (target) lockOn(target);
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      root.classList.add('tac-clicking');
      setTimeout(() => root.classList.remove('tac-clicking'), 160);
    });

    document.documentElement.addEventListener('mouseleave', () => {
      pointer.inside = false;
      lockOn(null);
    });

    window.addEventListener('scroll', () => {
      if (pointer.inside) {
        lockOn(findTarget(pointer.x, pointer.y));
      }
    }, { passive: true });

    raf = requestAnimationFrame(loop);
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
