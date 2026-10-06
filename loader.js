/* Terminal Loader Script - Preview Version */
const terminalLines = [
    { text: "[ SYSTEM ] 0xXR::BOOT // INITIALIZING_EXTENDED_REALITY", type: "header" },
    { text: "[ CORE   ] adaptive_intelligence_v∞ ── LOADED", status: "OK" },
    { text: "[ XR     ] spatial_computing_engine_v5.0 ── ONLINE", status: "OK" },
    { text: "[ VISION ] multimodal_world_model ── ONLINE", status: "OK" },
    { text: "[ AGI    ] autonomous_reasoning_core ── SYNCHRONIZED", status: "OK" },
    { text: "[ NEURAL ] real_time_inference_mesh ── ONLINE", status: "OK" },
    { text: "[ XR     ] environment_mapping // 3D_SPACE ── LOCKED", status: "OK" },
    { text: "[ AGENT  ] adaptive_ai_orchestrator ── ONLINE", status: "OK" },
    { text: "[ SECURE ] 0xID::VERIFY // HUMAN_OPERATOR_AUTHENTICATED", type: "launch" },
    { text: "[ FUTURE ] cognition_layer // READY_FOR_INTERACTION", type: "launch" },
    { text: "INITIALIZING_SARAVANA_PRAKASH_XR_AI_PORTFOLIO...", type: "launch" },
    { text: "ENTERING_SPATIAL_INTELLIGENCE_MODE...", type: "launch" }
];

const asciiLogo = `
 __  ______     ____   _______     __
 \\ \\/ /  _ \\   |  _ \\ | ____\\ \\   / /
  \\  /| |_) |  | | | ||  _|  \\ \\ / / 
  /  \\|  _ <   | |_| || |___  \\ V /  
 /_/\\_\\_| \\_\\  |____/ |_____|  \\_/   
                                    
`;

function runGSAPHeroEntrance() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP is undefined — skipping staggered entrance');
        return;
    }

    // Reset initial states of landing elements
    gsap.set('#navbar', { y: -50, opacity: 0 });
    gsap.set('.hero-greeting-container', { y: -30, opacity: 0, scale: 0.95 });
    gsap.set('.name-line-1', { x: -80, opacity: 0, skewX: 15 });
    gsap.set('.name-line-2', { x: 80, opacity: 0, skewX: -15 });
    gsap.set('.hero-designation', { letterSpacing: '0.3em', opacity: 0 });
    gsap.set('.hero-cta .btn', { scale: 0.8, opacity: 0 });
    gsap.set('.scroll-indicator', { y: 20, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.05 });

    tl.to('#navbar', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
    })
    .to('.hero-greeting-container', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
    }, '-=0.25')
    .to('.name-line-1', {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.7,
        ease: 'back.out(1.2)'
    }, '-=0.3')
    .to('.name-line-2', {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.7,
        ease: 'back.out(1.2)'
    }, '-=0.55')
    .to('.hero-designation', {
        letterSpacing: '0.12em',
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.4')
    .to('.hero-cta .btn', {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'back.out(1.5)'
    }, '-=0.35')
    .to('.scroll-indicator', {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
    }, '-=0.2');
}

function initTerminalLoader() {
    const loader = document.getElementById('terminal-loader');
    const terminalBody = document.getElementById('terminal-body');
    const terminalContainer = document.getElementById('terminal-content');
    const portfolioContent = document.getElementById('portfolio-content');

    if (!loader || !terminalContainer) return;

    // Session-Aware Check: If already booted in this session, skip sequence immediately
    let hasBooted = false;
    try {
        hasBooted = sessionStorage.getItem('hasBooted') === 'true';
    } catch (e) {}

    if (hasBooted) {
        loader.classList.add('transition-complete');
        loader.style.display = 'none';
        if (portfolioContent) portfolioContent.classList.add('active');
        document.body.style.overflow = 'auto';
        runGSAPHeroEntrance();
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
        return;
    }

    let hasFinished = false;

    function finishTransition(fast = false) {
        if (hasFinished) return;
        hasFinished = true;

        try {
            sessionStorage.setItem('hasBooted', 'true');
        } catch (e) {}

        window.removeEventListener('keydown', handleKeyDown);

        const win = loader.querySelector('.terminal-window');
        if (win) {
            win.classList.add('crt-off');
        }

        const flash = document.querySelector('.glitch-flash');
        const transitionDelay = fast ? 180 : 420;

        setTimeout(() => {
            if (flash) flash.classList.add('active');
            loader.classList.add('shutters-open');

            const canvas = document.getElementById('bg-canvas');
            if (canvas) canvas.style.zIndex = '10001';

            if (typeof gsap !== 'undefined' && window.particlesBlast) {
                gsap.to(window.particlesBlast, {
                    progress: 1,
                    duration: fast ? 0.7 : 1.2,
                    ease: 'power4.out',
                    onComplete: () => {
                        window.particlesBlast._done = true;
                    }
                });
            }

            setTimeout(() => {
                if (portfolioContent) {
                    portfolioContent.classList.add('active');
                    runGSAPHeroEntrance();
                }
            }, fast ? 400 : 1000);
        }, transitionDelay);

        setTimeout(() => {
            loader.classList.add('transition-complete');
            document.body.style.overflow = 'auto';

            const canvas = document.getElementById('bg-canvas');
            if (canvas) canvas.style.zIndex = '';

            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, fast ? 900 : 1700);
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            finishTransition(true);
        }
    }

    window.addEventListener('keydown', handleKeyDown);

    // Setup skip triggers on Skip button and Close control
    const skipBtn = document.getElementById('terminal-skip-btn');
    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            finishTransition(true);
        });
    }

    const closeBtn = document.getElementById('terminal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            finishTransition(true);
        });
    }

    // Safety Fallback: Only activates if scripts completely hang (15 seconds)
    setTimeout(() => {
        if (loader && !loader.classList.contains('transition-complete')) {
            finishTransition(true);
        }
    }, 15000);

    // Inject Glitch Flash Overlay
    if (!document.querySelector('.glitch-flash')) {
        const flash = document.createElement('div');
        flash.className = 'glitch-flash';
        document.body.appendChild(flash);
    }

    // Inject Shutter Panels
    if (!loader.querySelector('.shutter-top')) {
        const shutterTop = document.createElement('div');
        shutterTop.className = 'terminal-shutter shutter-top';
        const shutterBottom = document.createElement('div');
        shutterBottom.className = 'terminal-shutter shutter-bottom';
        loader.appendChild(shutterTop);
        loader.appendChild(shutterBottom);
    }

    // Add ASCII Logo first (instant)
    if (!terminalContainer.querySelector('.ascii-logo')) {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'ascii-logo';
        logoDiv.textContent = asciiLogo;
        terminalContainer.appendChild(logoDiv);
    }

    let currentLineIndex = 0;

    function typeLine() {
        if (hasFinished) return;

        if (currentLineIndex >= terminalLines.length) {
            setTimeout(() => {
                finishTransition(false);
            }, 300);
            return;
        }

        const lineData = terminalLines[currentLineIndex];
        const lineElement = document.createElement('div');
        lineElement.className = 'terminal-line';

        if (lineData.type === 'header') {
            lineElement.style.color = '#bd93f9';
            lineElement.style.fontWeight = 'bold';
            lineElement.style.marginBottom = '1rem';
        } else if (lineData.type === 'launch') {
            lineElement.style.marginTop = '1rem';
            lineElement.style.color = '#50fa7b';
            lineElement.style.fontSize = '1.1rem';
        }

        terminalContainer.appendChild(lineElement);

        let charIndex = 0;
        const typingSpeed = Math.random() * 8 + 2; // Fast typing

        function typeChar() {
            if (hasFinished) return;

            if (charIndex < lineData.text.length) {
                lineElement.textContent += lineData.text.charAt(charIndex);
                charIndex++;

                if (terminalBody) {
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }

                setTimeout(typeChar, typingSpeed);
            } else {
                lineElement.classList.add('visible');

                if (lineData.status) {
                    const text = lineElement.textContent;
                    const statusStr = `[ ${lineData.status} ]`;
                    if (text.includes(statusStr)) {
                        const parts = text.split(statusStr);
                        lineElement.innerHTML = `${parts[0]}<span class="status-${lineData.status.toLowerCase()}">${statusStr}</span>${parts[1] || ''}`;
                    }
                }

                currentLineIndex++;
                const nextDelay = lineData.status === 'WAIT' ? 150 : 80;
                setTimeout(typeLine, nextDelay);
            }
        }

        typeChar();
    }

    // Start delay
    setTimeout(() => {
        if (!hasFinished) {
            document.body.style.overflow = 'hidden';
            typeLine();
        }
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTerminalLoader);
} else {
    initTerminalLoader();
}
