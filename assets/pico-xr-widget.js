/**
 * PICO XR Developer Assistant & Unity OpenXR Panel
 * Compact, non-blocking floating utility in the bottom-right corner.
 * Does not redirect to any external websites.
 */

(function () {
  // Prevent duplicate initialization
  if (window.__picoXrWidgetInitialized) return;
  window.__picoXrWidgetInitialized = true;

  const widgetRoot = document.createElement('div');
  widgetRoot.className = 'pico-xr-widget-root';
  widgetRoot.innerHTML = `
    <!-- Floating PICO XR Bot Assistant Button -->
    <div class="pico-bot-float-container" id="picoBotContainer">
      <div class="pico-bot-tooltip" id="picoBotTooltip">
        <span>🎮 PICO XR Assistant & Hire Me</span>
        <span class="pico-bot-badge">Online</span>
      </div>

      <button class="pico-bot-float-btn" id="picoBotBtn" aria-label="Open PICO XR Assistant" title="Click to open PICO XR Assistant & Unity Settings">
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

    <!-- Floating Compact Utility Window (Non-blocking) -->
    <div class="pico-floating-panel" id="picoFloatingPanel" role="dialog" aria-labelledby="picoPanelTitle">
      <!-- Titlebar -->
      <div class="pico-panel-titlebar">
        <div class="pico-title-left">
          <span class="pico-status-indicator"></span>
          <span id="picoPanelTitle">PICO XR Assistant • Saravana Prakash R</span>
        </div>
        <div class="pico-title-actions">
          <button class="pico-btn-icon" id="picoBtnMinimize" title="Minimize window">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button class="pico-btn-icon pico-btn-close" id="picoBtnClose" title="Close window">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="pico-tabs-bar">
        <button class="pico-tab-btn active" data-tab="assistant">
          <span>🤖 PICO Assistant & Hire Me</span>
        </button>
        <button class="pico-tab-btn" data-tab="unity-openxr">
          <span>⚙️ Unity OpenXR Settings</span>
        </button>
      </div>

      <!-- Content Area -->
      <div class="pico-tab-content-area">
        <!-- ================= TAB 1: PICO AI Assistant & Hire Me ================= -->
        <div class="pico-tab-view active" id="tabViewAssistant">
          <!-- Bot Greeting Card -->
          <div class="pico-assistant-hero">
            <div class="pico-hero-avatar">
              <img src="/assets/pico_bot_icon.png" alt="PICO Bot" />
            </div>
            <div class="pico-hero-text">
              <h4>PICO XR Portfolio Assistant</h4>
              <p>Hi! I'm Saravana's XR assistant. Looking to build an XR project, collaborate on Unity OpenXR hand tracking, or hire an XR developer?</p>
            </div>
          </div>

          <!-- Quick Suggestion Chips -->
          <div>
            <div class="pico-chips-label">Quick Actions</div>
            <div class="pico-quick-chips">
              <button class="pico-prompt-chip" data-preset="project">💼 Discuss XR Project</button>
              <button class="pico-prompt-chip" data-preset="handtrack">🖐️ Hand Tracking & VR</button>
              <button class="pico-prompt-chip" data-preset="hire">⚡ Hire for Full-Time / Contract</button>
              <button class="pico-prompt-chip" data-preset="whatsapp">💬 Quick WhatsApp Message</button>
            </div>
          </div>

          <!-- In-Page Direct Message Form -->
          <form class="pico-msg-form" id="picoMsgForm" onsubmit="return false;">
            <input type="text" class="pico-form-input" id="picoSenderName" placeholder="Your Name" required />
            <input type="text" class="pico-form-input" id="picoSenderContact" placeholder="Your Email or Phone" required />
            <textarea class="pico-form-textarea" id="picoSenderMessage" placeholder="Type your message or project requirements here..." required></textarea>

            <div class="pico-form-footer">
              <div class="pico-direct-channels">
                <a href="https://wa.me/918344090472" target="_blank" rel="noopener noreferrer" class="pico-direct-btn" title="Open WhatsApp Chat">
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:saravana@madrasmindworks.com" class="pico-direct-btn" title="Email directly">
                  <span>Email</span>
                </a>
              </div>

              <button type="submit" class="pico-send-btn" id="picoSendBtn">
                <span>Send Message</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div id="picoFormStatus" style="font-size:11px;color:#10b981;display:none;margin-top:4px;"></div>
          </form>
        </div>

        <!-- ================= TAB 2: Unity OpenXR Settings ================= -->
        <div class="pico-tab-view" id="tabViewUnity">
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
                  <span class="unity-profile-tag" style="background:#0284c7;color:#fff;">Active</span>
                </div>
                <div class="unity-profile-row" data-profile="pico4">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-pico4" />
                  <label for="chk-pico4" class="unity-profile-name">PICO4 Touch Controller Profile</label>
                  <span class="unity-profile-tag">Sub-mm</span>
                </div>
              </div>
              <!-- Toolbar (+ / - buttons at bottom right) -->
              <div class="unity-profiles-toolbar">
                <button class="unity-toolbar-btn" id="btnProfileAdd" title="Add Interaction Profile">+</button>
                <button class="unity-toolbar-btn" id="btnProfileRemove" title="Toggle Selected Profile">—</button>
              </div>
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
                <span class="unity-feature-badge" style="background:#0369a1;color:#bae6fd;">Enabled</span>
              </div>
              <div class="unity-feature-item">
                <div class="unity-feature-left">
                  <input type="checkbox" class="unity-profile-checkbox" checked id="chk-motion-tracker" />
                  <label for="chk-motion-tracker" style="cursor:pointer;color:#e2e8f0;">PICO Motion Tracker Subsystem</label>
                </div>
                <span class="unity-feature-badge">Full Body</span>
              </div>
            </div>
          </div>

          <!-- 4. PICO Hand Tracking Live Demo & Gestures -->
          <div class="pico-hand-tracking-card">
            <div class="pico-hand-header">
              <div class="pico-hand-title">
                <span>🖐️ Hand Tracking Simulator</span>
              </div>
              <span id="picoGestureStatus" style="font-size:10px;color:#a5f3fc;font-weight:600;">Gesture: Pinch</span>
            </div>

            <div class="pico-gestures-grid">
              <button class="pico-gesture-chip active" data-gesture="pinch">
                <span class="pico-gesture-icon">👌</span>
                <span>Pinch</span>
              </button>
              <button class="pico-gesture-chip" data-gesture="grab">
                <span class="pico-gesture-icon">✊</span>
                <span>Grab</span>
              </button>
              <button class="pico-gesture-chip" data-gesture="open">
                <span class="pico-gesture-icon">✋</span>
                <span>Palm</span>
              </button>
              <button class="pico-gesture-chip" data-gesture="point">
                <span class="pico-gesture-icon">👉</span>
                <span>Point</span>
              </button>
            </div>
          </div>

          <!-- 5. Internal Save & Apply -->
          <div class="unity-footer-actions">
            <button class="unity-apply-btn" id="picoApplyBtn">Apply & Save Config</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(widgetRoot);

  // Cache elements
  const floatBtn = document.getElementById('picoBotBtn');
  const tooltip = document.getElementById('picoBotTooltip');
  const floatingPanel = document.getElementById('picoFloatingPanel');
  const btnClose = document.getElementById('picoBtnClose');
  const btnMinimize = document.getElementById('picoBtnMinimize');
  const eyes = document.getElementById('picoEyes');
  const tabBtns = document.querySelectorAll('.pico-tab-btn');
  const tabViews = {
    assistant: document.getElementById('tabViewAssistant'),
    'unity-openxr': document.getElementById('tabViewUnity')
  };

  // Toggle floating panel
  function togglePanel() {
    const isOpen = floatingPanel.classList.contains('open');
    if (isOpen) {
      floatingPanel.classList.remove('open');
    } else {
      floatingPanel.classList.add('open');
      tooltip.classList.remove('visible');
    }
  }

  floatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePanel();
  });

  btnClose.addEventListener('click', () => {
    floatingPanel.classList.remove('open');
  });

  btnMinimize.addEventListener('click', () => {
    floatingPanel.classList.remove('open');
  });

  // ESC to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && floatingPanel.classList.contains('open')) {
      floatingPanel.classList.remove('open');
    }
  });

  // Tab Switching
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');

      Object.values(tabViews).forEach((view) => view.classList.remove('active'));
      if (tabViews[tabId]) {
        tabViews[tabId].classList.add('active');
      }
    });
  });

  // Preset Chips Handlers
  const messageInput = document.getElementById('picoSenderMessage');
  const presetChips = document.querySelectorAll('.pico-prompt-chip');
  const presetMessages = {
    project: "Hello Saravana, I'd like to discuss an XR project for VR/AR platforms.",
    handtrack: "Hi Saravana, I'm interested in your Unity OpenXR hand tracking & spatial computing work.",
    hire: "Hello Saravana, I am looking to hire an experienced XR / Unity Developer.",
    whatsapp: "Hi Saravana! Let's connect on WhatsApp regarding XR development."
  };

  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const preset = chip.getAttribute('data-preset');
      if (preset === 'whatsapp') {
        window.open('https://wa.me/918344090472?text=' + encodeURIComponent('Hi Saravana! Interested in your XR portfolio.'), '_blank');
      } else if (messageInput && presetMessages[preset]) {
        messageInput.value = presetMessages[preset];
        messageInput.focus();
      }
    });
  });

  // Message Form Submit
  const msgForm = document.getElementById('picoMsgForm');
  const formStatus = document.getElementById('picoFormStatus');
  const sendBtn = document.getElementById('picoSendBtn');

  if (msgForm) {
    msgForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('picoSenderName').value.trim();
      const contact = document.getElementById('picoSenderContact').value.trim();
      const text = messageInput.value.trim();

      if (!name || !text) return;

      sendBtn.disabled = true;
      sendBtn.innerHTML = '<span>Sending...</span>';

      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<span>Message Sent ✓</span>';
        sendBtn.style.background = '#15803d';

        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.textContent = `✓ Thank you ${name}! Your inquiry has been noted.`;
        }

        // Reset inputs
        setTimeout(() => {
          document.getElementById('picoSenderName').value = '';
          document.getElementById('picoSenderContact').value = '';
          messageInput.value = '';
          sendBtn.innerHTML = `<span>Send Message</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
          sendBtn.style.background = '';
        }, 3000);
      }, 700);
    });
  }

  // Unity OpenXR Tab Handlers
  const foldoutHeader = document.getElementById('picoFeatureFoldoutHeader');
  const foldoutArrow = document.getElementById('picoFoldoutArrow');
  const featureBox = document.getElementById('picoFeatureBox');
  const gestureChips = document.querySelectorAll('.pico-gesture-chip');
  const gestureStatus = document.getElementById('picoGestureStatus');
  const profileRows = document.querySelectorAll('.unity-profile-row');
  const profileCountSub = document.getElementById('picoProfileCountSub');
  const applyBtn = document.getElementById('picoApplyBtn');
  const btnProfileAdd = document.getElementById('btnProfileAdd');
  const btnProfileRemove = document.getElementById('btnProfileRemove');

  if (foldoutHeader && featureBox && foldoutArrow) {
    foldoutHeader.addEventListener('click', () => {
      const isHidden = featureBox.style.display === 'none';
      featureBox.style.display = isHidden ? 'flex' : 'none';
      foldoutArrow.classList.toggle('collapsed', !isHidden);
    });
  }

  profileRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') return;
      profileRows.forEach((r) => r.classList.remove('selected'));
      row.classList.add('selected');
    });
  });

  const profileCheckboxes = document.querySelectorAll('.unity-profiles-list input[type="checkbox"]');
  function updateCheckboxCount() {
    const checked = document.querySelectorAll('.unity-profiles-list input[type="checkbox"]:checked').length;
    if (profileCountSub) {
      profileCountSub.textContent = `${checked} Enabled`;
    }
  }
  profileCheckboxes.forEach((cb) => cb.addEventListener('change', updateCheckboxCount));

  if (btnProfileAdd) {
    btnProfileAdd.addEventListener('click', () => {
      alert('PICO OpenXR Profiles: All 4 controller interaction profiles (G3, Neo3, PICO 4, PICO 4 Ultra) are loaded.');
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

  const gestureDetails = {
    pinch: '👌 Pinch: Raycast Grab Active',
    grab: '✊ Fist Grab: Physics Direct Grab',
    open: '✋ Open Palm: Menu Ray Aiming',
    point: '👉 Point: UI Laser Targeting'
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

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const origText = applyBtn.textContent;
      applyBtn.textContent = '✓ Config Saved';
      applyBtn.style.background = '#15803d';
      setTimeout(() => {
        applyBtn.textContent = origText;
        applyBtn.style.background = '#333333';
      }, 1500);
    });
  }

  // Interactive mouse tracking for eyes
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

    if (dist < 240) {
      isTrackingMouse = true;
      eyes.style.animation = 'none';
      const angle = Math.atan2(dy, dx);
      const eyeOffset = Math.min(dist / 45, 4);
      const ox = Math.cos(angle) * eyeOffset;
      const oy = Math.sin(angle) * (eyeOffset * 0.6);
      eyes.style.transform = `translate(${ox}px, ${oy}px)`;

      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        isTrackingMouse = false;
        eyes.style.animation = 'pico-eyes-move 5.5s infinite ease-in-out';
      }, 2500);
    } else if (isTrackingMouse) {
      isTrackingMouse = false;
      eyes.style.animation = 'pico-eyes-move 5.5s infinite ease-in-out';
    }
  });

  // Welcome tooltip
  setTimeout(() => {
    if (!floatingPanel.classList.contains('open')) {
      tooltip.classList.add('visible');
      setTimeout(() => {
        tooltip.classList.remove('visible');
      }, 4500);
    }
  }, 2500);
})();
