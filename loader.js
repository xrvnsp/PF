function initLogoLoader() {
    const loader = document.getElementById('terminal-loader');

    if (!loader) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let finished = false;
    let revealTimer;
    let cleanupTimer;

    function unlock() {
        loader.classList.add('transition-complete');
        loader.setAttribute('aria-hidden', 'true');
        loader.inert = true;
        document.body.style.overflow = 'auto';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }

    function reveal(fast = false) {
        if (finished) return;
        finished = true;
        clearTimeout(revealTimer);
        window.removeEventListener('keydown', onKey);
        loader.removeEventListener('click', onClick);
        document.getElementById('portfolio-content')?.classList.add('active');
        // End the old background's boot state without triggering its particle blast.
        if (window.particlesBlast) window.particlesBlast._done = true;
        // Expand a centered circle over the live homepage.
        if (fast || reducedMotion) loader.classList.add('quick-reveal');
        loader.classList.add('is-revealing');
        cleanupTimer = setTimeout(unlock, fast || reducedMotion ? 220 : 1200);
    }

    function onKey(event) {
        if (event.key === 'Escape') reveal(true);
    }
    function onClick(event) {
        if (event.target.closest('.logo-loader-skip') || event.pointerType === 'touch') reveal(true);
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    loader.addEventListener('click', onClick);
    loader.addEventListener('transitionend', (event) => {
        if (event.target === loader && event.propertyName === 'opacity' && finished) {
            clearTimeout(cleanupTimer);
            unlock();
        }
    });
    // Start the two-second hold when the SVG first reaches the screen.
    requestAnimationFrame(() => {
        loader.classList.add('is-drawing');
        revealTimer = setTimeout(() => reveal(), 2000);
    });
}

initLogoLoader();
