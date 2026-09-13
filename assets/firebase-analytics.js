// ========================================================
// REAL-TIME FIREBASE ANALYTICS & VISITOR TRACKER
// Universal Compat Edition (Works on file:// and HTTPS)
// Saravana Prakash R | XR Portfolio
// ========================================================

(function () {
    // Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyASUyq4jd6utNMHte8aNF_-UWouVeAUT_w",
        authDomain: "myportfolio-814e2.firebaseapp.com",
        projectId: "myportfolio-814e2",
        storageBucket: "myportfolio-814e2.firebasestorage.app",
        messagingSenderId: "187568622688",
        appId: "1:187568622688:web:2967c16b81c360cca94705",
        measurementId: "G-M3Z7FWHX8R"
    };

    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/(quest|oculus|pico|visionpro|vr)/i.test(ua)) return 'VR / XR Headset';
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'Tablet';
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) return 'Mobile';
        return 'Desktop';
    }

    function getBrowserName() {
        const ua = navigator.userAgent;
        if (ua.includes("Firefox/")) return "Firefox";
        if (ua.includes("Edg/")) return "Edge";
        if (ua.includes("Chrome/")) return "Chrome";
        if (ua.includes("Safari/")) return "Safari";
        if (ua.includes("OPR/") || ua.includes("Opera/")) return "Opera";
        return "Browser";
    }

    const SESSION_ID = 'sess_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    const DEVICE_TYPE = getDeviceType();
    const BROWSER_NAME = getBrowserName();

    let db = null;
    let rtdb = null;
    let isInitialized = false;

    function initFirebase() {
        if (isInitialized && db) return true;

        if (typeof firebase === 'undefined') {
            return false;
        }

        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            db = firebase.firestore();
            try {
                rtdb = firebase.database();
            } catch (e) {
                // RTDB optional
            }
            isInitialized = true;
            return true;
        } catch (err) {
            console.warn('[Firebase Analytics] Init error:', err);
            return false;
        }
    }

    const PortfolioAnalytics = {
        sessionId: SESSION_ID,
        device: DEVICE_TYPE,
        browser: BROWSER_NAME,

        /**
         * Log a custom analytics event to Firestore
         */
        async logEvent(eventType, details = {}) {
            if (!db && !initFirebase()) {
                // Try again shortly if SDK is still loading
                setTimeout(() => PortfolioAnalytics.logEvent(eventType, details), 500);
                return;
            }

            try {
                const eventData = {
                    type: eventType,
                    ...details,
                    sessionId: SESSION_ID,
                    device: DEVICE_TYPE,
                    browser: BROWSER_NAME,
                    path: window.location.pathname || "/",
                    referrer: document.referrer || "Direct",
                    screen: `${window.innerWidth}x${window.innerHeight}`,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    clientTime: new Date().toISOString()
                };

                await db.collection("analytics_events").add(eventData);
                console.log(`[Analytics Event] Logged "${eventType}":`, details);
            } catch (e) {
                console.warn("[Analytics Event] Write notice (ensure Firestore rules allow read/write):", e);
            }
        },

        /**
         * Real-time presence heartbeat (updates live online counter)
         */
        initPresence() {
            if (!db && !initFirebase()) {
                setTimeout(() => PortfolioAnalytics.initPresence(), 500);
                return;
            }

            // 1. RTDB live presence
            if (rtdb) {
                try {
                    const presenceRef = rtdb.ref(`/live_visitors/${SESSION_ID}`);
                    const sessionPayload = {
                        sessionId: SESSION_ID,
                        device: DEVICE_TYPE,
                        browser: BROWSER_NAME,
                        online: true,
                        page: window.location.pathname,
                        joinedAt: firebase.database.ServerValue.TIMESTAMP,
                        lastActive: firebase.database.ServerValue.TIMESTAMP
                    };

                    presenceRef.onDisconnect().remove();
                    presenceRef.set(sessionPayload);

                    setInterval(() => {
                        presenceRef.update({
                            lastActive: firebase.database.ServerValue.TIMESTAMP
                        });
                    }, 25000);
                } catch (e) {
                    // RTDB optional
                }
            }

            // 2. Firestore active_sessions
            if (db) {
                try {
                    const sessionDocRef = db.collection("active_sessions").doc(SESSION_ID);
                    sessionDocRef.set({
                        sessionId: SESSION_ID,
                        device: DEVICE_TYPE,
                        browser: BROWSER_NAME,
                        page: window.location.pathname,
                        lastSeen: firebase.firestore.FieldValue.serverTimestamp()
                    }, { merge: true });

                    const heartbeat = setInterval(() => {
                        sessionDocRef.set({
                            lastSeen: firebase.firestore.FieldValue.serverTimestamp()
                        }, { merge: true });
                    }, 25000);

                    window.addEventListener('beforeunload', () => {
                        clearInterval(heartbeat);
                        sessionDocRef.delete().catch(() => {});
                    });
                } catch (e) {}
            }
        },

        /**
         * Automatic interactions tracker (Pageview, Resumes, Clicks, Sections)
         */
        initAutoTracking() {
            // 1. Initial Page View
            PortfolioAnalytics.logEvent("page_view", {
                title: document.title,
                url: window.location.href
            });

            // 2. Track Resume Downloads (matches any resume button, PDF link, or download trigger)
            document.addEventListener('click', (e) => {
                const target = e.target.closest('a[href*="resume.pdf"], a[download*="Resume"], a[download*="resume"], .hero-resume-btn, .nav-btn-resume, [data-action="resume"]');
                if (target) {
                    PortfolioAnalytics.logEvent("resume_download", {
                        buttonText: target.textContent?.replace(/\s+/g, ' ').trim() || "Download Resume",
                        href: target.getAttribute('href') || "assets/resume.pdf"
                    });
                }
            }, true);

            // 3. Track Outbound Links (LinkedIn, GitHub, Email, Live Demos)
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a[href^="http"], a[href^="mailto:"]');
                if (link && !link.getAttribute('href')?.includes('.pdf')) {
                    const href = link.getAttribute('href');
                    let linkType = 'external_link';
                    if (href.includes('github.com')) linkType = 'github_click';
                    else if (href.includes('linkedin.com')) linkType = 'linkedin_click';
                    else if (href.startsWith('mailto:')) linkType = 'email_click';

                    PortfolioAnalytics.logEvent(linkType, {
                        url: href,
                        anchorText: link.textContent?.trim() || link.getAttribute('title') || 'Link'
                    });
                }
            }, true);

            // 4. Section Scroll & Dwell Observer
            const sections = document.querySelectorAll('section[id], header[id]');
            if (sections.length > 0 && 'IntersectionObserver' in window) {
                const sectionDwellTimers = new Map();

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        const sectionId = entry.target.id;
                        if (entry.isIntersecting) {
                            const timer = setTimeout(() => {
                                PortfolioAnalytics.logEvent("section_view", {
                                    section: sectionId,
                                    sectionTitle: entry.target.querySelector('h2, h1, h3')?.textContent?.trim() || sectionId
                                });
                            }, 2000);
                            sectionDwellTimers.set(sectionId, timer);
                        } else {
                            if (sectionDwellTimers.has(sectionId)) {
                                clearTimeout(sectionDwellTimers.get(sectionId));
                                sectionDwellTimers.delete(sectionId);
                            }
                        }
                    });
                }, { threshold: 0.35 });

                sections.forEach((sec) => observer.observe(sec));
            }

            // 5. Track 3D / XR Interactions
            window.addEventListener('lanyard_drag_start', () => {
                PortfolioAnalytics.logEvent("xr_card_interaction", { element: "3D ID Card Drag" });
            });
        }
    };

    window.PortfolioAnalytics = PortfolioAnalytics;

    function startTracker() {
        initFirebase();
        PortfolioAnalytics.initPresence();
        PortfolioAnalytics.initAutoTracking();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startTracker);
    } else {
        startTracker();
    }
})();

