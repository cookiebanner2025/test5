/**
 * Professional Cookie Consent Solution
 * - Auto-detects and categorizes cookies
 * - GDPR/Google/GA4/Facebook compliant
 * - Toggle switches with proper styling
 * - Complete implementation
 */

// ==================== INITIAL SETUP ====================
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except essential)
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted'
});

// Cookie database for auto-categorization
const cookieDatabase = {
    // Google Analytics/GA4
    '_ga': 'analytics',
    '_gid': 'analytics',
    '_gat': 'analytics',
    '_ga_': 'analytics',
    '_dc_gtm_': 'analytics',
    '_gac_': 'analytics',
    
    // Facebook Pixel
    '_fbp': 'advertising',
    'fr': 'advertising',
    'xs': 'advertising',
    'sb': 'advertising',
    'datr': 'advertising',
    
    // Functional cookies
    'wordpress_': 'functional',
    'wp-settings': 'functional',
    'PHPSESSID': 'functional',
    'wordpress_logged_in': 'functional',
    'wordpress_test_cookie': 'functional',
    'wp-saving-post': 'functional',
    
    // Performance cookies
    '__utma': 'performance',
    '__utmb': 'performance',
    '__utmc': 'performance',
    '__utmt': 'performance',
    '__utmz': 'performance',
    '__utmv': 'performance',
    '_hj': 'performance',
    
    // Advertising cookies
    '_gcl_au': 'advertising',
    '_gcl_aw': 'advertising',
    '_gcl_dc': 'advertising',
    'IDE': 'advertising',
    'test_cookie': 'advertising',
    'NID': 'advertising'
};

// ==================== MAIN FUNCTIONS ====================
// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Scan and categorize existing cookies
    const detectedCookies = scanAndCategorizeCookies();
    
    // Inject HTML structure with detected cookies
    injectConsentHTML(detectedCookies);
    
    // Initialize functionality
    initializeCookieConsent(detectedCookies);
});

function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name] = cookie.trim().split('=');
        let categorized = false;
        
        // Check against our database
        for (const pattern in cookieDatabase) {
            if (name.includes(pattern)) {
                result[cookieDatabase[pattern]].push({
                    name: name,
                    duration: getCookieDuration(name),
                    description: getCookieDescription(name)
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name) {
            result.uncategorized.push({
                name: name,
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

function getCookieDuration(name) {
    const cookie = document.cookie.match(`${name}=[^;]+(;|$)`);
    if (!cookie) return "Session";
    
    const expires = document.cookie.match(`${name}=[^;]+; expires=([^;]+)`);
    if (expires && expires[1]) {
        const expiryDate = new Date(expires[1]);
        return expiryDate > new Date() ? "Persistent" : "Expired";
    }
    return "Session";
}

function getCookieDescription(name) {
    const descriptions = {
        // Google Analytics
        '_ga': 'Google Analytics cookie used to distinguish users (2 years)',
        '_gid': 'Google Analytics cookie used to distinguish users (24 hours)',
        '_gat': 'Google Analytics cookie used to throttle request rate (1 minute)',
        
        // Facebook
        '_fbp': 'Facebook Pixel cookie used to track conversions (3 months)',
        'fr': 'Facebook cookie used to deliver a series of advertisement products (3 months)',
        
        // WordPress
        'wordpress_logged_in': 'WordPress cookie indicating when you\'re logged in (session)',
        'wordpress_test_cookie': 'WordPress test cookie to check if cookies are enabled (session)',
        
        // Common
        'PHPSESSID': 'PHP session cookie essential for website functionality (session)',
        'NID': 'Google advertising cookie used for user tracking (6 months)',
        'IDE': 'Google DoubleClick advertising cookie (1 year)'
    };
    
    return descriptions[name] || 'No description available';
}

function injectConsentHTML(detectedCookies) {
    const html = `
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            <div class="cookie-consent-content">
                <h2>We value your privacy</h2>
                <p>We use cookies to enhance your browsing experience. Choose which cookies you allow.</p>
                <a href="/privacy-policy/" class="privacy-policy-link">Privacy Policy</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">Customize</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">Reject All</button>
                <button id="acceptAllBtn" class="cookie-btn accept-btn">Accept All</button>
            </div>
        </div>
    </div>

    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>Cookie Preferences</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                <!-- Essential Cookies -->
                <div class="cookie-category">
                    <div class="toggle-container">
                        <h3>Essential Cookies</h3>
                        <label class="toggle-switch">
                            <input type="checkbox" data-category="functional" checked disabled>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <p>These cookies are necessary for the website to function and cannot be switched off.</p>
                    ${generateCookieTable(detectedCookies.functional)}
                </div>

                <!-- Analytics Cookies -->
                <div class="cookie-category">
                    <div class="toggle-container">
                        <h3>Analytics Cookies</h3>
                        <label class="toggle-switch">
                            <input type="checkbox" data-category="analytics">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <p>These cookies help us understand how visitors interact with our website.</p>
                    ${generateCookieTable(detectedCookies.analytics)}
                </div>

                <!-- Performance Cookies -->
                <div class="cookie-category">
                    <div class="toggle-container">
                        <h3>Performance Cookies</h3>
                        <label class="toggle-switch">
                            <input type="checkbox" data-category="performance">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <p>These cookies help us improve the performance of our website.</p>
                    ${generateCookieTable(detectedCookies.performance)}
                </div>

                <!-- Advertising Cookies -->
                <div class="cookie-category">
                    <div class="toggle-container">
                        <h3>Advertising Cookies</h3>
                        <label class="toggle-switch">
                            <input type="checkbox" data-category="advertising">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <p>These cookies are used to deliver relevant ads to you.</p>
                    ${generateCookieTable(detectedCookies.advertising)}
                </div>

                <!-- Uncategorized Cookies -->
                ${detectedCookies.uncategorized.length > 0 ? `
                <div class="cookie-category">
                    <div class="toggle-container">
                        <h3>Other Cookies</h3>
                        <label class="toggle-switch">
                            <input type="checkbox" data-category="uncategorized">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <p>These cookies haven't been categorized yet.</p>
                    ${generateCookieTable(detectedCookies.uncategorized)}
                </div>` : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">Reject All</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">Save Preferences</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">Accept All</button>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function generateCookieTable(cookies) {
    if (cookies.length === 0) return '<p class="no-cookies">No cookies in this category detected.</p>';
    
    let html = `
    <div class="cookie-table-container">
        <table class="cookie-details">
            <thead>
                <tr>
                    <th>Cookie Name</th>
                    <th>Duration</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>`;
    
    cookies.forEach(cookie => {
        html += `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`;
    });
    
    html += `
            </tbody>
        </table>
    </div>`;
    
    return html;
}

function initializeCookieConsent(detectedCookies) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven) {
        showCookieBanner();
    } else {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
    }
    
    // Set up event listeners
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', showCookieSettings);
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        showCookieBanner();
    });
}

function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
    };

    // Update consent mode immediately
    gtag('consent', 'update', consentStates);
    
    // Determine GCS signal
    let gcsSignal = 'G100'; // Default to denied
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111';
    } else if (consentData.status === 'custom') {
        gcsSignal = 'G101';
    }
    
    // Send GCS signal immediately
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'cookie_consent_update',
            'consent_mode': consentStates,
            'gcs': gcsSignal,
            'timestamp': new Date().toISOString()
        });
    }
    
    console.log('Consent Mode Updated:', consentStates);
    console.log('GCS Signal Sent:', gcsSignal);
}

function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
        gcs: 'G111',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        gcs: 'G100',
        categories: {
            functional: true,
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
}

function saveCustomSettings() {
    const consentData = {
        status: 'custom',
        gcs: 'G101',
        categories: {
            functional: true,
            analytics: document.querySelector('input[data-category="analytics"]').checked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: document.querySelector('input[data-category="advertising"]').checked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
}

function loadCookiesAccordingToConsent(consentData) {
    if (consentData.categories.analytics) {
        loadAnalyticsCookies();
    }
    
    if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

function loadAnalyticsCookies() {
    console.log('Loading analytics cookies');
    // Implement your analytics tracking here
    // Example: Load Google Analytics if not already loaded
    if (typeof ga === 'undefined' && typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
    }
}

function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    // Implement your advertising tracking here
    // Example: Load Facebook Pixel if not already loaded
    if (typeof fbq === 'undefined') {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
    }
}

function loadPerformanceCookies() {
    console.log('Loading performance cookies');
    // Implement performance tracking here
}

function showCookieBanner() {
    document.getElementById('cookieConsentBanner').style.display = 'block';
}

function hideCookieBanner() {
    document.getElementById('cookieConsentBanner').style.display = 'none';
}

function showCookieSettings() {
    document.getElementById('cookieSettingsModal').style.display = 'block';
    hideCookieBanner();
    
    // Load current settings
    const consent = getCookie('cookie_consent');
    if (consent) {
        const consentData = JSON.parse(consent);
        document.querySelector('input[data-category="analytics"]').checked = consentData.categories.analytics;
        document.querySelector('input[data-category="performance"]').checked = consentData.categories.performance;
        document.querySelector('input[data-category="advertising"]').checked = consentData.categories.advertising;
        if (document.querySelector('input[data-category="uncategorized"]')) {
            document.querySelector('input[data-category="uncategorized"]').checked = consentData.categories.uncategorized;
        }
    }
}

function hideCookieSettings() {
    document.getElementById('cookieSettingsModal').style.display = 'none';
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}