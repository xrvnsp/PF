import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './react_src/Lanyard';

function initTimelineLanyards() {
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
