/**
 * ========================================================
 * CYBER VISITOR LEAD CAPTURE SYSTEM
 * Dual-Channel: Direct Inbound Contact + Resume & Capability Deck
 * Saravana Prakash R | XR Portfolio
 * ========================================================
 */

(function () {
    const RESUME_FILE_PATH = "assets/Saravana_Prakash_XR_Developer_4Y_Exp_Resume.pdf";
    const RESUME_FILE_NAME = "Saravana Prakash_XR Developer_4Y_Exp_Resume.pdf";

    // Trigger instant PDF download helper
    function triggerDirectDownload(path = RESUME_FILE_PATH, filename = RESUME_FILE_NAME) {
        try {
            const link = document.createElement('a');
            link.href = path;
            link.download = filename;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.warn('[Direct Download]', e);
        }
    }

    // Modal Control Functions (Exposed to window)
    window.openResumeModal = function (e) {
        if (e && (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1)) {
            return; // Allow opening in new tab or normal click if modifier held
        }
        if (e) e.preventDefault();

        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const emailInput = document.getElementById('rm-email');
            if (emailInput) {
                setTimeout(() => emailInput.focus(), 100);
            }
            if (window.PortfolioAnalytics) {
                window.PortfolioAnalytics.logEvent('resume_modal_opened', {
                    trigger: (e && e.currentTarget && (e.currentTarget.className || e.currentTarget.id)) || 'unknown'
                });
            }
        }
    };

    window.closeResumeModal = function () {
        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    window.handleModalOverlayClick = function (e) {
        if (e.target && e.target.id === 'resume-modal') {
            window.closeResumeModal();
        }
    };

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closeResumeModal();
        }
    });

    // 1. Handle Direct Contact Transmission Form
    window.handleDirectLeadSubmit = async function (e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = document.getElementById('dt-submit-btn');
        const statusEl = document.getElementById('dt-status');
        const emailInput = document.getElementById('dt-email');
        const intentSelect = document.getElementById('dt-intent');
        const messageInput = document.getElementById('dt-message');

        const email = emailInput ? emailInput.value.trim() : '';
        const intent = intentSelect ? intentSelect.value : 'Project Inquiry';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!email) return;

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        }
        if (statusEl) {
            statusEl.className = 'dt-status sending';
            statusEl.textContent = 'Sending your message...';
        }

        try {
            if (!window.PortfolioAnalytics || typeof window.PortfolioAnalytics.submitLead !== 'function') {
                throw new Error('Please wait a moment and try again.');
            }

            const result = await window.PortfolioAnalytics.submitLead({
                email,
                type: 'direct_inquiry',
                intent,
                message
            });

            if (result && result.success) {
                if (statusEl) {
                    statusEl.className = 'dt-status success';
                    statusEl.innerHTML = '✔ Message sent! Thank you, I will get back to you soon.';
                }
                form.reset();
                if (submitBtn) {
                    submitBtn.querySelector('.btn-text').textContent = 'Sent! ✉️';
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.querySelector('.btn-text').textContent = 'Send Message';
                    }, 4000);
                }
            } else {
                throw new Error((result && result.error) || 'Failed to send message. Please retry.');
            }
        } catch (err) {
            if (statusEl) {
                statusEl.className = 'dt-status error';
                statusEl.textContent = `⚠ ${err.message || 'Error sending. Please try again or email me directly.'}`;
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = 'Try Again';
            }
        }
    };

    // 2. Handle Resume & Capability Deck Modal Form
    window.handleResumeModalSubmit = async function (e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = document.getElementById('rm-submit-btn');
        const statusEl = document.getElementById('rm-status');
        const emailInput = document.getElementById('rm-email');
        const ndaCheck = document.getElementById('rm-include-nda');

        const email = emailInput ? emailInput.value.trim() : '';
        const includeNda = ndaCheck ? ndaCheck.checked : true;

        if (!email) return;

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        }
        if (statusEl) {
            statusEl.className = 'dt-status sending';
            statusEl.textContent = 'Sending to your email...';
        }

        try {
            if (!window.PortfolioAnalytics || typeof window.PortfolioAnalytics.submitLead !== 'function') {
                throw new Error('Please wait a moment and retry.');
            }

            const result = await window.PortfolioAnalytics.submitLead({
                email,
                type: 'resume_deck_request',
                intent: 'Resume & Portfolio Deck',
                extra: { includeNda: includeNda }
            });

            if (result && result.success) {
                if (statusEl) {
                    statusEl.className = 'dt-status success';
                    statusEl.innerHTML = '✔ Sent! Starting your direct PDF download now...';
                }

                // Automatically trigger immediate download as well
                setTimeout(() => {
                    triggerDirectDownload();
                }, 600);

                // Auto-close modal after 2.2 seconds
                setTimeout(() => {
                    window.closeResumeModal();
                    form.reset();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.querySelector('.btn-text').textContent = 'Send to My Email 📩';
                    }
                    if (statusEl) {
                        statusEl.textContent = '';
                    }
                }, 2200);
            } else {
                throw new Error((result && result.error) || 'Could not send. Please retry.');
            }
        } catch (err) {
            if (statusEl) {
                statusEl.className = 'dt-status error';
                statusEl.textContent = `⚠ ${err.message || 'Error sending. Please retry.'}`;
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = 'Try Again 📩';
            }
        }
    };

    // Auto-bind click handlers to any existing Resume buttons on page
    function bindResumeButtons() {
        const resumeButtons = document.querySelectorAll('.hero-resume-btn, .nav-btn-resume, a[href*="resume.pdf"], a[download*="Resume"]');
        resumeButtons.forEach(btn => {
            // Avoid duplicate listeners
            if (!btn.dataset.leadCaptureBound) {
                btn.dataset.leadCaptureBound = "true";
                btn.addEventListener('click', (e) => {
                    window.openResumeModal(e);
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindResumeButtons);
    } else {
        bindResumeButtons();
    }
})();
