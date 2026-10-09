/**
 * PICO XR Developer Assistant & Unity OpenXR Panel
 * Recreates the developer.picoxr.com floating bot assistant and Unity OpenXR settings window
 */

(function () {
  // Prevent duplicate initialization
  if (window.__picoXrWidgetInitialized) return;
  window.__picoXrWidgetInitialized = true;

  // Insert HTML into body
  const widgetContainer = document.createElement('div');
  widgetContainer.className = 'pico-xr-widget-root';
  widgetContainer.innerHTML = `
    <!-- Floating PICO XR Bot Assistant -->
    <div class="pico-bot-float-container" id="picoBotContainer">
      <div class="pico-bot-tooltip" id="picoBotTooltip">
        <span>🎮 PICO XR OpenXR Hub</span>
        <span class="pico-bot-badge">Unity</span>
      </div>

      <button class="pico-bot-float-btn" id="picoBotBtn" aria-label="Open PICO XR OpenXR Settings" title="Click to open PICO XR Unity Project Settings">
        <div class="pico-bot-pulse-ring"></div>
        <div class="pico-bot-notify-dot">1</div>

        <!-- Visor with authentic base image and animated glowing eyes -->
        <div class="pico-visor-wrapper">
          <img src="/assets/pico_bot_icon.png" alt="PICO XR Bot Visor" class="pico-visor-base-img" />
          <div class="pico-visor-eyes-layer">
            <div class="pico-visor-eyes" id="picoEyes">
              <div class="pico-eye pico-eye-left"></div>
              <div class="pico-eye pico-eye-right"></div>
            </div>
          </div>
        </div>
      </button>
    </div>

    <!-- Unity OpenXR Settings Modal -->
    <div class="pico-unity-modal-backdrop" id="picoUnityModalBackdrop" role="dialog" aria-modal="true">
      <div class="unity-editor-window" id="picoUnityWindow">
        <!-- Title bar -->
        <div class="unity-titlebar">
          <div class="unity-title-left">
            <svg class="unity-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>Project Settings</span>
            <span style="color:#666;margin:0 2px;">/</span>
            <span style="color:#dfdfdf;">XR Plug-in Management</span>
            <span style="color:#666;margin:0 2px;">/</span>
            <span style="color:#38bdf8;">OpenXR</span>
            <span class="unity-badge-xr">PICO XR SDK</span>
          </div>
          <div class="unity-title-actions">
            <a href="https://developer.picoxr.com/document/unity/hand-tracking/" target="_blank" rel="noopener noreferrer" class="unity-btn-icon" id="picoDocQuickBtn" title="Open PICO Hand Tracking Documentation">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <button class="unity-btn-icon unity-btn-close" id="picoModalCloseBtn" title="Close window">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Platform Tabs -->
        <div class="unity-tabs-bar">
          <button class="unity-tab-btn active" data-tab="android">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0002s.4482-1.0002.9993-1.0002c.5516 0 .9997.4486.9997 1.0002s-.4481 1.0002-.9997 1.0002m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0002s.4482-1.0002.9993-1.0002c.5516 0 .9997.4486.9997 1.0002s-.4481 1.0002-.9997 1.0002m11.4045-6.02l1.9964-3.456a.416.416 0 00-.1523-.5676.416.416 0 00-.568.1523l-2.0223 3.503C15.5902 8.4126 13.8533 8.0935 12 8.0935c-1.8545 0-3.591.3191-5.1325.8601L4.8453 5.4507a.416.416 0 00-.568-.1523.416.416 0 00-.1523.5676l1.9964 3.456C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
            </svg>
            <span>Android (PICO Headset)</span>
          </button>
          <button class="unity-tab-btn" data-tab="standalone">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <span>Standalone (PC Link)</span>
          </button>
          <button class="unity-tab-btn" data-tab="hand-tracking">
            <span>🖐️ Live Hand Tracking</span>
          </button>
        </div>

        <!-- Window Body -->
        <div class="unity-window-content">
          <!-- 1. The Warning Banner (EXACT match to user screenshot) -->
          <div class="unity-warning-box">
            <div class="unity-warning-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L2 22l5.88-.93C9.13 21.66 10.53 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
              </svg>
            </div>
            <div class="unity-warning-text">
              Only enable interaction profiles that you actually test, to ensure their input bindings are complete. Otherwise, disable that interaction profile, to allow the OpenXR runtime to remap user input from a profile you do test.
            </div>
          </div>

          <!-- 2. Enabled Interaction Profiles (Exact match to screenshot) -->
          <div>
            <div class="unity-section-header">
              <span>Enabled Interaction Profiles</span>
              <span class="unity-section-sub" id="picoProfileCountSub">4 Enabled</span>
            </div>
            <div class="unity-profiles-container">
              <div class="unity-profiles-list" id="picoProfilesList">
                <div class="unity-profile-row" data-profile="g3">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-g3" />
                  <label for="chk-g3" class="unity-profile-name">PICO G3 Touch Controller Profile</label>
                  <span class="unity-profile-tag">3DoF / 6DoF</span>
                </div>
                <div class="unity-profile-row" data-profile="neo3">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-neo3" />
                  <label for="chk-neo3" class="unity-profile-name">PICO Neo3 Touch Controller Profile</label>
                  <span class="unity-profile-tag">Optical 6DoF</span>
                </div>
                <div class="unity-profile-row selected" data-profile="pico4u">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-pico4u" />
                  <label for="chk-pico4u" class="unity-profile-name">PICO4 Ultra Touch Controller Profile</label>
                  <span class="unity-profile-tag" style="background:#0284c7;color:#fff;">Active Flagship</span>
                </div>
                <div class="unity-profile-row" data-profile="pico4">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-pico4" />
                  <label for="chk-pico4" class="unity-profile-name">PICO4 Touch Controller Profile</label>
                  <span class="unity-profile-tag">Sub-millimeter</span>
                </div>
              </div>
              <!-- Toolbar (+ / - buttons at bottom right) -->
              <div class="unity-profiles-toolbar">
                <button class="unity-toolbar-btn" id="btnProfileAdd" title="Add Interaction Profile">+</button>
                <button class="unity-toolbar-btn" id="btnProfileRemove" title="Remove Selected Profile">—</button>
              </div>
            </div>
          </div>

          <!-- Selected Profile Inspector Drawer -->
          <div class="pico-profile-inspector" id="picoProfileInspector">
            <div class="pico-profile-inspector-title">
              <span id="inspectorTitle">PICO4 Ultra Touch Controller Profile</span>
              <span style="font-size:10px;color:#94a3b8;">OpenXR Path: /interaction_profiles/pico/pico4_ultra</span>
            </div>
            <div class="pico-profile-bindings-grid">
              <div><span class="pico-binding-key">Aim / Grip Pose:</span> <span class="pico-binding-val">Vector3 / Quat (6DoF)</span></div>
              <div><span class="pico-binding-key">Trigger & Squeeze:</span> <span class="pico-binding-val">Float [0..1] + Click</span></div>
              <div><span class="pico-binding-key">Thumbstick:</span> <span class="pico-binding-val">Vector2 [-1..1]</span></div>
              <div><span class="pico-binding-key">Capacitive Touch:</span> <span class="pico-binding-val">Thumb rest, A/B, X/Y</span></div>
            </div>
          </div>

          <!-- 3. OpenXR Feature Groups (Exact match to screenshot header) -->
          <div>
            <div class="unity-foldout-header" id="picoFeatureFoldoutHeader">
              <svg class="unity-foldout-arrow" id="picoFoldoutArrow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
              <span>OpenXR Feature Groups</span>
            </div>
            <div class="unity-features-box" id="picoFeatureBox">
              <div class="unity-feature-item">
                <div class="unity-feature-left">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-pico-supp" />
                  <label for="chk-pico-supp" style="cursor:pointer;color:#e2e8f0;">PICO Support (OpenXR Loader)</label>
                </div>
                <span class="unity-feature-badge">v3.0.0</span>
              </div>
              <div class="unity-feature-item" style="background: rgba(56, 189, 248, 0.08); padding: 4px 6px; border-radius: 4px; margin: -2px -6px;">
                <div class="unity-feature-left">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-hand-tracking" />
                  <label for="chk-hand-tracking" style="cursor:pointer;color:#38bdf8;font-weight:600;">Hand Tracking Subsystem</label>
                </div>
                <span class="unity-feature-badge" style="background:#0369a1;color:#bae6fd;">High Precision</span>
              </div>
              <div class="unity-feature-item">
                <div class="unity-feature-left">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-motion-tracker" />
                  <label for="chk-motion-tracker" style="cursor:pointer;color:#e2e8f0;">PICO Motion Tracker (Leg / Body)</label>
                </div>
                <span class="unity-feature-badge">Full Body</span>
              </div>
              <div class="unity-feature-item">
                <div class="unity-feature-left">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-face-tracking" />
                  <label for="chk-face-tracking" style="cursor:pointer;color:#e2e8f0;">Face & Eye Tracking Subsystem</label>
                </div>
                <span class="unity-feature-badge">Expressive</span>
              </div>
            </div>
          </div>

          <!-- 4. PICO Hand Tracking Live Demo & Gestures -->
          <div class="pico-hand-tracking-card">
            <div class="pico-hand-header">
              <div class="pico-hand-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3"></path>
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7"></path>
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.83L7 15"></path>
                </svg>
                <span>PICO Hand Tracking Gestures Simulator</span>
              </div>
              <span id="picoGestureStatus" style="font-size:10.5px;color:#a5f3fc;font-weight:600;">Gesture: Pinch</span>
            </div>

            <!-- Gesture Buttons -->
            <div class="pico-gestures-grid">
              <button class="pico-gesture-chip active" data-gesture="pinch">
                <span class="pico-gesture-icon">👌</span>
                <span>Pinch</span>
              </button>
              <button class="pico-gesture-chip" data-gesture="grab">
                <span class="pico-gesture-icon">✊</span>
                <span>Fist Grab</span>
              </button>
              <button class="pico-gesture-chip" data-gesture="open">
                <span class="pico-gesture-icon">✋</span>
                <span>Open Palm</span>
              </button>
              <button class="pico-gesture-chip" data-gesture="point">
                <span class="pico-gesture-icon">👉</span>
                <span>Ray Point</span>
              </button>
            </div>
          </div>

          <!-- 5. Actions / Documentation link -->
          <div class="unity-footer-actions">
            <a href="https://developer.picoxr.com/document/unity/hand-tracking/" target="_blank" rel="noopener noreferrer" class="pico-doc-link-btn">
              <span>📖 Open PICO Hand Tracking Docs</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <button class="unity-apply-btn" id="picoApplyBtn">Apply & Save</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(widgetContainer);

  // Cache elements
  const floatBtn = document.getElementById('picoBotBtn');
  const tooltip = document.getElementById('picoBotTooltip');
  const modalBackdrop = document.getElementById('picoUnityModalBackdrop');
  const modalCloseBtn = document.getElementById('picoModalCloseBtn');
  const eyes = document.getElementById('picoEyes');
  const foldoutHeader = document.getElementById('picoFeatureFoldoutHeader');
  const foldoutArrow = document.getElementById('picoFoldoutArrow');
  const featureBox = document.getElementById('picoFeatureBox');
  const gestureChips = document.querySelectorAll('.pico-gesture-chip');
  const gestureStatus = document.getElementById('picoGestureStatus');
  const profileRows = document.querySelectorAll('.unity-profile-row');
  const applyBtn = document.getElementById('picoApplyBtn');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const profileCountSub = document.getElementById('picoProfileCountSub');
  const btnProfileAdd = document.getElementById('btnProfileAdd');
  const btnProfileRemove = document.getElementById('btnProfileRemove');

  // Toggle modal
  function openModal() {
    modalBackdrop.classList.add('open');
    tooltip.classList.remove('visible');
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
  }

  floatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (modalBackdrop.classList.contains('open')) {
      closeModal();
    } else {
      openModal();
    }
  });

  modalCloseBtn.addEventListener('click', closeModal);

  // Close when clicking outside modal window
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // ESC to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Foldout toggle
  if (foldoutHeader && featureBox && foldoutArrow) {
    foldoutHeader.addEventListener('click', () => {
      const isHidden = featureBox.style.display === 'none';
      featureBox.style.display = isHidden ? 'flex' : 'none';
      foldoutArrow.classList.toggle('collapsed', !isHidden);
    });
  }

  // Profile data for inspector
  const profileInspectInfo = {
    g3: {
      title: 'PICO G3 Touch Controller Profile',
      path: '/interaction_profiles/pico/g3_controller',
      tracking: '3DoF / 6DoF Rotational + Linear',
      trigger: 'Float [0..1] + Click',
      thumbstick: 'Touchpad 2D [-1..1]',
      touch: 'Trigger, Touchpad, Back button'
    },
    neo3: {
      title: 'PICO Neo3 Touch Controller Profile',
      path: '/interaction_profiles/pico/neo3_controller',
      tracking: 'Optical 6DoF High Accuracy',
      trigger: 'Analog Trigger [0..1] + Grip Squeeze',
      thumbstick: '2-Axis Thumbstick + Click',
      touch: 'Capacitive Thumbstick, A/B, X/Y'
    },
    pico4u: {
      title: 'PICO4 Ultra Touch Controller Profile',
      path: '/interaction_profiles/pico/pico4_ultra',
      tracking: 'Ringless 6DoF High-Precision IMU + IR',
      trigger: 'Dual-Stage Hall Effect Trigger',
      thumbstick: 'Precision Ergonomic Joystick',
      touch: 'Broad Capacitive Surface Area'
    },
    pico4: {
      title: 'PICO4 Touch Controller Profile',
      path: '/interaction_profiles/pico/pico4_controller',
      tracking: 'Sub-millimeter Optical Tracking Arc',
      trigger: 'Analog Trigger + Linear Grip Force',
      thumbstick: 'Omnidirectional Joystick + Press',
      touch: 'Multi-point Touch Sensing'
    }
  };

  // Profile row selection
  profileRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') return;
      profileRows.forEach((r) => r.classList.remove('selected'));
      row.classList.add('selected');
      const pId = row.getAttribute('data-profile');
      if (inspectorTitle && profileInspectInfo[pId]) {
        inspectorTitle.textContent = profileInspectInfo[pId].title;
      }
    });
  });

  // Checkbox count update
  const checkboxes = document.querySelectorAll('.unity-profile-list input[type="checkbox"]');
  function updateCheckboxCount() {
    const checked = document.querySelectorAll('.unity-profiles-list input[type="checkbox"]:checked').length;
    if (profileCountSub) {
      profileCountSub.textContent = `${checked} Enabled`;
    }
  }
  checkboxes.forEach((cb) => cb.addEventListener('change', updateCheckboxCount));

  // Plus / Minus toolbar feedback
  if (btnProfileAdd) {
    btnProfileAdd.addEventListener('click', () => {
      alert('OpenXR Profile selector: All available PICO interaction profiles are already registered in this configuration.');
    });
  }
  if (btnProfileRemove) {
    btnProfileRemove.addEventListener('click', () => {
      const sel = document.querySelector('.unity-profile-row.selected');
      if (sel) {
        const cb = sel.querySelector('input[type="checkbox"]');
        if (cb) {
          cb.checked = !cb.checked;
          updateCheckboxCount();
        }
      }
    });
  }

  // Gesture chips interactive simulator
  const gestureDetails = {
    pinch: '👌 Index + Thumb Pinch: Raycast Grab Active (Strength: 1.0)',
    grab: '✊ Fist Grab: Physics Direct Grab Active (5 Fingers Closed)',
    open: '✋ Open Palm: Menu Ray / Teleportation Aim Enabled',
    point: '👉 Ray Point: UI Laser Pointer Targeting Enabled'
  };

  gestureChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      gestureChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const g = chip.getAttribute('data-gesture');
      if (gestureStatus && gestureDetails[g]) {
        gestureStatus.textContent = gestureDetails[g];
      }
    });
  });

  // Apply button feedback
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const origText = applyBtn.textContent;
      applyBtn.textContent = '✓ Saved to Manifest';
      applyBtn.style.background = '#15803d';
      setTimeout(() => {
        applyBtn.textContent = origText;
        applyBtn.style.background = '#3a3a3a';
      }, 1600);
    });
  }

  // Interactive mouse tracking for eyes when cursor is nearby
  let isTrackingMouse = false;
  let mouseMoveTimeout;

  window.addEventListener('mousemove', (e) => {
    if (!floatBtn || !eyes) return;
    const btnRect = floatBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const dx = e.clientX - btnCenterX;
    const dy = e.clientY - btnCenterY;
    const dist = Math.hypot(dx, dy);

    // If mouse within 240px of the bot, eyes look slightly towards the mouse
    if (dist < 240) {
      isTrackingMouse = true;
      eyes.style.animation = 'none'; // pause autonomous animation
      const angle = Math.atan2(dy, dx);
      const eyeOffset = Math.min(dist / 45, 4); // max 4px
      const ox = Math.cos(angle) * eyeOffset;
      const oy = Math.sin(angle) * (eyeOffset * 0.6); // smaller vertical movement
      eyes.style.transform = `translate(${ox}px, ${oy}px)`;

      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        // Return to natural idle loop
        isTrackingMouse = false;
        eyes.style.animation = 'pico-eyes-move 5.5s infinite ease-in-out';
      }, 2500);
    } else if (isTrackingMouse) {
      isTrackingMouse = false;
      eyes.style.animation = 'pico-eyes-move 5.5s infinite ease-in-out';
    }
  });

  // Show a welcome tooltip once after 2.5 seconds to invite user interaction
  setTimeout(() => {
    if (!modalBackdrop.classList.contains('open')) {
      tooltip.classList.add('visible');
      setTimeout(() => {
        tooltip.classList.remove('visible');
      }, 5000);
    }
  }, 2500);
})();
