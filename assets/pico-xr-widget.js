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
      <div class="pico-bot-tooltip" id="picoBotTooltip">
        <span>🎮 Unity Build Settings</span>
        <span class="pico-bot-badge">XR Devices</span>
      </div>

      <button class="pico-bot-float-btn" id="picoBotBtn" aria-label="Open Unity Build Settings" title="Click to view XR Devices in Unity Build Settings">
        <div class="pico-visor-wrapper">
          <img src="assets/pico_bot_icon.png?v=2" alt="Unity XR Launcher" class="pico-visor-base-img" />
          <div class="pico-visor-eyes-layer">
            <div class="pico-visor-eyes" id="picoEyes">
              <div class="pico-eye pico-eye-left"></div>
              <div class="pico-eye pico-eye-right"></div>
            </div>
          </div>
        </div>
      </button>
    </div>

    <!-- Reimagined Unity Build Settings Window -->
    <div class="unity-build-window" id="unityBuildWindow" role="dialog" aria-labelledby="unityWindowTitle">
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

  // Toggle Window
  function toggleWindow() {
    const isOpen = buildWindow.classList.contains('open');
    if (isOpen) {
      buildWindow.classList.remove('open');
    } else {
      buildWindow.classList.add('open');
      tooltip.classList.remove('visible');
    }
  }

  floatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWindow();
  });

  btnClose.addEventListener('click', () => {
    buildWindow.classList.remove('open');
  });

  btnMinimize.addEventListener('click', () => {
    buildWindow.classList.remove('open');
  });

  // ESC to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && buildWindow.classList.contains('open')) {
      buildWindow.classList.remove('open');
    }
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

  // Welcome tooltip after 2.5s
  setTimeout(() => {
    if (!buildWindow.classList.contains('open')) {
      tooltip.classList.add('visible');
      setTimeout(() => {
        tooltip.classList.remove('visible');
      }, 4500);
    }
  }, 2500);
})();
