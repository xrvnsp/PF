// ========================================================
// REAL-TIME FIREBASE ANALYTICS & VISITOR TRACKER
// Saravana Prakash R | XR Portfolio
// ========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc, deleteDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getDatabase, ref, set, onDisconnect, serverTimestamp as rtdbTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// Firebase Project Configuration
const firebaseConfig = {
    apiKey: "AIzaSyASUyq4jd6utNMHte8aNF_-UWouVeAUT_w",
    authDomain: "myportfolio-814e2.firebaseapp.com",
    projectId: "myportfolio-814e2",
    storageBucket: "myportfolio-814e2.firebasestorage.app",
    messagingSenderId: "187568622688",
    appId: "1:187568622688:web:2967c16b81c360cca94705",
    measurementId: "G-M3Z7FWHX8R"
};

let app, db, rtdb;
try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    try {
        rtdb = getDatabase(app);
    } catch (e) {
        // RTDB optional fallback
    }
} catch (err) {
    console.warn("[Firebase Analytics] Init error:", err);
}

// Generate persistent/session client tokens
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

// Exported Tracker Object
export const PortfolioAnalytics = {
    sessionId: SESSION_ID,
    device: DEVICE_TYPE,
    browser: BROWSER_NAME,

    /**
     * Log a custom analytics event to Firestore
     */
    async logEvent(eventType, details = {}) {
        if (!db) return;
        try {
            await addDoc(collection(db, "analytics_events"), {
                type: eventType,
                ...details,
                sessionId: SESSION_ID,
                device: DEVICE_TYPE,
                browser: BROWSER_NAME,
                path: window.location.pathname,
                referrer: document.referrer || "Direct",
                screen: `${window.innerWidth}x${window.innerHeight}`,
                timestamp: serverTimestamp(),
                clientTime: new Date().toISOString()
            });
        } catch (e) {
            console.debug("[Analytics] Event logged locally:", eventType, details);
        }
    },

    /**
     * Real-time presence heartbeat (updates live online counter)
     */
    initPresence() {
        // 1. RTDB live presence with onDisconnect()
        if (rtdb) {
            try {
                const presenceRef = ref(rtdb, `/live_visitors/${SESSION_ID}`);
                const sessionPayload = {
                    sessionId: SESSION_ID,
                    device: DEVICE_TYPE,
                    browser: BROWSER_NAME,
                    online: true,
                    page: window.location.pathname,
                    joinedAt: rtdbTimestamp(),
                    lastActive: rtdbTimestamp()
                };

                onDisconnect(presenceRef).remove();
                set(presenceRef, sessionPayload);

                // Ping every 30s
                setInterval(() => {
                    set(presenceRef, {
                        ...sessionPayload,
                        lastActive: rtdbTimestamp()
                    });
                }, 30000);
            } catch (e) {
                console.debug("[Presence RTDB] Notice:", e);
            }
        }

        // 2. Firestore active_sessions fallback
        if (db) {
            try {
                const sessionDocRef = doc(db, "active_sessions", SESSION_ID);
                setDoc(sessionDocRef, {
                    sessionId: SESSION_ID,
                    device: DEVICE_TYPE,
                    browser: BROWSER_NAME,
                    page: window.location.pathname,
                    lastSeen: serverTimestamp()
                }, { merge: true });

                // Heartbeat
                const heartbeatInterval = setInterval(() => {
                    setDoc(sessionDocRef, {
                        lastSeen: serverTimestamp()
                    }, { merge: true });
                }, 25000);

                // Clean up when tab is closed
                window.addEventListener('beforeunload', () => {
                    clearInterval(heartbeatInterval);
                    deleteDoc(sessionDocRef).catch(() => {});
                });
            } catch (e) {
                console.debug("[Presence Firestore] Notice:", e);
            }
        }
    },

    /**
     * Automatic interactions tracker (Pageview, Resumes, Clicks, Sections)
     */
    initAutoTracking() {
        // 1. Initial Page View
        this.logEvent("page_view", {
            title: document.title,
            url: window.location.href
        });

        // 2. Track Resume Downloads
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a[href$=".pdf"], .resume-btn, [data-action="resume"]');
            if (target) {
                this.logEvent("resume_download", {
                    buttonText: target.textContent?.trim() || "Download Resume",
                    href: target.getAttribute('href') || "assets/resume.pdf"
                });
            }
        });

        // 3. Track Outbound Links (LinkedIn, GitHub, Email, Live Demos)
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="http"], a[href^="mailto:"]');
            if (link && !link.getAttribute('href')?.endsWith('.pdf')) {
                const href = link.getAttribute('href');
                let linkType = 'external_link';
                if (href.includes('github.com')) linkType = 'github_click';
                else if (href.includes('linkedin.com')) linkType = 'linkedin_click';
                else if (href.startsWith('mailto:')) linkType = 'email_click';

                this.logEvent(linkType, {
                    url: href,
                    anchorText: link.textContent?.trim() || link.getAttribute('title') || 'Link'
                });
            }
        });

        // 4. Section Scroll & Dwell Observer
        const sections = document.querySelectorAll('section[id], header[id]');
        if (sections.length > 0 && 'IntersectionObserver' in window) {
            const sectionDwellTimers = new Map();

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.id;
                    if (entry.isIntersecting) {
                        // User started viewing section - start 2s dwell timer to record genuine read
                        const timer = setTimeout(() => {
                            this.logEvent("section_view", {
                                section: sectionId,
                                sectionTitle: entry.target.querySelector('h2, h1, h3')?.textContent?.trim() || sectionId
                            });
                        }, 2000);
                        sectionDwellTimers.set(sectionId, timer);
                    } else {
                        // User left before 2s (quick scroll through)
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
            this.logEvent("xr_card_interaction", { element: "3D ID Card Drag" });
        });
    }
};

// Auto-run on load
if (typeof window !== 'undefined') {
    window.PortfolioAnalytics = PortfolioAnalytics;
    PortfolioAnalytics.initPresence();
    PortfolioAnalytics.initAutoTracking();
}
