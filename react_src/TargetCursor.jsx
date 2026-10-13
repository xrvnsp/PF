'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './TargetCursor.css';

const CORNER_ANGLES = [0, 90, 180, 270];

const spring = (state, goal, stiffness, damping, dt) => {
  const steps = 2;
  const h = dt / steps;
  for (let i = 0; i < steps; i++) {
    state.v += (stiffness * (goal - state.x) - damping * state.v) * h;
    state.x += state.v * h;
  }
};

const resolveElement = value => (value && 'current' in value ? value.current : value) || null;

const getSmartLabel = el => {
  if (!el) return '';
  if (el.hasAttribute('data-cursor-label')) return el.getAttribute('data-cursor-label');
  if (el.closest('.hero-resume-btn') || el.closest('[download]')) return 'DOWNLOAD CV';
  if (el.closest('.nav-btn-resume')) return 'RESUME';
  if (el.closest('#terminal-skip-btn')) return 'SKIP BOOT';
  if (el.closest('.nav-link')) {
    const text = el.textContent.trim().toUpperCase();
    return text ? text : 'NAVIGATE';
  }
  if (el.closest('.timeline-lanyard-card') || el.closest('#lanyard-container') || el.closest('#lanyard-container-mmw')) {
    return 'XR ID BADGE';
  }
  if (el.closest('.project-card')) return 'INSPECT PROJECT';
  if (el.closest('.pico-hud-btn') || el.closest('#pico-xr-launcher')) return 'UNITY XR';
  if (el.closest('.pc-card-wrapper') || el.closest('.about-image')) return 'SP PROFILE';
  if (el.closest('.social-link') || el.closest('.social-icon')) return 'CONNECT';
  if (el.closest('.filter-btn')) return 'FILTER';
  if (el.closest('input, textarea, select')) return 'INPUT';
  if (el.closest('button, .btn')) return 'ENGAGE';
  if (el.closest('a')) return 'EXPLORE';
  return 'LOCKED';
};

const DEFAULT_TARGET_SELECTOR =
  'a, button, .btn, .nav-link, .nav-btn-resume, .project-card, .timeline-content, .timeline-lanyard-card, .exp-logo-wrapper, .star-border-container, .pc-card-wrapper, .filter-btn, .lanyard-container, input, textarea, select, .pico-hud-btn, #pico-xr-launcher, [data-cursor-target], .cursor-target';

const isTouchDevice = () => {
  if (typeof window === 'undefined') return true;
  return (
    window.innerWidth <= 992 ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  );
};

const TargetCursor = ({
  targetSelector = DEFAULT_TARGET_SELECTOR,
  cursorColor = '#00f5ff',
  cursorColorOnTarget,
  spinDuration = 3,
  hoverDuration = 0.22,
  parallaxOn = true,
  hideDefaultCursor = true,
  size = 52,
  cornerSize = 14,
  thickness = 2,
  padding = 6,
  matchRadius = true,
  dotSize = 4,
  blendMode = 'normal',
  showLabel = true,
  clickEffect = true,
  arcReactor = true,
  container
}) => {
  const [host, setHost] = useState(null);
  const rootRef = useRef(null);
  const cornerRefs = useRef([]);
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const haloRef = useRef(null);
  const wakeRef = useRef(null);

  const settings = {
    targetSelector,
    cursorColor,
    cursorColorOnTarget,
    spinDuration,
    hoverDuration: Math.max(0.05, hoverDuration),
    parallaxOn,
    hideDefaultCursor,
    size: Math.max(4, size),
    cornerSize: Math.max(2, cornerSize),
    thickness: Math.max(0.5, thickness),
    padding,
    matchRadius,
    dotSize: Math.max(0, dotSize),
    showLabel,
    clickEffect,
    arcReactor,
    container
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    // Strictly disable on mobile and touch devices
    if (isTouchDevice()) {
      setHost(null);
      return;
    }

    const checkPointer = () => {
      if (isTouchDevice()) {
        setHost(null);
      } else if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        setHost(document.body);
      } else {
        setHost(null);
      }
    };

    checkPointer();

    const handleTouch = () => {
      setHost(null);
    };

    window.addEventListener('touchstart', handleTouch, { passive: true, once: true });
    window.addEventListener('resize', checkPointer, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('resize', checkPointer);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!host || !root) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const style = document.createElement('style');
    document.head.appendChild(style);

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, inside: false, seen: false, pressed: false };
    const centerX = { x: pointer.x, v: 0 };
    const centerY = { x: pointer.y, v: 0 };
    const halfW = { x: settingsRef.current.size / 2, v: 0 };
    const halfH = { x: settingsRef.current.size / 2, v: 0 };
    const radius = { x: 12, v: 0 };
    const turn = { x: 0, v: 0 };
    const lock = { x: 0, v: 0 };
    const press = { x: 0, v: 0 };
    const presence = { x: 0, v: 0 };

    let target = null;
    let targetRadius = 0;
    let spinSpeed = 0;
    let raf = 0;
    let last = 0;
    let lastLabel = '';
    let lastColor = '';
    let lastScope = null;
    let haloX = pointer.x;
    let haloY = pointer.y;

    const scopeOf = () => resolveElement(settingsRef.current.container);

    const hideCursor = () => {
      const s = settingsRef.current;
      const scope = scopeOf();
      if (scope !== lastScope) {
        lastScope?.removeAttribute('data-target-cursor-scope');
        scope?.setAttribute('data-target-cursor-scope', '');
        lastScope = scope;
      }
      const selector = scope ? '[data-target-cursor-scope]' : 'html';
      const rule =
        s.hideDefaultCursor && pointer.inside ? `${selector}, ${selector} * { cursor: none !important; }` : '';
      if (style.textContent !== rule) style.textContent = rule;
    };

    const isValidTarget = el => {
      if (!el || !el.isConnected) return false;
      // Never target terminal loader or any hidden overlay
      if (el.closest('#terminal-loader') || el.closest('#target-cursor') || el.closest('#target-cursor-mount')) return false;
      const r = el.getBoundingClientRect();
      if (r.width <= 4 || r.height <= 4) return false;
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.pointerEvents === 'none') return false;
      return true;
    };

    const findTarget = (x, y, element) => {
      const s = settingsRef.current;
      const direct = (element && element.closest) ? element.closest(s.targetSelector) : null;
      if (direct && isValidTarget(direct)) {
        const scope = scopeOf();
        if (!scope || scope.contains(direct)) return direct;
      }
      const node = document.elementFromPoint(x, y);
      const found = (node && node.closest) ? node.closest(s.targetSelector) : null;
      if (found && isValidTarget(found)) {
        const scope = scopeOf();
        if (!scope || scope.contains(found)) return found;
      }
      return null;
    };

    const lockOn = next => {
      const validNext = isValidTarget(next) ? next : null;
      if (validNext === target) return;
      target = validNext;
      if (target) {
        const corner = parseFloat(getComputedStyle(target).borderTopLeftRadius) || 0;
        targetRadius = corner;
        spinSpeed = 0;
        root.classList.add('is-locked');
      } else {
        root.classList.remove('is-locked');
      }
    };

    const frame = now => {
      raf = 0;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;

      if (target && !target.isConnected) lockOn(null);
      const rect = target ? target.getBoundingClientRect() : null;
      const locked = !!rect && pointer.inside;
      const snapW = 4.6 / s.hoverDuration;
      const snapK = snapW * snapW;
      const snapC = 2 * 0.62 * snapW;

      spring(presence, pointer.inside ? 1 : 0, 260, 32, dt);
      spring(lock, locked ? 1 : 0, snapK, 2 * snapW, dt);
      spring(press, pointer.pressed && s.clickEffect ? 1 : 0, 900, 40, dt);

      let goalX = pointer.x;
      let goalY = pointer.y;
      let goalW = s.size / 2;
      let goalH = s.size / 2;
      let goalR = 12;

      if (locked) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const lean = s.parallaxOn ? 0.08 : 0;
        goalX = cx + (pointer.x - cx) * lean;
        goalY = cy + (pointer.y - cy) * lean;

        // Exact element bounds + padding (never swap W and H!)
        goalW = rect.width / 2 + s.padding;
        goalH = rect.height / 2 + s.padding;
        goalR = s.matchRadius ? Math.min(targetRadius + s.padding, s.cornerSize * 1.5) : 0;
      }

      if (!pointer.inside && presence.x < 0.01) pointer.seen = false;
      if (!pointer.seen) {
        centerX.x = goalX;
        centerY.y = goalY;
        halfW.x = goalW;
        halfH.x = goalH;
        pointer.seen = pointer.inside;
      }

      const follow = locked ? snapK : 2200;
      const followC = locked ? snapC : 2 * Math.sqrt(2200);
      spring(centerX, goalX, follow, followC, dt);
      spring(centerY, goalY, follow, followC, dt);
      spring(halfW, goalW, snapK, snapC, dt);
      spring(halfH, goalH, snapK, snapC, dt);
      spring(radius, goalR, snapK, 2 * snapW, dt);

      if (locked) {
        // When locked on target, rotate smoothly to 0° (perfect rectangular alignment)
        spring(turn, 0, snapK, snapC, dt);
      } else {
        // Free roaming: gentle ambient rotation
        const speed = s.spinDuration > 0 && !reduce ? (Math.PI * 2) / s.spinDuration : 0;
        spinSpeed += (speed - spinSpeed) * (1 - Math.exp(-dt * 3));
        turn.v = spinSpeed;
        turn.x += spinSpeed * dt;
      }

      const squeeze = 1 - press.x * 0.14;
      const cos = Math.cos(turn.x);
      const sin = Math.sin(turn.x);
      const w = Math.max(0, halfW.x) * squeeze;
      const h = Math.max(0, halfH.y) * squeeze;

      const local = [
        [-w, -h], // TL
        [w, -h],  // TR
        [w, h],   // BR
        [-w, h]   // BL
      ];
      const r = Math.max(0, Math.min(radius.x, s.cornerSize));
      const degrees = (turn.x * 180) / Math.PI;

      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      cornerRefs.current.forEach((corner, i) => {
        if (!corner) return;
        const [lx, ly] = local[i];
        const x = centerX.x + lx * cos - ly * sin;
        const y = centerY.y + lx * sin + ly * cos;

        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);

        corner.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${(CORNER_ANGLES[i] + degrees).toFixed(2)}deg)`;
        corner.style.width = `${s.cornerSize}px`;
        corner.style.height = `${s.cornerSize}px`;
        corner.style.borderWidth = `${s.thickness}px 0 0 ${s.thickness}px`;
        corner.style.borderTopLeftRadius = `${r.toFixed(2)}px`;
      });

      // Core dot tracking
      const dot = dotRef.current;
      if (dot) {
        const dotScale = 1 - press.x * 0.35;
        dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%) scale(${dotScale.toFixed(3)})`;
        dot.style.width = `${s.dotSize}px`;
        dot.style.height = `${s.dotSize}px`;
      }

      // Arc Reactor Halo Dynamics
      const halo = haloRef.current;
      if (halo) {
        if (locked) {
          // When locked on target: compact tactical core (size 28px - 36px) docked neatly in center
          const compactSize = Math.min(38, Math.max(24, Math.min(rect.width, rect.height) * 0.72));
          halo.style.width = `${compactSize.toFixed(1)}px`;
          halo.style.height = `${compactSize.toFixed(1)}px`;

          // Halo docks smoothly inside target
          const targetHaloX = centerX.x + (pointer.x - centerX.x) * 0.22;
          const targetHaloY = centerY.y + (pointer.y - centerY.y) * 0.22;
          haloX += (targetHaloX - haloX) * 0.25;
          haloY += (targetHaloY - haloY) * 0.25;
        } else {
          // Free roaming: 52px full halo following pointer
          halo.style.width = `${s.size}px`;
          halo.style.height = `${s.size}px`;
          haloX += (pointer.x - haloX) * 0.20;
          haloY += (pointer.y - haloY) * 0.20;
        }
        halo.style.transform = `translate3d(${haloX.toFixed(2)}px, ${haloY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      }

      // Tactical HUD Reticle Label Positioning
      const label = labelRef.current;
      if (label) {
        if (locked && isFinite(minX) && isFinite(minY)) {
          const text = s.showLabel && target ? getSmartLabel(target) : '';
          if (text !== label.textContent) label.textContent = text;
          const shown = text ? Math.max(0, Math.min(1, lock.x)) : 0;

          // Position: if target is near top of viewport (< 42px), show below target to avoid clipping
          const isNearTop = minY < 42;
          if (isNearTop) {
            label.style.transform = `translate3d(${minX.toFixed(2)}px, ${(maxY + 6).toFixed(2)}px, 0)`;
          } else {
            label.style.transform = `translate3d(${minX.toFixed(2)}px, ${(minY - 7).toFixed(2)}px, 0) translateY(-100%)`;
          }
          label.style.opacity = shown.toFixed(3);
        } else {
          label.style.opacity = '0';
          label.textContent = '';
        }
      }

      const mix = s.cursorColorOnTarget ? Math.round(Math.max(0, Math.min(1, lock.x)) * 100) : 0;
      const color = mix ? `color-mix(in oklab, ${s.cursorColorOnTarget} ${mix}%, ${s.cursorColor})` : s.cursorColor;
      if (color !== lastColor) {
        root.style.setProperty('--target-cursor-color', color);
        lastColor = color;
      }
      root.style.opacity = Math.max(0, Math.min(1, presence.x)).toFixed(3);

      const resting =
        !pointer.inside &&
        presence.x < 0.002 &&
        Math.abs(presence.v) < 0.002 &&
        Math.abs(lock.x) < 0.002 &&
        Math.abs(press.x) < 0.002;
      const spinning = pointer.inside && !locked && spinSpeed > 0.0001;
      const moving =
        Math.abs(centerX.v) + Math.abs(centerY.v) + Math.abs(halfW.v) + Math.abs(halfH.v) + Math.abs(turn.v) > 0.01 ||
        Math.abs(goalX - centerX.x) + Math.abs(goalY - centerY.x) > 0.05 ||
        Math.abs(lock.v) + Math.abs(press.v) + Math.abs(presence.v) > 0.001;
      if (!resting && (spinning || moving || locked)) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    wakeRef.current = () => {
      hideCursor();
      wake();
    };

    const insideScope = (x, y, element) => {
      const scope = scopeOf();
      if (!scope) return true;
      if (element && scope.contains(element)) return true;
      const box = scope.getBoundingClientRect();
      return x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
    };

    const onPointerMove = event => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      const inside = insideScope(pointer.x, pointer.y, event.target);
      if (inside !== pointer.inside) {
        pointer.inside = inside;
        hideCursor();
      }
      lockOn(inside ? findTarget(pointer.x, pointer.y, event.target) : null);
      wake();
    };

    const onPointerDown = event => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      pointer.pressed = true;
      root.classList.add('is-pressed');
      wake();
    };

    const onPointerUp = () => {
      pointer.pressed = false;
      root.classList.remove('is-pressed');
      wake();
    };

    const onLeave = () => {
      pointer.inside = false;
      pointer.pressed = false;
      root.classList.remove('is-pressed');
      lockOn(null);
      hideCursor();
      wake();
    };

    const onScroll = () => {
      if (!pointer.inside) return;
      lockOn(findTarget(pointer.x, pointer.y));
      wake();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('scroll', onScroll, { capture: true });
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      lastScope?.removeAttribute('data-target-cursor-scope');
      style.remove();
    };
  }, [host]);

  useEffect(() => {
    wakeRef.current?.();
  });

  if (!host) return null;

  return createPortal(
    <div ref={rootRef} className="target-cursor" style={{ mixBlendMode: blendMode, opacity: 0 }} aria-hidden="true">
      {/* 4 Corner Precision Brackets */}
      {CORNER_ANGLES.map((angle, i) => (
        <span
          key={angle}
          ref={element => {
            cornerRefs.current[i] = element;
          }}
          className={`target-cursor__corner target-cursor__corner-${i}`}
        />
      ))}

      {/* Central Core Dot */}
      <span ref={dotRef} className="target-cursor__dot" />

      {/* Integrated Iron Man Arc Reactor Optics */}
      {arcReactor && (
        <div ref={haloRef} className="target-cursor__reactor-halo">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="tc-glow-blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="tc-core-blur" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="tc-core-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="40%" stopColor="#c0ffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#00f5ff" stopOpacity="1" />
              </radialGradient>
            </defs>
            <g className="target-cursor__spin-ring">
              <circle cx="30" cy="30" r="27" fill="none" stroke="#00f5ff" strokeWidth="1.8" filter="url(#tc-glow-blur)" />
              <circle cx="30" cy="3" r="2.4" fill="#00f5ff" filter="url(#tc-glow-blur)" />
              <circle cx="53.38" cy="43.5" r="2.4" fill="#00f5ff" filter="url(#tc-glow-blur)" />
              <circle cx="6.62" cy="43.5" r="2.4" fill="#00f5ff" filter="url(#tc-glow-blur)" />
            </g>
            <line x1="30" y1="17" x2="30" y2="3" stroke="#00f5ff" strokeWidth="1.6" filter="url(#tc-glow-blur)" />
            <line x1="41.26" y1="36.5" x2="53.38" y2="43.5" stroke="#00f5ff" strokeWidth="1.6" filter="url(#tc-glow-blur)" />
            <line x1="18.74" y1="36.5" x2="6.62" y2="43.5" stroke="#00f5ff" strokeWidth="1.6" filter="url(#tc-glow-blur)" />
            <circle cx="30" cy="30" r="13" fill="rgba(0,10,28,0.93)" stroke="#00f5ff" strokeWidth="1.5" filter="url(#tc-glow-blur)" />
            <polygon points="19.6,24 40.4,24 30,42" fill="rgba(0,245,255,0.22)" stroke="#00f5ff" strokeWidth="1.6" filter="url(#tc-glow-blur)" />
            <circle cx="30" cy="30" r="5.5" fill="#00f5ff" className="target-cursor__pulse-core" filter="url(#tc-core-blur)" />
            <circle cx="30" cy="30" r="3.6" fill="url(#tc-core-grad)" />
            <circle cx="30" cy="30" r="1.8" fill="#ffffff" />
          </svg>
        </div>
      )}

      {/* Tactical HUD Label */}
      <span ref={labelRef} className="target-cursor__label" />
    </div>,
    host
  );
};

export default TargetCursor;
