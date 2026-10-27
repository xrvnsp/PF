/**
 * Unity Editor - Build Settings (Reimagined for XR Devices)
 * Lists all XR devices worked with as Unity "Scenes In Build":
 * Meta Quest 2, Quest 3, Apple Vision Pro, PICO, Galaxy XR, HTC Vive.
 * Completely local and non-redirecting.
 */

(function () {
  // Prevent duplicate initialization or rendering inside iframes
  if (window.self !== window.top) return;
  if (window.__picoXrWidgetInitialized) return;
  window.__picoXrWidgetInitialized = true;

  // Device Scene Data
  const deviceScenes = [
    {
      id: 'quest2',
      name: 'Meta Quest 2',
      scenePath: 'Assets/Scenes/Devices/MetaQuest2.unity',
      index: 0,
      checked: true,
      badge: 'Standalone 6DoF',
      platform: 'android',
      platformName: 'Android (Meta Quest)',
      sdk: 'Meta XR Core SDK • OpenXR • OVRPlugin',
      input: 'Touch Controllers • Hand Tracking 1.0',
      graphics: 'Vulkan / OpenGLES 3.1 • FFR Level 3',
      projects: 'VR Vestibular Rehab • Multiplayer Training',
      status: 'Shipped & Production Tested'
    },
    {
      id: 'quest3',
      name: 'Meta Quest 3 & 3S',
      scenePath: 'Assets/Scenes/Devices/MetaQuest3.unity',
      index: 1,
      checked: true,
      badge: 'Color MR Passthrough',
      platform: 'android',
      platformName: 'Android (Meta Horizon OS)',
      sdk: 'Meta XR All-in-One SDK • Scene Mesh API',
      input: 'Hands (Direct Touch) • Touch Plus Controllers',
      graphics: 'Vulkan Multiview • Dynamic Resolution',
      projects: 'Spatial Rehab MR • 3D Product Configurator',
      status: 'Current Flagship Target'
    },
    {
      id: 'visionpro',
      name: 'Apple Vision Pro',
      scenePath: 'Assets/Scenes/Devices/AppleVisionPro.unity',
      index: 2,
      checked: true,
      badge: 'visionOS Spatial',
      platform: 'visionos',
      platformName: 'visionOS (Apple Silicon)',
      sdk: 'Unity PolySpatial • visionOS SDK • RealityKit',
      input: 'Eye Tracking + Pinch Gesture • Natural Hands',
      graphics: 'Metal • Foveated Rendering • Shared Space',
      projects: 'Spatial UI Exploration • Volumetric Glass App',
      status: 'PolySpatial Validated'
    },
    {
      id: 'pico',
      name: 'PICO 4 & Ultra',
      scenePath: 'Assets/Scenes/Devices/PICO4Ultra.unity',
      index: 3,
      checked: true,
      badge: 'OpenXR Enterprise',
      platform: 'android',
      platformName: 'Android (PICO OS 5.x / 6.x)',
      sdk: 'PICO OpenXR SDK • Interaction Profiles',
      input: 'PICO Ultra Optical 6DoF • Motion Tracker',
      graphics: 'Vulkan Multiview • 90Hz High-Refresh',
      projects: 'Clinical Simulation • Interactive XR Showcase',
      status: 'Verified OpenXR Binding'
    },
    {
      id: 'galaxyxr',
      name: 'Samsung Galaxy XR',
      scenePath: 'Assets/Scenes/Devices/SamsungGalaxyXR.unity',
      index: 4,
      checked: true,
      badge: 'Android XR Ready',
      platform: 'android',
      platformName: 'Android XR (Google Play Services)',
      sdk: 'Android XR SDK • OpenXR 1.1 Loader',
      input: 'Spatial Hand Tracking • Multimodal Voice/Vision',
      graphics: 'Vulkan 1.3 • Ray Tracing Core',
      projects: 'Next-Gen Android XR Prototypes',
      status: 'Dev Architecture Ready'
    },
    {
      id: 'vive',
      name: 'HTC Vive & Focus 3',
      scenePath: 'Assets/Scenes/Devices/HTCVive.unity',
      index: 5,
      checked: true,
      badge: 'SteamVR / WaveSDK',
      platform: 'windows',
      platformName: 'Windows Standalone & Vive Wave',
      sdk: 'SteamVR Plugin • Vive WaveSDK • OpenXR PCVR',
      input: 'Lighthouse 2.0 Trackers • Vive Wand / Focus 3',
      graphics: 'DirectX 11/12 • Ultra High-Fidelity Physics',
      projects: 'Industrial Simulator • Forklift & Safety VR',
      status: 'Enterprise Simulation Tested'
    }
  ];

  let selectedDevice = deviceScenes[1]; // default to Quest 3

  const widgetRoot = document.createElement('div');
  widgetRoot.className = 'pico-xr-widget-root';
  widgetRoot.innerHTML = `
    <!-- Floating Launcher Button -->
    <div class="pico-bot-float-container" id="picoBotContainer">
      <div class="pico-bot-tooltip pico-callout" id="picoBotTooltip">
        <div class="pico-callout-header"><span class="pico-callout-name">ZIMBO <span>XR companion</span></span><button class="pico-callout-dismiss" type="button" aria-label="Dismiss Zimbo message">×</button></div>
        <p id="picoCalloutText" role="status" aria-live="polite" aria-atomic="true"></p>
      </div>

      <div class="pico-bot-motion">
      <button class="pico-bot-float-btn" id="picoBotBtn" type="button" aria-expanded="false" aria-controls="unityBuildWindow" aria-label="Open Unity Build Settings" title="Click to view XR Devices in Unity Build Settings">
        <div class="pico-visor-wrapper">
          <img src="assets/pico_bot_icon.png?v=2" alt="Zimbo, your XR companion" class="pico-visor-base-img" />
          <div class="pico-visor-eyes-layer">
            <div class="pico-visor-eyes" id="picoEyes">
              <div class="pico-eye pico-eye-left"></div>
              <div class="pico-eye pico-eye-right"></div>
            </div>
          </div>
        </div>
      </button>
      </div>
    </div>

    <!-- Reimagined Unity Build Settings Window -->
    <div class="unity-build-window" id="unityBuildWindow" role="dialog" aria-hidden="true" inert aria-labelledby="unityWindowTitle">
      <!-- Unity Titlebar -->
      <div class="unity-build-titlebar">
        <div class="unity-titlebar-left">
          <svg class="unity-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span id="unityWindowTitle">Build Settings</span>
          <span style="color:#666;font-size:10px;margin-left:4px;">(Universal XR Pipeline)</span>
        </div>
        <div class="unity-titlebar-actions">
          <button class="unity-btn-icon" id="unityBtnMinimize" title="Minimize">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button class="unity-btn-icon unity-btn-close" id="unityBtnClose" title="Close">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Build Progress Bar -->
      <div class="unity-build-progress-bar" id="unityBuildProgress">
        <div class="unity-build-progress-fill"></div>
      </div>

      <!-- Window Body Content -->
      <div class="unity-build-body">
        <!-- 1. Scenes In Build (XR Devices List) -->
        <div>
          <div class="unity-section-title">
            <span>Scenes In Build (XR Devices Mastered)</span>
            <span style="font-size:10px;color:#38bdf8;" id="unitySceneCount">6 Devices Active</span>
          </div>

          <div class="unity-scenes-container">
            <div class="unity-scenes-list" id="unityScenesList">
              ${deviceScenes.map((d) => `
                <div class="unity-scene-row ${d.id === selectedDevice.id ? 'selected' : ''}" data-device="${d.id}">
                  <input type="checkbox" class="unity-scene-checkbox" ${d.checked ? 'checked' : ''} id="chk-${d.id}" />
                  <span class="unity-scene-icon">🕶️</span>
                  <span class="unity-scene-name">${d.name} <span class="unity-scene-path-text" style="color:#666;font-size:10px;">(${d.scenePath})</span></span>
                  <span class="unity-scene-badge">${d.badge}</span>
                  <span class="unity-scene-idx">${d.index}</span>
                </div>
              `).join('')}
            </div>

            <!-- Toolbar at bottom of scenes -->
            <div class="unity-scenes-toolbar">
              <button class="unity-btn-text-small" id="btnSelectAll">Select All</button>
              <span style="color:#777;font-size:10.5px;">Click any device to inspect its XR architecture</span>
              <button class="unity-btn-text-small" id="btnToggleAll">Invert Selection</button>
            </div>
          </div>
        </div>

        <!-- 2. Platform & Device Specifications (Split View) -->
        <div>
          <div class="unity-section-title">
            <span>Platform Target &amp; Hardware Capabilities</span>
          </div>

          <div class="unity-split-view">
            <!-- Left Platforms List -->
            <div class="unity-platform-col">
              <div class="unity-platform-item active" data-plat="android">
                <span class="unity-platform-icon">🤖</span>
                <span>Android (XR/Standalone)</span>
              </div>
              <div class="unity-platform-item" data-plat="visionos">
                <span class="unity-platform-icon">🍎</span>
                <span>visionOS (Spatial)</span>
              </div>
              <div class="unity-platform-item" data-plat="windows">
                <span class="unity-platform-icon">💻</span>
                <span>Windows PC (SteamVR)</span>
              </div>
              <div class="unity-platform-item" data-plat="webgl">
                <span class="unity-platform-icon">🌐</span>
                <span>WebGL (Spatial Web)</span>
              </div>
            </div>

            <!-- Right Inspector Specs -->
            <div class="unity-device-details-col">
              <div class="unity-device-header">
                <div class="unity-device-title" id="inspectorDeviceTitle">${selectedDevice.name}</div>
                <div class="unity-tested-badge" id="inspectorDeviceStatus">${selectedDevice.status}</div>
              </div>

              <div class="unity-device-specs-grid">
                <span class="unity-spec-label">Target Platform:</span>
                <span class="unity-spec-val" id="specPlatform">${selectedDevice.platformName}</span>

                <span class="unity-spec-label">Target SDK:</span>
                <span class="unity-spec-val" id="specSDK" style="color:#38bdf8;">${selectedDevice.sdk}</span>

                <span class="unity-spec-label">Input Modality:</span>
                <span class="unity-spec-val" id="specInput">${selectedDevice.input}</span>

                <span class="unity-spec-label">Graphics Pipeline:</span>
                <span class="unity-spec-val" id="specGraphics">${selectedDevice.graphics}</span>

                <span class="unity-spec-label">Live Projects:</span>
                <span class="unity-spec-val" id="specProjects" style="color:#a7f3d0;">${selectedDevice.projects}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Unity Build Footer Buttons -->
      <div class="unity-build-footer">
        <div class="unity-footer-left">
          <button class="unity-footer-btn" id="btnPlayerSettings">Player Settings...</button>
        </div>
        <div class="unity-footer-right">
          <button class="unity-footer-btn" id="btnSwitchPlatform">Switch Platform</button>
          <button class="unity-footer-btn primary" id="btnBuildAndRun">Build &amp; Run</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(widgetRoot);

  // Cache DOM references
  const floatBtn = document.getElementById('picoBotBtn');
  const tooltip = document.getElementById('picoBotTooltip');
  const buildWindow = document.getElementById('unityBuildWindow');
  const btnClose = document.getElementById('unityBtnClose');
  const btnMinimize = document.getElementById('unityBtnMinimize');
  const eyes = document.getElementById('picoEyes');
  const progressBar = document.getElementById('unityBuildProgress');

  const inspectorDeviceTitle = document.getElementById('inspectorDeviceTitle');
  const inspectorDeviceStatus = document.getElementById('inspectorDeviceStatus');
  const specPlatform = document.getElementById('specPlatform');
  const specSDK = document.getElementById('specSDK');
  const specInput = document.getElementById('specInput');
  const specGraphics = document.getElementById('specGraphics');
  const specProjects = document.getElementById('specProjects');
  const sceneCount = document.getElementById('unitySceneCount');

  const sceneRows = document.querySelectorAll('.unity-scene-row');
  const platformItems = document.querySelectorAll('.unity-platform-item');

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visor = floatBtn.querySelector('.pico-visor-wrapper');
  const calloutText = document.getElementById('picoCalloutText');
  let emoteTimers = [];
  function cancelEmote() {
    emoteTimers.forEach(clearTimeout);
    emoteTimers = [];
    widgetRoot.classList.remove('pico-ipd');
    tooltip.classList.remove('visible');
    calloutText.textContent = '';
  }
  function say(message, duration = 3000, ipd = false) {
    cancelEmote();
    if (document.hidden || buildWindow.classList.contains('open')) return;
    calloutText.textContent = message;
    tooltip.classList.add('visible');
    widgetRoot.classList.toggle('pico-ipd', ipd && !motionPreference.matches);
    if (ipd) eyes.style.transform = '';
    if (duration > 0) emoteTimers.push(setTimeout(() => {
      cancelEmote();
      if (hintsReady) scheduleSectionHint();
    }, duration));
  }
  // Session-scoped hints stay quiet after they have been shown once.
  const messages = {
    projects: 'These worlds were built to be experienced.',
    experience: 'Want to see where Saravana has worked?',
    training: 'Learning gets better when it\u2019s immersive.',
    resume: 'Want the full story? Grab Saravana\u2019s resume.',
    contact: 'Got an idea? Let\u2019s bring it into reality.',
    hover: 'Curious about XR? Tap me!',
    idle: 'Quest, Vision Pro, or Vive\u2014which is your pick?'
  };
  let shownHints = new Set();
  let returningVisitor = false;
  try {
    returningVisitor = localStorage.getItem('zimbo-visited') === '1' && !sessionStorage.getItem('zimbo-visit');
    shownHints = new Set(JSON.parse(sessionStorage.getItem('zimbo-hints') || '[]'));
    localStorage.setItem('zimbo-visited', '1');
    sessionStorage.setItem('zimbo-visit', '1');
  } catch (_) { /* The companion also works when browser storage is unavailable. */ }
  let hintsReady = false;
  let activeSection = '';
  let sectionTimer;
  let idleTimer;
  function rememberHint(key) {
    shownHints.add(key);
    try { sessionStorage.setItem('zimbo-hints', JSON.stringify([...shownHints])); } catch (_) {}
  }
  function modalOpen() {
    return !!document.querySelector('dialog[open], .cyber-modal-overlay[style*="display: flex"], .cyber-modal-overlay[style*="display: block"]');
  }
  function hint(key) {
    if (!messages[key] || !hintsReady || shownHints.has(key) || document.hidden || modalOpen() || buildWindow.classList.contains('open') || tooltip.classList.contains('visible')) return;
    rememberHint(key);
    say(messages[key], 4500);
  }
  function scheduleSectionHint() {
    clearTimeout(sectionTimer);
    const section = activeSection;
    sectionTimer = setTimeout(() => { if (section === activeSection) hint(section); }, 1000);
  }
  function resetIdleHint() {
    clearTimeout(idleTimer);
    if (!document.hidden && !shownHints.has('idle')) idleTimer = setTimeout(() => hint('idle'), 45000);
  }
  function enableHints() {
    hintsReady = true;
    scheduleSectionHint();
    resetIdleHint();
  }
  function welcomeVisitor() {
    say(returningVisitor ? 'Welcome back! Ready for another adventure?' : 'Hey! I\u2019m Zimbo, your XR companion.', 0);
    emoteTimers.push(setTimeout(() => {
      say('Adjusting IPD\u2026', 0, true);
      emoteTimers.push(setTimeout(() => {
        say('All set! Tap me to explore XR devices.', 0);
        emoteTimers.push(setTimeout(() => { cancelEmote(); enableHints(); }, 3200));
      }, 2400));
    }, 3200));
  }
  tooltip.querySelector('.pico-callout-dismiss').addEventListener('click', () => {
    cancelEmote();
    hintsReady = true;
    clearTimeout(sectionTimer);
    resetIdleHint();
  });
  floatBtn.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch') hint('hover');
  });
  floatBtn.addEventListener('focus', () => hint('hover'));
  document.addEventListener('click', event => {
    if (event.target.closest('.hero-resume-btn, .nav-btn-resume, a[download], a[href*="resume.pdf"], a[href*="Resume.pdf"]')) hint('resume');
  }, true);
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) { activeSection = entry.target.id; scheduleSectionHint(); }
        else if (activeSection === entry.target.id) { activeSection = ''; clearTimeout(sectionTimer); }
      }
    }, { rootMargin: '-25% 0px -45% 0px', threshold: 0 });
    ['projects', 'experience', 'training', 'contact'].forEach(id => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }
  ['pointerdown', 'pointermove', 'scroll', 'keydown', 'touchstart'].forEach(type => {
    window.addEventListener(type, resetIdleHint, { passive: true });
  });
  buildWindow.inert = true;

  function setWindow(open) {
    buildWindow.classList.toggle('open', open);
    widgetRoot.classList.toggle('pico-panel-open', open);
    buildWindow.inert = !open;
    buildWindow.setAttribute('aria-hidden', String(!open));
    floatBtn.setAttribute('aria-expanded', String(open));
    floatBtn.setAttribute('aria-label', open ? 'Close Unity Build Settings' : 'Open Unity Build Settings');
    cancelEmote();
    hintsReady = true;
    clearTimeout(sectionTimer);
    resetIdleHint();
    if (open) btnClose.focus({ preventScroll: true });
    else floatBtn.focus({ preventScroll: true });
  }

  floatBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    // A separate animation layer lets the bounce coexist with floating and the wave.
    floatBtn.getAnimations().forEach(animation => animation.cancel());
    if (!motionPreference.matches) floatBtn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.12, .88)', offset: .22 },
      { transform: 'scale(.94, 1.08) translateY(-5px)', offset: .55 },
      { transform: 'scale(1)' }
    ], { duration: 420, easing: 'cubic-bezier(.22, 1, .36, 1)' });
    setWindow(!buildWindow.classList.contains('open'));
  });
  btnClose.addEventListener('click', () => setWindow(false));
  btnMinimize.addEventListener('click', () => setWindow(false));
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && buildWindow.classList.contains('open')) setWindow(false);
  });

  // Update Inspector for a device
  function updateInspector(dev) {
    selectedDevice = dev;
    inspectorDeviceTitle.textContent = dev.name;
    inspectorDeviceStatus.textContent = dev.status;
    specPlatform.textContent = dev.platformName;
    specSDK.textContent = dev.sdk;
    specInput.textContent = dev.input;
    specGraphics.textContent = dev.graphics;
    specProjects.textContent = dev.projects;

    // Highlight matching platform on left
    platformItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('data-plat') === dev.platform);
    });
  }

  // Device selection in scenes list
  sceneRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input') return;
      sceneRows.forEach((r) => r.classList.remove('selected'));
      row.classList.add('selected');
      const devId = row.getAttribute('data-device');
      const match = deviceScenes.find((d) => d.id === devId);
      if (match) updateInspector(match);
    });
  });

  // Platform list click
  platformItems.forEach((item) => {
    item.addEventListener('click', () => {
      platformItems.forEach((p) => p.classList.remove('active'));
      item.classList.add('active');
      const plat = item.getAttribute('data-plat');
      // Find first matching device for this platform
      const match = deviceScenes.find((d) => d.platform === plat);
      if (match) {
        sceneRows.forEach((r) => {
          r.classList.toggle('selected', r.getAttribute('data-device') === match.id);
        });
        updateInspector(match);
      }
    });
  });

  // Checkbox count
  const checkboxes = document.querySelectorAll('.unity-scene-checkbox');
  function updateCount() {
    const checkedCount = document.querySelectorAll('.unity-scene-checkbox:checked').length;
    if (sceneCount) {
      sceneCount.textContent = `${checkedCount} of ${deviceScenes.length} Devices Active`;
    }
  }
  checkboxes.forEach((cb) => cb.addEventListener('change', updateCount));

  // Toolbar actions
  const btnSelectAll = document.getElementById('btnSelectAll');
  const btnToggleAll = document.getElementById('btnToggleAll');
  if (btnSelectAll) {
    btnSelectAll.addEventListener('click', () => {
      checkboxes.forEach((cb) => { cb.checked = true; });
      updateCount();
    });
  }
  if (btnToggleAll) {
    btnToggleAll.addEventListener('click', () => {
      checkboxes.forEach((cb) => { cb.checked = !cb.checked; });
      updateCount();
    });
  }

  // Footer Actions: Player Settings
  const btnPlayerSettings = document.getElementById('btnPlayerSettings');
  if (btnPlayerSettings) {
    btnPlayerSettings.addEventListener('click', () => {
      alert(
        "Unity Player Settings:\n\n" +
        "• Developer: Saravana Prakash R\n" +
        "• Specialization: XR Developer (Unity, OpenXR, Three.js, Spatial Computing)\n" +
        "• Target Platforms: Meta Quest 2/3, Apple Vision Pro, PICO 4 Ultra, Galaxy XR, HTC Vive\n" +
        "• Scripting Backend: IL2CPP (ARM64)\n" +
        "• Color Space: Linear (HDR Enabled)"
      );
    });
  }

  // Footer Actions: Switch Platform
  const btnSwitchPlatform = document.getElementById('btnSwitchPlatform');
  if (btnSwitchPlatform) {
    btnSwitchPlatform.addEventListener('click', () => {
      btnSwitchPlatform.textContent = 'Recompiling...';
      if (progressBar) progressBar.classList.add('active');
      setTimeout(() => {
        btnSwitchPlatform.textContent = 'Switch Platform';
        if (progressBar) progressBar.classList.remove('active');
      }, 900);
    });
  }

  // Footer Actions: Build & Run (Smoothly scrolls to Featured Projects on page!)
  const btnBuildAndRun = document.getElementById('btnBuildAndRun');
  if (btnBuildAndRun) {
    btnBuildAndRun.addEventListener('click', () => {
      btnBuildAndRun.disabled = true;
      btnBuildAndRun.textContent = 'Building XR Scene...';
      if (progressBar) progressBar.classList.add('active');

      setTimeout(() => {
        if (progressBar) progressBar.classList.remove('active');
        btnBuildAndRun.textContent = '✓ Build Successful';
        btnBuildAndRun.style.background = '#15803d';

        setTimeout(() => {
          btnBuildAndRun.disabled = false;
          btnBuildAndRun.textContent = 'Build & Run';
          btnBuildAndRun.style.background = '';

          // Smoothly scroll to Projects section
          const projectsSec = document.getElementById('projects');
          if (projectsSec) {
            projectsSec.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1200);
      }, 1000);
    });
  }

  // Interactive mouse tracking for eyes
  let isTrackingMouse = false;
  let mouseMoveTimeout;

  window.addEventListener('mousemove', (e) => {
    if (!floatBtn || !eyes || widgetRoot.classList.contains('pico-ipd') || motionPreference.matches || !window.matchMedia('(pointer: fine)').matches) return;
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
        eyes.style.animation = '';
        eyes.style.transform = '';
      }, 2500);
    } else if (isTrackingMouse) {
      isTrackingMouse = false;
      eyes.style.animation = '';
        eyes.style.transform = '';
    }
  });

  // Greet once, only after the page intro has finished (including its fail-safe).
  const loader = document.getElementById('terminal-loader');
  let greeted = false;
  const readyObserver = loader ? new MutationObserver(greetWhenReady) : null;
  function greetWhenReady() {
    if (loader && !loader.classList.contains('transition-complete')) return;
    if (greeted) return;
    greeted = true;
    readyObserver?.disconnect();
    widgetRoot.classList.add('pico-ready');
    if (!motionPreference.matches) visor.classList.add('pico-hello');
    welcomeVisitor();
  }
  visor.addEventListener('animationend', event => {
    if (event.animationName === 'pico-hello-wave') visor.classList.remove('pico-hello');
  });
  document.addEventListener('visibilitychange', () => {
    widgetRoot.classList.toggle('pico-paused', document.hidden);
    if (document.hidden) {
      cancelEmote();
      hintsReady = true;
      clearTimeout(sectionTimer);
      clearTimeout(idleTimer);
    } else {
      scheduleSectionHint();
      resetIdleHint();
    }
  });
  widgetRoot.classList.toggle('pico-paused', document.hidden);
  readyObserver?.observe(loader, { attributes: true, attributeFilter: ['class'] });
  greetWhenReady();
})();
