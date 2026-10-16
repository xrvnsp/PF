import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './react_src/Lanyard';
import GridScan from './react_src/GridScan';

function initReactComponents() {
  // 1. Mount Digifox Studio Lanyard
  const heplEl = document.getElementById('lanyard-container');
  if (heplEl && !heplEl.dataset.lanyardMounted) {
    heplEl.dataset.lanyardMounted = 'true';
    heplEl.innerHTML = '';
    const rootHepl = createRoot(heplEl);
    rootHepl.render(
      <Lanyard
        frontImage="assets/id_card_front.png"
        backImage="assets/id_card_back.png"
        strapImage="assets/hepl_lanyard.png"
        finish="glossy"
        orientation="portrait"
        cardSize={[1.32, 2.25]}
        slotClearance={true}
        interactive={true}
        breeze={0.3}
        size={1.0}
        strapLength={0.3}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }

  // 2. Mount Madras Mindworks Lanyard
  const mmwEl = document.getElementById('lanyard-container-mmw');
  if (mmwEl && !mmwEl.dataset.lanyardMounted) {
    mmwEl.dataset.lanyardMounted = 'true';
    mmwEl.innerHTML = '';
    const rootMmw = createRoot(mmwEl);
    rootMmw.render(
      <Lanyard
        frontImage="assets/mmw_id_front.png"
        backImage="assets/mmw_id_back.png"
        strapImage="assets/mmw_lanyard.png"
        finish="glossy"
        orientation="portrait"
        cardSize={[1.32, 2.25]}
        slotClearance={true}
        interactive={true}
        breeze={0.3}
        size={1.0}
        strapLength={0.3}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }

  // 3. Mount React Bits GridScan into Disclaimer & Professional Notice
  const disclaimerEl = document.getElementById('disclaimer-gridscan-mount');
  if (disclaimerEl && !disclaimerEl.dataset.gridScanMounted) {
    disclaimerEl.dataset.gridScanMounted = 'true';
    disclaimerEl.innerHTML = '';
    const rootDisclaimer = createRoot(disclaimerEl);
    rootDisclaimer.render(
      <GridScan
        linesColor="#2a4563"
        scanColor="#00f5ff"
        cells={10}
        depth={3.0}
        scanDuration={2.0}
        scanDelay={1.0}
        clickEffect="ping"
        points={true}
        glow={0.9}
        trail={0.65}
        interactive={true}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReactComponents);
} else {
  initReactComponents();
}

