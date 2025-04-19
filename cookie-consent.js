/**
 * Ultimate GDPR Cookie Consent Solution v3.0
 * - Automatic language detection based on location
 * - Premium UI/UX design with matching colors
 * - Automatic cookie categorization
 * - Periodic cookie scanning
 * - Floating button that shows/hides banner
 */

// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security)
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'denied',
  'security_storage': 'granted'
});

// Color scheme - easily customizable
const colorScheme = {
    primary: '#2ecc71',      // Green (accept button color)
    secondary: '#3498db',    // Blue (save button color)
    danger: '#e74c3c',       // Red (reject button color)
    textDark: '#2c3e50',     // Dark text
    textLight: '#7f8c8d',    // Light text
    background: '#ffffff',   // White background
    toggleActive: '#2ecc71', // Same as primary
    toggleInactive: '#bdc3c7'// Gray for inactive
};

// Enhanced cookie database with detailed descriptions
const cookieDatabase = {
    // Google Analytics/GA4
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    
    // Facebook Pixel
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    
    // Functional cookies
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    
    // WooCommerce cookies
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    
    // Advertising cookies
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    
    // Other common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Enhanced language translations with automatic country detection
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences"
    },
    fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer"
    },
    de: {
        title: "Wir schätzen Ihre Privatsphäre",
        description: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Wenn Sie auf \"Alle akzeptieren\" klicken, erklären Sie sich mit der Verwendung von Cookies einverstanden.",
        privacy: "Datenschutzrichtlinie",
        customize: "Anpassen",
        reject: "Alle ablehnen",
        accept: "Alle akzeptieren",
        essential: "Essenzielle Cookies",
        essentialDesc: "Für Website-Funktionalität",
        analytics: "Analytics-Cookies",
        analyticsDesc: "Verstehen Nutzerinteraktionen",
        performance: "Performance-Cookies",
        performanceDesc: "Verbessern die Leistung",
        advertising: "Werbe-Cookies",
        advertisingDesc: "Liefern relevante Anzeigen",
        other: "Andere Cookies",
        otherDesc: "Nicht kategorisierte Cookies",
        save: "Einstellungen speichern"
    },
    es: {
        title: "Valoramos su privacidad",
        description: "Utilizamos cookies para mejorar su experiencia, proporcionar anuncios o contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", usted acepta el uso de cookies.",
        privacy: "Política de privacidad",
        customize: "Personalizar",
        reject: "Rechazar todo",
        accept: "Aceptar todo",
        essential: "Cookies esenciales",
        essentialDesc: "Necesarias para el funcionamiento",
        analytics: "Cookies de análisis",
        analyticsDesc: "Ayudan a entender interacciones",
        performance: "Cookies de rendimiento",
        performanceDesc: "Mejoran el rendimiento",
        advertising: "Cookies publicitarias",
        advertisingDesc: "Muestran anuncios relevantes",
        other: "Otras cookies",
        otherDesc: "Cookies no categorizadas",
        save: "Guardar preferencias"
    },
    it: {
        title: "Rispettiamo la tua privacy",
        description: "Utilizziamo i cookie per migliorare la tua esperienza, fornire annunci o contenuti personalizzati e analizzare il nostro traffico. Cliccando su \"Accetta tutto\", acconsenti all'uso dei cookie.",
        privacy: "Privacy Policy",
        customize: "Personalizza",
        reject: "Rifiuta tutto",
        accept: "Accetta tutto",
        essential: "Cookie essenziali",
        essentialDesc: "Necessari per il funzionamento",
        analytics: "Cookie analitici",
        analyticsDesc: "Analizzano le interazioni",
        performance: "Cookie prestazioni",
        performanceDesc: "Migliorano le prestazioni",
        advertising: "Cookie pubblicitari",
        advertisingDesc: "Mostrano annunci pertinenti",
        other: "Altri cookie",
        otherDesc: "Cookie non categorizzati",
        save: "Salva preferenze"
    },
    pt: {
        title: "Valorizamos sua privacidade",
        description: "Usamos cookies para melhorar sua experiência, fornecer anúncios ou conteúdo personalizado e analisar nosso tráfego. Clicando em \"Aceitar Tudo\", você concorda com o uso de cookies.",
        privacy: "Política de Privacidade",
        customize: "Personalizar",
        reject: "Rejeitar Tudo",
        accept: "Aceitar Tudo",
        essential: "Cookies Essenciais",
        essentialDesc: "Necessários para o funcionamento",
        analytics: "Cookies de Análise",
        analyticsDesc: "Ajudam a entender interações",
        performance: "Cookies de Desempenho",
        performanceDesc: "Melhoram o desempenho",
        advertising: "Cookies de Publicidade",
        advertisingDesc: "Exibem anúncios relevantes",
        other: "Outros Cookies",
        otherDesc: "Cookies não categorizados",
        save: "Salvar Preferências"
    },
    ru: {
        title: "Мы ценим вашу конфиденциальность",
        description: "Мы используем файлы cookie для улучшения вашего опыта, предоставления персонализированной рекламы или контента и анализа нашего трафика. Нажимая «Принять все», вы соглашаетесь на использование файлов cookie.",
        privacy: "Политика конфиденциальности",
        customize: "Настроить",
        reject: "Отклонить все",
        accept: "Принять все",
        essential: "Необходимые файлы cookie",
        essentialDesc: "Необходимы для работы сайта",
        analytics: "Аналитические файлы cookie",
        analyticsDesc: "Помогают понять взаимодействия",
        performance: "Файлы cookie производительности",
        performanceDesc: "Улучшают производительность",
        advertising: "Рекламные файлы cookie",
        advertisingDesc: "Показывают релевантную рекламу",
        other: "Другие файлы cookie",
        otherDesc: "Неклассифицированные файлы cookie",
        save: "Сохранить настройки"
    },
    ja: {
        title: "プライバシーを尊重します",
        description: "クッキーを使用して、閲覧体験の向上、パーソナライズされた広告やコンテンツの提供、トラフィックの分析を行っています。「すべて許可」をクリックすると、クッキーの使用に同意したことになります。",
        privacy: "プライバシーポリシー",
        customize: "カスタマイズ",
        reject: "すべて拒否",
        accept: "すべて許可",
        essential: "必須クッキー",
        essentialDesc: "ウェブサイトの機能に必要",
        analytics: "分析クッキー",
        analyticsDesc: "訪問者の行動を理解するため",
        performance: "パフォーマンスクッキー",
        performanceDesc: "ウェブサイトのパフォーマンス向上",
        advertising: "広告クッキー",
        advertisingDesc: "関連性の高い広告を表示",
        other: "その他のクッキー",
        otherDesc: "未分類のクッキー",
        save: "設定を保存"
    },
    zh: {
        title: "我们重视您的隐私",
        description: "我们使用cookies来提升您的浏览体验，提供个性化广告或内容，并分析我们的流量。点击“接受所有”即表示您同意使用cookies。",
        privacy: "隐私政策",
        customize: "自定义",
        reject: "拒绝所有",
        accept: "接受所有",
        essential: "必要Cookies",
        essentialDesc: "网站功能必需",
        analytics: "分析Cookies",
        analyticsDesc: "帮助了解访客互动",
        performance: "性能Cookies",
        performanceDesc: "提高网站性能",
        advertising: "广告Cookies",
        advertisingDesc: "提供相关广告",
        other: "其他Cookies",
        otherDesc: "未分类的cookies",
        save: "保存偏好"
    }
};

// Main initialization with enhanced cookie scanning
document.addEventListener('DOMContentLoaded', function() {
    // First try to get language from dataLayer (from IP detection)
    let detectedLanguage = 'en';
    if (window.dataLayer && window.dataLayer.length > 0) {
        const langData = window.dataLayer.find(item => item.language || item.country);
        if (langData) {
            if (langData.language) {
                detectedLanguage = langData.language;
            } else if (langData.country) {
                const countryToLang = {
                    'FR': 'fr', 'BE': 'fr', 'LU': 'fr', 'CH': 'de', 'DE': 'de', 'AT': 'de',
                    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es',
                    'IT': 'it', 'PT': 'pt', 'BR': 'pt', 'RU': 'ru', 'UA': 'ru', 'BY': 'ru',
                    'JP': 'ja', 'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'SG': 'zh'
                };
                detectedLanguage = countryToLang[langData.country] || detectedLanguage;
            }
        }
    }
    
    // Fallback to browser language
    if (!translations[detectedLanguage]) {
        const browserLang = (navigator.language || 'en').split('-')[0];
        detectedLanguage = translations[browserLang] ? browserLang : 'en';
    }
    
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        // Try to automatically categorize unknown cookies
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    // Track marketing parameters
    trackMarketingParameters();
    
    // Enhanced periodic cookie scan with validation
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000); // Scan every 30 seconds
});

// Function to automatically categorize unknown cookies
function autoCategorizeCookies(uncategorizedCookies) {
    return uncategorizedCookies.map(cookie => {
        const category = determineCookieCategory(cookie.name);
        if (category) {
            cookieDatabase[cookie.name] = {
                category: category,
                duration: cookie.duration,
                description: cookie.description || 'Automatically categorized'
            };
        }
        return cookie;
    });
}

// Function to determine cookie category based on name patterns
function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    
    // Analytics patterns
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) {
        return 'analytics';
    }
    
    // Advertising patterns
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid/.test(lowerName)) {
        return 'advertising';
    }
    
    // Functional patterns
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) {
        return 'functional';
    }
    
    // Performance patterns
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) {
        return 'performance';
    }
    
    return null;
}

// Enhanced cookie scanning function with better matching
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
        const [name, value] = cookie.trim().split('=');
        if (!name) return;
        
        let categorized = false;
        
        // Check against known cookie patterns
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: value || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

// Enhanced getCookieDuration function
function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? 
            `Expires ${expiryDate.toLocaleDateString()}` : 
            "Expired";
    }
    return "Session";
}

function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    // Check for common marketing parameters
    if (params.has('gclid')) marketingData.gclid = params.get('gclid');
    if (params.has('fbclid')) marketingData.fbclid = params.get('fbclid');
    if (params.has('utm_source')) marketingData.utm_source = params.get('utm_source');
    if (params.has('utm_medium')) marketingData.utm_medium = params.get('utm_medium');
    if (params.has('utm_campaign')) marketingData.utm_campaign = params.get('utm_campaign');
    
    if (Object.keys(marketingData).length > 0) {
        window.dataLayer.push({
            'event': 'marketingParameters',
            ...marketingData
        });
    }
}

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Generate cookie tables for each category
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
             <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
               
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    
    <style>
    /* Main Banner Styles - Updated to match image */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 440px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        border: none;
        overflow: hidden;
    }

    .cookie-consent-banner.show {
        transform: translateY(0);
        opacity: 1;
        display: block;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: #1a1a1a;
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
    }

    .privacy-policy-link {
        color: #3498db;
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: #1d6fa5;
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .adjust-btn {
        background-color: #f8f9fa;
        color: #333;
        border: 1px solid #e0e0e0;
    }

    .adjust-btn:hover {
        background-color: #f0f2f5;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .reject-btn {
        background-color: #fff;
        color: #e74c3c;
        border: 1px solid #e74c3c;
    }

    .reject-btn:hover {
        background-color: #ffeeed;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);
    }

    .accept-btn {
        background-color: #2ecc71;
        color: white;
        border: 1px solid #2ecc71;
        box-shadow: 0 2px 12px rgba(46, 204, 113, 0.3);
    }

    .accept-btn:hover {
        background-color: #27ae60;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(46, 204, 113, 0.4);
    }

    /* Settings Modal - Updated to 845x470 dimensions */
    .cookie-settings-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-settings-content {
        background-color: ${colorScheme.background};
        margin: 0 auto;
        width: 845px;
        max-height: 470px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }

    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: ${colorScheme.textDark};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${colorScheme.textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: ${colorScheme.danger};
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ecf0f1;
        transition: all 0.3s ease;
    }

    .cookie-category:hover {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .cookie-category:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    /* Toggle Switch Styles */
    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .toggle-container h3 {
        margin: 0;
        font-size: 1.1rem;
        color: ${colorScheme.textDark};
        font-weight: 600;
    }

    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${colorScheme.toggleInactive};
        transition: .4s;
        border-radius: 34px;
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    input:checked + .toggle-slider {
        background-color: ${colorScheme.toggleActive};
    }

    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }

    input:disabled + .toggle-slider {
        background-color: #95a5a6;
        cursor: not-allowed;
    }

    /* Cookie Details */
    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .cookie-details-container:hover {
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border-color: ${colorScheme.primary};
    }

    .cookie-details-header {
        background-color: #f5f5f5;
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .cookie-details-header:hover {
        background-color: #eeeeee;
    }

    .cookie-details-content {
        padding: 18px;
        background-color: #fafafa;
        border-top: 1px solid #e0e0e0;
        display: none;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .cookie-details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .cookie-details-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: #f0f0f0;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
        color: ${colorScheme.textDark};
    }

    .cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${colorScheme.textLight};
    }

    .cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-details-table tr:hover {
        background-color: #f5f5f5;
    }

    .cookie-details-table code {
        background-color: #f0f0f0;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: ${colorScheme.textDark};
    }

    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: #666;
        font-style: italic;
    }

    /* Floating Settings Button */
    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 60px;
        height: 60px;
        background-color: ${colorScheme.primary};
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-settings-button:hover {
        background-color: #27ae60;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-settings-button:hover svg {
        transform: rotate(15deg);
    }

    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: #f8f9fa;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid #ecf0f1;
    }

    .save-btn {
        background-color: ${colorScheme.secondary};
        color: white;
        background-image: linear-gradient(to right, ${colorScheme.secondary}, #2980b9);
    }

    .save-btn:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
    }

    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: 90%;
            left: 5%;
            bottom: 10px;
            padding: 20px;
        }
        
        .cookie-consent-buttons {
            flex-direction: column;
        }
        
        .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .cookie-settings-header {
            padding: 15px 20px;
        }
        
        .cookie-settings-body {
            padding: 15px 20px;
        }
        
        .cookie-settings-footer {
            flex-direction: column;
            padding: 15px 20px;
        }
        
        .cookie-settings-footer .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-settings-footer .cookie-btn:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 15px;
            width: calc(100% - 30px);
            left: 15px;
        }
        
        .cookie-consent-content h2 {
            font-size: 1.1rem;
        }
        
        .cookie-consent-content p {
            font-size: 0.85rem;
            margin-bottom: 15px;
        }
        
        .privacy-policy-link {
            margin-bottom: 15px;
        }
        
        .cookie-btn {
            padding: 10px;
            font-size: 0.85rem;
        }
        
        .cookie-settings-button {
            width: 50px;
            height: 50px;
            bottom: 15px;
            left: 15px;
        }
        
        .cookie-settings-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-settings-header h2 {
            font-size: 1.2rem;
        }
        
        .toggle-container h3 {
            font-size: 1rem;
        }
        
        .cookie-details-table {
            font-size: 0.8rem;
        }
        
        .cookie-details-table th, 
        .cookie-details-table td {
            padding: 8px 10px;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven) {
        showCookieBanner();
    } else {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        showFloatingButton();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup cookie details toggles
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
}

function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.getElementById('cookieFloatingButton').addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
}

function updateCookieTables(detectedCookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            const content = container.querySelector('.cookie-details-content');
            if (content) {
                content.innerHTML = detectedCookies[category].length > 0 ? 
                    generateCookieTable(detectedCookies[category]) : 
                    '<p class="no-cookies-message">No cookies in this category detected.</p>';
            }
        }
    });
}

function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Cookie Name</th>
                <th>Value</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td><code>${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</code></td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

function showFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.style.display = 'flex';
    setTimeout(() => {
        button.classList.add('show');
    }, 100);
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.classList.remove('show');
    setTimeout(() => {
        button.style.display = 'none';
    }, 300);
}

function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, 10);
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    hideCookieBanner();
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };

    // Determine GCS signal
    let gcsSignal = 'G100'; // Default to denied
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111';
    } else if (consentData.status === 'custom') {
        gcsSignal = 'G101';
    }

    // Update consent mode immediately
    gtag('consent', 'update', consentStates);
    
    // Push detailed consent data to dataLayer
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'consent_version': '3.0',
        'consent_scope': 'global',
        'debug_info': {
            'cookies_found': scanAndCategorizeCookies(),
            'user_agent': navigator.userAgent,
            'language': navigator.language
        }
    });

    console.log('Consent Mode Updated:', {
        states: consentStates,
        gcsSignal: gcsSignal,
        categories: consentData.categories
    });
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
            functional: true,  // Essential cookies always enabled
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
}

function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        // Check if cookie is essential
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            // Clear the cookie
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        }
    });
}

function saveCustomSettings() {
    const consentData = {
        status: 'custom',
        gcs: 'G101',
        categories: {
            functional: true,  // Essential cookies always enabled
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
    
    // Clear cookies if categories were disabled
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    });
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
    if (typeof ga === 'undefined' && typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
    }
}

function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    // Implement your advertising tracking here
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

// Location detection script integration
(function() {
    var apiKey = '4c1e5d00e0ac93'; // Your API key from ipinfo.io

    fetch('https://ipinfo.io/json?token=' + apiKey)
        .then(function(response) {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch location data from ipinfo.io');
            }
            return response.json();
        })
        .then(function(payload) {
            // Use fallback values if properties do not exist
            var country = (payload && payload.country) ? payload.country : "Unknown";
            var city = (payload && payload.city) ? payload.city : "Unknown";
            var zip = (payload && payload.postal) ? payload.postal : "Unknown"; // ZIP code
            var ip = (payload && payload.ip) ? payload.ip : "Unknown"; // IP address
            var street = (payload && payload.loc) ? payload.loc : "Unknown"; // Street location (latitude, longitude)
            var region = (payload && payload.region) ? payload.region : "Unknown"; // Region/State
            var timezone = (payload && payload.timezone) ? payload.timezone : "Unknown"; // Time zone
            var isp = (payload && payload.org) ? payload.org : "Unknown"; // ISP/Organization
            var language = (navigator.language || "Unknown").split("-")[0]; // Language of the user (fallback to browser language)

            // Determine continent based on the country
            var continent = getContinentFromCountry(country);

            // Push data to the dataLayer for Google Tag Manager
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'locationRetrieved',
                'continent': continent,
                'country': country,
                'city': city,
                'zip': zip,
                'ip': ip,
                'street': street,
                'region': region,
                'timezone': timezone,
                'isp': isp,
                'language': language
            });

            console.log('Location Data Sent to dataLayer:', continent, country, city, zip, ip, street, region, timezone, isp, language);
        })
        .catch(function(error) {
            console.error('Error fetching location:', error);
            // Push error details to dataLayer if needed
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'locationError',
                'error': error.message
            });
        });

    // Function to map countries to their respective continents
    function getContinentFromCountry(countryCode) {
        var continentMap = {
            "AF": "Africa", "AL": "Europe", "DZ": "Africa", "AS": "Oceania", "AD": "Europe", "AO": "Africa",
            "AR": "South America", "AM": "Asia", "AU": "Oceania", "AT": "Europe", "AZ": "Asia", "BS": "North America",
            "BH": "Asia", "BD": "Asia", "BB": "North America", "BY": "Europe", "BE": "Europe", "BZ": "North America",
            "BJ": "Africa", "BT": "Asia", "BO": "South America", "BA": "Europe", "BW": "Africa", "BR": "South America",
            "BN": "Asia", "BG": "Europe", "BF": "Africa", "BI": "Africa", "BJ": "Africa", "BD": "Asia",
            "NL": "Europe", "US": "North America", "CA": "North America", "GB": "Europe", "CN": "Asia", "IN": "Asia",
            "ZA": "Africa", "AU": "Oceania", "NZ": "Oceania", "DE": "Europe", "FR": "Europe", "IT": "Europe",
            "ES": "Europe", "PL": "Europe", "SE": "Europe", "NO": "Europe", "DK": "Europe", "RU": "Europe",
            "BR": "South America", "MX": "North America", "JP": "Asia", "KR": "Asia", "AE": "Asia", "SG": "Asia",
            "TH": "Asia", "ID": "Asia", "PH": "Asia", "MY": "Asia", "KH": "Asia", "VN": "Asia", "PK": "Asia",
            "EG": "Africa", "KE": "Africa", "NG": "Africa", "ET": "Africa", "TZ": "Africa", "UG": "Africa",
            "GH": "Africa", "MA": "Africa", "MO": "Asia", "LK": "Asia", "BD": "Asia", "IQ": "Asia",
            "CO": "South America", "CL": "South America", "PE": "South America", "VE": "South America",
            "BO": "South America", "PY": "South America", "SR": "South America", "EC": "South America",
            "GT": "North America", "HT": "North America", "DO": "North America", "CR": "North America",
            "CU": "North America", "JM": "North America", "BS": "North America", "NI": "North America",
            "BZ": "North America", "PA": "North America", "SV": "North America", "GT": "North America",
            "RU": "Europe", "BG": "Europe", "RO": "Europe", "UA": "Europe", "CZ": "Europe", "HU": "Europe",
            "SK": "Europe", "HR": "Europe", "SI": "Europe", "MK": "Europe", "RS": "Europe", "ME": "Europe",
            "AL": "Europe", "AM": "Asia", "AZ": "Asia", "GE": "Asia", "MN": "Asia", "NP": "Asia", "BT": "Asia",
            "KG": "Asia", "TJ": "Asia", "UZ": "Asia", "KZ": "Asia", "TM": "Asia"
        };

        return continentMap[countryCode] || "Unknown";
    }
})();

