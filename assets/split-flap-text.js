/**
 * SplitFlapText (React Bits Vanilla JS Integration)
 * High-performance 3D Split-Flap Departure Board with Time-of-Day Greetings.
 */

(function (global) {
  'use strict';

  const CHARSETS = {
    alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    numeric: '0123456789'
  };

  const toCssUnit = (value) => (typeof value === 'number' ? `${value}px` : value);

  const resolveCharset = (charset) => {
    if (CHARSETS[charset]) return CHARSETS[charset];
    return typeof charset === 'string' && charset.length > 0 ? charset : CHARSETS.alphanumeric;
  };

  const normalizePhrase = (phrase, width) => {
    const safe = String(phrase ?? '').trim().toUpperCase();
    if (safe.length >= width) return safe.slice(0, width);
    const totalPad = width - safe.length;
    const padLeft = Math.floor(totalPad / 2);
    const padRight = totalPad - padLeft;
    return ' '.repeat(padLeft) + safe + ' '.repeat(padRight);
  };

  const sampleChar = (charset) =>
    charset.charAt(Math.floor(Math.random() * charset.length)) || ' ';

  const buildSequence = (target, flips, charset) => {
    const steps = [];
    for (let i = 0; i < flips; i += 1) {
      steps.push(sampleChar(charset));
    }
    steps.push(target);
    return steps;
  };

  /**
   * Determine time-based greetings based on client's local time:
   * Morning: 05:00 - 11:59
   * Afternoon / Noon: 12:00 - 16:59
   * Evening / Night: 17:00 - 04:59
   */
  function getTimeBasedGreetings() {
    const hour = new Date().getHours();
    let period = 'EVENING';
    let primaryGreeting = 'GOOD EVENING';

    if (hour >= 5 && hour < 12) {
      period = 'MORNING';
      primaryGreeting = 'GOOD MORNING';
    } else if (hour >= 12 && hour < 17) {
      period = 'NOON';
      primaryGreeting = 'GOOD AFTERNOON';
    } else {
      period = 'EVENING';
      primaryGreeting = 'GOOD EVENING';
    }

    return {
      period,
      words: [
        primaryGreeting,
        'WELCOME TO MY PORTFOLIO',
        'EXPLORE XR TECH'
      ]
    };
  }

  class SplitFlapText {
    constructor(container, options = {}) {
      if (!container) return;

      this.container = typeof container === 'string' ? document.querySelector(container) : container;
      if (!this.container) return;

      const timeData = getTimeBasedGreetings();

      this.options = Object.assign(
        {
          words: timeData.words,
          text: undefined,
          flipDuration: 0.12,
          stagger: 0.05,
          cycleDelay: 2800,
          charset: 'alphanumeric',
          flipsPerChar: 6,
          tileColor: '#080d1a',
          textColor: '#00f2ff',
          tileRadius: 6,
          gap: 4,
          fontSize: 24,
          loop: true,
          padTo: 23,
          className: ''
        },
        options
      );

      this.prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.rafId = null;
      this.cycleTimer = null;
      this.currentText = '';
      this.phraseIndex = 0;
      this.isDestroyed = false;

      this.init();
    }

    init() {
      const sourceWords = Array.isArray(this.options.words) && this.options.words.length > 0
        ? this.options.words
        : ['LAUNCH READY', 'SYNC ONLINE'];

      this.phrases = typeof this.options.text === 'string'
        ? [this.options.text]
        : sourceWords.map(w => String(w ?? ''));

      const longest = this.phrases.reduce((max, p) => Math.max(max, p.length), 1);
      this.width = Math.max(1, Math.ceil(Number(this.options.padTo) || 0), longest);

      this.normalizedPhrases = this.phrases.map(p => normalizePhrase(p, this.width));

      // Build DOM structure
      this.domRoot = document.createElement('div');
      this.domRoot.className = `split-flap-text ${this.options.className}`.trim();
      this.domRoot.setAttribute('role', 'text');

      const styleVars = {
        '--split-flap-tile-color': this.options.tileColor,
        '--split-flap-text-color': this.options.textColor,
        '--split-flap-radius': toCssUnit(this.options.tileRadius),
        '--split-flap-gap': toCssUnit(this.options.gap),
        '--split-flap-font-size': toCssUnit(this.options.fontSize),
        '--split-flap-flip-duration': `${Math.max(0.04, Number(this.options.flipDuration) || 0.12)}s`
      };

      for (const [key, val] of Object.entries(styleVars)) {
        this.domRoot.style.setProperty(key, val);
      }

      this.tileNodes = [];
      const firstPhrase = this.normalizedPhrases[0] || '';
      this.currentText = firstPhrase;

      for (let i = 0; i < this.width; i++) {
        const char = firstPhrase[i] || ' ';
        const tile = document.createElement('span');
        tile.className = 'split-flap-text__tile';
        tile.setAttribute('aria-hidden', 'true');

        const halfTop = document.createElement('span');
        halfTop.className = 'split-flap-text__half split-flap-text__half--top';
        const charTop = document.createElement('span');
        charTop.className = 'split-flap-text__char';
        charTop.textContent = char === ' ' ? '\u00A0' : char;
        halfTop.appendChild(charTop);

        const halfBottom = document.createElement('span');
        halfBottom.className = 'split-flap-text__half split-flap-text__half--bottom';
        const charBottom = document.createElement('span');
        charBottom.className = 'split-flap-text__char';
        charBottom.textContent = char === ' ' ? '\u00A0' : char;
        halfBottom.appendChild(charBottom);

        tile.appendChild(halfTop);
        tile.appendChild(halfBottom);
        this.domRoot.appendChild(tile);

        this.tileNodes.push({
          tile,
          charTop,
          charBottom,
          flapFront: null,
          flapBack: null,
          charFront: null,
          charBack: null,
          current: char,
          next: char,
          flipping: false
        });
      }

      this.container.innerHTML = '';
      this.container.appendChild(this.domRoot);
      this.updateAria();

      if (this.normalizedPhrases.length > 1) {
        this.scheduleNext(this.options.cycleDelay);
      }
    }

    updateAria() {
      const settled = this.currentText.trimEnd();
      if (settled) {
        this.domRoot.setAttribute('aria-label', settled);
      }
    }

    setTile(index, current, next, flipping) {
      const node = this.tileNodes[index];
      if (!node) return;

      const safeCurrent = current === ' ' ? '\u00A0' : current;
      const safeNext = next === ' ' ? '\u00A0' : next;

      node.current = current;
      node.next = next;
      node.charTop.textContent = safeCurrent;
      node.charBottom.textContent = flipping ? safeNext : safeCurrent;

      if (flipping) {
        if (!node.flapFront) {
          node.flapFront = document.createElement('span');
          node.flapFront.className = 'split-flap-text__flap split-flap-text__flap--front';
          node.charFront = document.createElement('span');
          node.charFront.className = 'split-flap-text__char';
          node.flapFront.appendChild(node.charFront);
          node.tile.appendChild(node.flapFront);
        }

        if (!node.flapBack) {
          node.flapBack = document.createElement('span');
          node.flapBack.className = 'split-flap-text__flap split-flap-text__flap--back';
          node.charBack = document.createElement('span');
          node.charBack.className = 'split-flap-text__char';
          node.flapBack.appendChild(node.charBack);
          node.tile.appendChild(node.flapBack);
        }

        node.charFront.textContent = safeCurrent;
        node.charBack.textContent = safeNext;

        // Restart flap animation
        node.flapFront.style.animation = 'none';
        node.flapBack.style.animation = 'none';
        void node.flapFront.offsetWidth; // trigger reflow
        node.flapFront.style.animation = '';
        node.flapBack.style.animation = '';
        node.flipping = true;
      } else {
        if (node.flapFront && node.flapFront.parentNode) {
          node.tile.removeChild(node.flapFront);
          node.flapFront = null;
        }
        if (node.flapBack && node.flapBack.parentNode) {
          node.tile.removeChild(node.flapBack);
          node.flapBack = null;
        }
        node.flipping = false;
      }
    }

    animateTo(targetPhrase) {
      if (this.prefersReducedMotion) {
        this.currentText = targetPhrase;
        for (let i = 0; i < this.width; i++) {
          const ch = targetPhrase[i] || ' ';
          this.setTile(i, ch, ch, false);
        }
        this.updateAria();
        return 0;
      }

      const fromPhrase = normalizePhrase(this.currentText, this.width);
      const targetChars = targetPhrase.split('');
      const safeFlipMs = Math.max(40, (Number(this.options.flipDuration) || 0.12) * 1000);
      const safeStaggerMs = Math.max(0, (Number(this.options.stagger) || 0.05) * 1000);
      const safeFlips = Math.max(0, Math.floor(Number(this.options.flipsPerChar) || 6));
      const activeCharset = resolveCharset(this.options.charset);

      const plans = targetChars
        .map((targetChar, index) => {
          const fromChar = fromPhrase[index] || ' ';
          if (fromChar === targetChar) return null;

          return {
            index,
            from: fromChar,
            target: targetChar,
            sequence: buildSequence(targetChar, safeFlips, activeCharset),
            start: index * safeStaggerMs,
            step: -1,
            done: false
          };
        })
        .filter(Boolean);

      if (!plans.length) {
        this.currentText = targetPhrase;
        this.updateAria();
        return 0;
      }

      const totalDuration = plans.reduce(
        (max, plan) => Math.max(max, plan.start + plan.sequence.length * safeFlipMs),
        0
      );
      const startedAt = performance.now();

      const tick = (now) => {
        if (this.isDestroyed) return;

        const elapsed = now - startedAt;
        let shouldContinue = false;

        plans.forEach((plan) => {
          const localElapsed = elapsed - plan.start;

          if (localElapsed < 0) {
            shouldContinue = true;
            return;
          }

          const step = Math.floor(localElapsed / safeFlipMs);

          if (step < plan.sequence.length) {
            shouldContinue = true;

            if (step !== plan.step) {
              plan.step = step;
              const cur = step === 0 ? plan.from : plan.sequence[step - 1];
              const nxt = plan.sequence[step];
              this.setTile(plan.index, cur, nxt, true);
            }
          } else if (!plan.done) {
            plan.done = true;
            this.setTile(plan.index, plan.target, plan.target, false);
          }
        });

        if (shouldContinue) {
          this.rafId = requestAnimationFrame(tick);
        } else {
          this.currentText = targetPhrase;
          this.updateAria();
          this.rafId = null;
        }
      };

      this.rafId = requestAnimationFrame(tick);
      return totalDuration;
    }

    scheduleNext(delay) {
      if (this.cycleTimer) clearTimeout(this.cycleTimer);

      this.cycleTimer = window.setTimeout(() => {
        if (this.isDestroyed) return;

        const nextIndex = this.phraseIndex + 1;
        if (nextIndex >= this.normalizedPhrases.length && !this.options.loop) return;

        this.phraseIndex = nextIndex % this.normalizedPhrases.length;
        const animDuration = this.animateTo(this.normalizedPhrases[this.phraseIndex]);
        const nextDelay = Math.max(600, Number(this.options.cycleDelay) || 2800) + animDuration;
        this.scheduleNext(nextDelay);
      }, delay);
    }

    destroy() {
      this.isDestroyed = true;
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.cycleTimer) clearTimeout(this.cycleTimer);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // Auto initialize on DOM ready
  function autoInit() {
    const heroBoard = document.getElementById('hero-greeting-board');
    if (heroBoard && !heroBoard.__splitFlapInstance) {
      const timeData = getTimeBasedGreetings();

      heroBoard.__splitFlapInstance = new SplitFlapText(heroBoard, {
        words: timeData.words,
        cycleDelay: 3200,
        flipDuration: 0.1,
        stagger: 0.035,
        flipsPerChar: 6,
        tileColor: '#070c18',
        textColor: '#00f2ff',
        padTo: 23,
        fontSize: 24,
        gap: 4
      });
    }

    // Also support any element with [data-split-flap]
    document.querySelectorAll('[data-split-flap]').forEach((el) => {
      if (!el.__splitFlapInstance) {
        let words = [];
        try {
          const raw = el.getAttribute('data-words');
          if (raw) words = JSON.parse(raw);
        } catch (e) {
          words = [];
        }
        el.__splitFlapInstance = new SplitFlapText(el, {
          words: words.length ? words : undefined
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

  global.SplitFlapText = SplitFlapText;
  global.getTimeBasedGreetings = getTimeBasedGreetings;
})(typeof window !== 'undefined' ? window : this);
