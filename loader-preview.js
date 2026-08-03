/* Terminal Loader Script - Preview Version */
const terminalLines = [
    { text: "[ SYSTEM ] 0xF0::init... INITIALIZING", type: "header" },
    { text: "[ CORE   ] neural_network_v5.1 ── LOADED", status: "OK" },
    { text: "[ MODULE ] spatial_rendering_v2.0 ── ONLINE", status: "OK" },
    { text: "[ MODULE ] ai_inference_engine ── ONLINE", status: "OK" },
    { text: "[ MODULE ] llm_orchestrator ── ONLINE", status: "OK" },
    { text: "[ NET    ] establishing_uplink... OK", status: "OK" },
    { text: "[ SECURE ] 0xID::VERIFY // OPERATOR IDENTIFIED", type: "launch" },
    { text: "LAUNCHING_SARAVANA_PRAKASH_PORTFOLIO...", type: "launch" }
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

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('terminal-loader');
    const terminalBody = document.getElementById('terminal-body');
    const terminalContainer = document.getElementById('terminal-content');
    const portfolioContent = document.getElementById('portfolio-content');

    if (!loader || !terminalContainer) return;

    // Inject Glitch Flash Overlay
    const flash = document.createElement('div');
    flash.className = 'glitch-flash';
    document.body.appendChild(flash);

    // Inject Shutter Panels
    const shutterTop = document.createElement('div');
    shutterTop.className = 'terminal-shutter shutter-top';
    const shutterBottom = document.createElement('div');
    shutterBottom.className = 'terminal-shutter shutter-bottom';
    loader.appendChild(shutterTop);
    loader.appendChild(shutterBottom);

    // Add ASCII Logo first (instant)
    const logoDiv = document.createElement('div');
    logoDiv.className = 'ascii-logo';
    logoDiv.textContent = asciiLogo;
    terminalContainer.appendChild(logoDiv);

    let currentLineIndex = 0;

    function typeLine() {
        if (currentLineIndex >= terminalLines.length) {
            // End sequence - Triggers the transition
            setTimeout(() => {
                const win = loader.querySelector('.terminal-window');
                if (win) {
                    win.classList.add('crt-off');
                }

                // Wait 420ms for CRT off flatline animation
                setTimeout(() => {
                    // Trigger Fullscreen Glitch Flash
                    flash.classList.add('active');

                    // Slide Open Shutters
                    loader.classList.add('shutters-open');

                    // Make Portfolio Container Active
                    if (portfolioContent) {
                        portfolioContent.classList.add('active');
                        
                        // Execute GSAP Entrance Choreography
                        runGSAPHeroEntrance();
                    }
                }, 420);

                // Wait for shutters to finish sliding (800ms after start of slide)
                setTimeout(() => {
                    loader.classList.add('transition-complete');
                    document.body.style.overflow = 'auto';

                    // Force refresh GSAP ScrollTriggers
                    if (typeof ScrollTrigger !== 'undefined') {
                        ScrollTrigger.refresh();
                    }
                }, 1250);

            }, 400);
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
        document.body.style.overflow = 'hidden';
        typeLine();
    }, 200);
});
