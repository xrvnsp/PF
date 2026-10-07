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
        if (/quest|oculus/i.test(ua)) return 'Meta Quest Headset';
        if (/visionpro|visionos/i.test(ua)) return 'Apple Vision Pro';
        if (/pico|vive|vr|xr/i.test(ua)) return 'VR / XR Headset';
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

    function getReferralInfo() {
        let referrer = 'Direct / Bookmark';
        try {
            if (document.referrer) {
                const url = new URL(document.referrer);
                const host = url.hostname.replace(/^www\./, '').toLowerCase();
                if (host === 't.co' || host.includes('twitter.com') || host.includes('x.com')) {
                    referrer = 'Twitter';
                } else if (host.includes('linkedin.com') || host.includes('lnkd.in')) {
                    referrer = 'LinkedIn';
                } else if (host.includes('github.com')) {
                    referrer = 'GitHub';
                } else if (host.includes('google.')) {
                    referrer = 'Google Search';
                } else if (host.includes('instagram.com') || host.includes('l.instagram.com')) {
                    referrer = 'Instagram';
                } else if (host.includes('facebook.com') || host.includes('l.facebook.com')) {
                    referrer = 'Facebook';
                } else if (host.includes('youtube.com') || host.includes('youtu.be')) {
                    referrer = 'YouTube';
                } else if (host.includes('reddit.com')) {
                    referrer = 'Reddit';
                } else {
                    referrer = host;
                }
            }
        } catch (e) {
            const raw = (document.referrer || '').toLowerCase();
            if (raw.includes('t.co') || raw.includes('twitter') || raw.includes('x.com')) {
                referrer = 'Twitter';
            } else {
                referrer = document.referrer || 'Direct / Bookmark';
            }
        }

        let refTag = '';
        let campaign = '';
        try {
            const params = new URLSearchParams(window.location.search);
            refTag = params.get('ref') || params.get('source') || params.get('recruiter') || params.get('utm_source') || '';
            campaign = params.get('utm_campaign') || params.get('campaign') || '';
        } catch (e) {}

        return { referrer, refTag, campaign };
    }

    const SESSION_ID = 'sess_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    const DEVICE_TYPE = getDeviceType();
    const BROWSER_NAME = getBrowserName();
    const REFERRAL_INFO = getReferralInfo();

    // Geolocation & Company / ISP info
    let geoInfo = {
        country: '',
        countryCode: '',
        city: '',
        region: '',
        org: '',
        isp: '',
        ip: ''
    };

    // Cache geo in sessionStorage to prevent redundant API calls per session
    try {
        const cached = sessionStorage.getItem('pf_geo_cache_v2');
        if (cached) geoInfo = JSON.parse(cached);
    } catch (e) {}

    let db = null;
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
            isInitialized = true;
            return true;
        } catch (err) {
            console.warn('[Firebase Analytics] Init error:', err);
            return false;
        }
    }

    async function fetchGeoLocation() {
        if (geoInfo.country && geoInfo.city) return geoInfo;

        try {
            const res = await fetch('https://ipwho.is/');
            if (res.ok) {
                const data = await res.json();
                if (data && data.success !== false) {
                    geoInfo = {
                        country: data.country || 'Unknown',
                        countryCode: data.country_code || '',
                        city: data.city || 'Unknown',
                        region: data.region || '',
                        org: (data.connection && (data.connection.org || data.connection.isp)) || '',
                        isp: (data.connection && data.connection.isp) || '',
                        ip: data.ip || ''
                    };
                    try {
                        sessionStorage.setItem('pf_geo_cache_v2', JSON.stringify(geoInfo));
                    } catch (e) {}

                    // Update presence in active_sessions with enriched geo data
                    if (db) {
                        db.collection("active_sessions").doc(SESSION_ID).set({
                            ...geoInfo
                        }, { merge: true }).catch(() => {});
                    }
                }
            }
        } catch (err) {
            // Offline or network blocked — graceful silent fallback
        }
        return geoInfo;
    }

    const PortfolioAnalytics = {
        sessionId: SESSION_ID,
        device: DEVICE_TYPE,
        browser: BROWSER_NAME,

        /**
         * Log a custom analytics event to Firestore with enriched hardware, geo, and dwell details
         */
        async logEvent(eventType, details = {}) {
            if (!db && !initFirebase()) {
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
                    referrer: REFERRAL_INFO.referrer,
                    refTag: REFERRAL_INFO.refTag,
                    campaign: REFERRAL_INFO.campaign,
                    screen: `${window.innerWidth}x${window.innerHeight}`,
                    country: geoInfo.country || '',
                    countryCode: geoInfo.countryCode || '',
                    city: geoInfo.city || '',
                    region: geoInfo.region || '',
                    org: geoInfo.org || '',
                    isp: geoInfo.isp || '',
                    ip: geoInfo.ip || '',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    clientTime: new Date().toISOString()
                };

                await db.collection("analytics_events").add(eventData);
            } catch (e) {
                console.warn("[Analytics Event] Write notice (ensure Firestore rules allow write):", e);
            }
        },

        /**
         * Real-time presence heartbeat (updates live online counter via active_sessions)
         */
        initPresence() {
            if (!db && !initFirebase()) {
                setTimeout(() => PortfolioAnalytics.initPresence(), 500);
                return;
            }

            if (db) {
                try {
                    const sessionDocRef = db.collection("active_sessions").doc(SESSION_ID);
                    sessionDocRef.set({
                        sessionId: SESSION_ID,
                        device: DEVICE_TYPE,
                        browser: BROWSER_NAME,
                        referrer: REFERRAL_INFO.referrer,
                        refTag: REFERRAL_INFO.refTag,
                        country: geoInfo.country || '',
                        city: geoInfo.city || '',
                        org: geoInfo.org || '',
                        ip: geoInfo.ip || '',
                        page: window.location.pathname || "/",
                        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                        clientTime: new Date().toISOString()
                    }, { merge: true });

                    const heartbeat = setInterval(() => {
                        sessionDocRef.set({
                            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                            clientTime: new Date().toISOString()
                        }, { merge: true }).catch(() => {});
                    }, 25000);

                    window.addEventListener('beforeunload', () => {
                        clearInterval(heartbeat);
                        sessionDocRef.delete().catch(() => {});
                    });
                } catch (e) {}
            }
        },

        /**
         * Automatic interactions tracker (Pageview, Dwell time, Resumes, Clicks, Sections)
         */
        initAutoTracking() {
            // 1. Initial Page View
            PortfolioAnalytics.logEvent("page_view", {
                title: document.title,
                url: window.location.href
            });

            // 2. Track Resume Downloads
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

            // 4. Section Scroll & Accurate Dwell Time Observer
            const sections = document.querySelectorAll('section[id], header[id]');
            if (sections.length > 0 && 'IntersectionObserver' in window) {
                const sectionEnterTimes = new Map();

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        const sectionId = entry.target.id;
                        const title = entry.target.querySelector('h2, h1, h3')?.textContent?.trim() || sectionId;

                        if (entry.isIntersecting) {
                            sectionEnterTimes.set(sectionId, Date.now());
                            PortfolioAnalytics.logEvent("section_view", {
                                section: sectionId,
                                sectionTitle: title
                            });
                        } else {
                            const enterTime = sectionEnterTimes.get(sectionId);
                            if (enterTime) {
                                const dwellSeconds = Math.round((Date.now() - enterTime) / 1000);
                                sectionEnterTimes.delete(sectionId);
                                if (dwellSeconds >= 3) {
                                    PortfolioAnalytics.logEvent("section_dwell", {
                                        section: sectionId,
                                        sectionTitle: title,
                                        dwellSeconds: dwellSeconds
                                    });
                                }
                            }
                        }
                    });
                }, { threshold: 0.35 });

                sections.forEach((sec) => observer.observe(sec));
            }

            // 5. Total Session Dwell Time on Exit
            const sessionStartTime = Date.now();
            window.addEventListener('beforeunload', () => {
                const totalDwellSeconds = Math.round((Date.now() - sessionStartTime) / 1000);
                if (totalDwellSeconds >= 3) {
                    PortfolioAnalytics.logEvent("session_end", {
                        totalDwellSeconds: totalDwellSeconds
                    });
                }
            });

            // 6. Track 3D / XR Interactions
            window.addEventListener('lanyard_drag_start', () => {
                PortfolioAnalytics.logEvent("xr_card_interaction", { element: "3D ID Card Drag" });
            });
        }
    };

    window.PortfolioAnalytics = PortfolioAnalytics;

    async function startTracker() {
        initFirebase();
        await fetchGeoLocation();
        PortfolioAnalytics.initPresence();
        PortfolioAnalytics.initAutoTracking();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startTracker);
    } else {
        startTracker();
    }
})();

