import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './react_src/Lanyard';
import TargetCursor from './react_src/TargetCursor';

function initReactCursor() {
  if (
    typeof window !== 'undefined' &&
    (window.innerWidth <= 992 ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches)
  ) {
    return;
  }

  let mountEl = document.getElementById('target-cursor-mount');
  if (!mountEl) {
    mountEl = document.createElement('div');
    mountEl.id = 'target-cursor-mount';
    document.body.appendChild(mountEl);
  }
  if (!mountEl.dataset.cursorMounted) {
    mountEl.dataset.cursorMounted = 'true';
    const rootCursor = createRoot(mountEl);
    rootCursor.render(
      <TargetCursor
        spinDuration={3}
        hoverDuration={0.22}
        cursorColor="#00f5ff"
        size={52}
        cornerSize={14}
        thickness={2}
        padding={8}
        matchRadius={true}
        dotSize={4}
        showLabel={true}
        clickEffect={true}
        arcReactor={true}
      />
    );
  }
}

function initTimelineLanyards() {
  initReactCursor();

  const heplEl = document.getElementById('lanyard-container');
  if (heplEl && !heplEl.dataset.lanyardMounted) {
    heplEl.dataset.lanyardMounted = 'true';
    heplEl.innerHTML = '';
    const rootHepl = createRoot(heplEl);
    rootHepl.render(
      <Lanyard
        frontImage="/assets/id_card_front.png"
        backImage="/assets/id_card_back.png"
        strapImage="/assets/hepl_lanyard.png"
        finish="glossy"
        orientation="portrait"
        cardSize={[1.32, 2.25]}
        slotClearance={true}
        interactive={true}
        breeze={0.3}
        size={0.58}
      />
    );
  }

  const mmwEl = document.getElementById('lanyard-container-mmw');
  if (mmwEl && !mmwEl.dataset.lanyardMounted) {
    mmwEl.dataset.lanyardMounted = 'true';
    mmwEl.innerHTML = '';
    const rootMmw = createRoot(mmwEl);
    rootMmw.render(
      <Lanyard
        frontImage="/assets/mmw_id_front.png"
        backImage="/assets/mmw_id_back.png"
        strapImage="/assets/mmw_lanyard.png"
        finish="glossy"
        orientation="portrait"
        cardSize={[1.32, 2.25]}
        slotClearance={true}
        interactive={true}
        breeze={0.3}
        size={0.58}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineLanyards);
} else {
  initTimelineLanyards();
}
