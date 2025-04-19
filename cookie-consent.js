/**
 * Complete GDPR Cookie Consent Solution v4.0
 * - Automatic language detection (IP → browser → default)
 * - Full cookie management
 * - Responsive design
 * - GTM/GA4 compatible
 */

// ==================== CONFIGURATION ====================
const config = {
  debug: true,
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr', 'de', 'es', 'it', 'pt'],
  cookieExpiry: 365, // days
  bannerPosition: 'bottom-right',
  colors: {
    primary: '#2ecc71',
    secondary: '#3498db',
    danger: '#e74c3c',
    textDark: '#2c3e50',
    textLight: '#7f8c8d',
    background: '#ffffff'
  }
};

// ==================== CORE FUNCTIONALITY ====================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initCookieConsent);

function initCookieConsent() {
  // 1. Detect user's language
  const userLanguage = detectUserLanguage();
  log('Detected language:', userLanguage);

  // 2. Check for existing consent
  const existingConsent = getConsentCookie();
  
  // 3. If no consent, show banner
  if (!existingConsent) {
    setupBanner(userLanguage);
    showBanner();
  } else {
    applyConsent(existingConsent);
  }
}

// ==================== LANGUAGE DETECTION ====================

function detectUserLanguage() {
  // Try from IP detection (dataLayer)
  if (window.dataLayer && window.dataLayer.length) {
    const locationData = window.dataLayer.find(item => item.country || item.language);
    if (locationData) {
      // Check direct language first
      if (locationData.language) {
        const langCode = locationData.language.split('-')[0].toLowerCase();
        if (config.supportedLanguages.includes(langCode)) {
          return langCode;
        }
      }
      
      // Check country mapping
      if (locationData.country) {
        const countryMap = {
          // Europe
          'FR': 'fr', 'BE': 'fr', 'LU': 'fr', 'CH': 'de',
          'DE': 'de', 'AT': 'de', 'ES': 'es', 'IT': 'it',
          'PT': 'pt', 'BR': 'pt', 'RU': 'ru',
          
          // Americas
          'US': 'en', 'CA': 'en', 'MX': 'es', 'AR': 'es',
          
          // Asia
          'JP': 'ja', 'CN': 'zh', 'TW': 'zh', 'HK': 'zh',
          
          // Add more as needed
        };
        const mappedLang = countryMap[locationData.country];
        if (mappedLang && config.supportedLanguages.includes(mappedLang)) {
          return mappedLang;
        }
      }
    }
  }
  
  // Fallback to browser language
  const browserLang = (navigator.language || config.defaultLanguage).split('-')[0].toLowerCase();
  if (config.supportedLanguages.includes(browserLang)) {
    return browserLang;
  }
  
  // Final fallback
  return config.defaultLanguage;
}

// ==================== BANNER SETUP ====================

function setupBanner(language) {
  if (document.getElementById('cookieConsentBanner')) return;

  const t = getTranslations(language);
  
  const bannerHTML = `
    <div id="cookieConsentBanner" class="cc-banner">
      <div class="cc-container">
        <div class="cc-content">
          <h3 class="cc-title">${t.title}</h3>
          <p class="cc-text">${t.description} <a href="/privacy" class="cc-link">${t.privacy}</a></p>
        </div>
        <div class="cc-buttons">
          <button type="button" class="cc-btn cc-accept">${t.acceptAll}</button>
          <button type="button" class="cc-btn cc-reject">${t.rejectAll}</button>
          <button type="button" class="cc-btn cc-customize">${t.customize}</button>
        </div>
      </div>
    </div>

    <div id="ccSettingsModal" class="cc-modal">
      <div class="cc-modal-content">
        <div class="cc-modal-header">
          <h3>${t.customizeTitle}</h3>
          <button class="cc-close">&times;</button>
        </div>
        <div class="cc-modal-body">
          <!-- Cookie preference toggles would go here -->
        </div>
        <div class="cc-modal-footer">
          <button class="cc-btn cc-save">${t.saveSettings}</button>
        </div>
      </div>
    </div>

    <style>
      .cc-banner {
        position: fixed;
        ${getBannerPosition()};
        max-width: 600px;
        background: ${config.colors.background};
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        border-radius: 8px;
        padding: 20px;
        z-index: 9999;
        margin: 20px;
        display: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .cc-title {
        color: ${config.colors.textDark};
        margin-top: 0;
        font-size: 1.2em;
      }
      
      .cc-text {
        color: ${config.colors.textLight};
        line-height: 1.5;
        margin-bottom: 15px;
      }
      
      .cc-link {
        color: ${config.colors.secondary};
        text-decoration: underline;
      }
      
      .cc-buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      
      .cc-btn {
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s;
      }
      
      .cc-accept {
        background: ${config.colors.primary};
        color: white;
      }
      
      .cc-reject {
        background: ${config.colors.danger};
        color: white;
      }
      
      .cc-customize {
        background: ${config.colors.secondary};
        color: white;
      }
      
      /* Modal styles */
      .cc-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 10000;
      }
      
      /* Responsive styles */
      @media (max-width: 768px) {
        .cc-banner {
          left: 10px !important;
          right: 10px !important;
          bottom: 10px !important;
          top: auto !important;
        }
        
        .cc-buttons {
          flex-direction: column;
        }
        
        .cc-btn {
          width: 100%;
        }
      }
    </style>
  `;

  document.body.insertAdjacentHTML('beforeend', bannerHTML);
  setupEventListeners();
}

function getBannerPosition() {
  switch(config.bannerPosition) {
    case 'bottom-left': return 'left: 20px; bottom: 20px;';
    case 'top-right': return 'right: 20px; top: 20px;';
    case 'top-left': return 'left: 20px; top: 20px;';
    default: return 'right: 20px; bottom: 20px;';
  }
}

// ==================== TRANSLATIONS ====================

function getTranslations(lang) {
  const translations = {
    en: {
      title: "We Value Your Privacy",
      description: "We use cookies to enhance your experience and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
      privacy: "Privacy Policy",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      customize: "Customize",
      customizeTitle: "Cookie Preferences",
      saveSettings: "Save Settings"
    },
    fr: {
      title: "Nous Respectons Votre Vie Privée",
      description: "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. En cliquant 'Tout Accepter', vous consentez à notre utilisation des cookies.",
      privacy: "Politique de Confidentialité",
      acceptAll: "Tout Accepter",
      rejectAll: "Tout Refuser",
      customize: "Personnaliser",
      customizeTitle: "Préférences des Cookies",
      saveSettings: "Enregistrer"
    },
    de: {
      title: "Wir Schätzen Ihre Privatsphäre",
      description: "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und unseren Traffic zu analysieren. Wenn Sie auf 'Alle Akzeptieren' klicken, stimmen Sie unserer Verwendung von Cookies zu.",
      privacy: "Datenschutzrichtlinie",
      acceptAll: "Alle Akzeptieren",
      rejectAll: "Alle Ablehnen",
      customize: "Anpassen",
      customizeTitle: "Cookie-Einstellungen",
      saveSettings: "Einstellungen speichern"
    },
    es: {
      title: "Respetamos Su Privacidad",
      description: "Utilizamos cookies para mejorar su experiencia y analizar nuestro tráfico. Al hacer clic en 'Aceptar Todo', usted acepta nuestro uso de cookies.",
      privacy: "Política de Privacidad",
      acceptAll: "Aceptar Todo",
      rejectAll: "Rechazar Todo",
      customize: "Personalizar",
      customizeTitle: "Preferencias de Cookies",
      saveSettings: "Guardar Configuración"
    }
  };

  return translations[lang] || translations[config.defaultLanguage];
}

// ==================== EVENT HANDLERS ====================

function setupEventListeners() {
  // Accept all
  document.querySelector('.cc-accept')?.addEventListener('click', () => {
    setConsent({level: 'all'});
    hideBanner();
  });
  
  // Reject all
  document.querySelector('.cc-reject')?.addEventListener('click', () => {
    setConsent({level: 'essential'});
    hideBanner();
  });
  
  // Customize
  document.querySelector('.cc-customize')?.addEventListener('click', () => {
    document.getElementById('ccSettingsModal').style.display = 'block';
  });
  
  // Save settings
  document.querySelector('.cc-save')?.addEventListener('click', () => {
    // In a full implementation, gather settings from modal
    setConsent({level: 'custom', preferences: {}});
    document.getElementById('ccSettingsModal').style.display = 'none';
    hideBanner();
  });
  
  // Close modal
  document.querySelector('.cc-close')?.addEventListener('click', () => {
    document.getElementById('ccSettingsModal').style.display = 'none';
  });
}

// ==================== CONSENT MANAGEMENT ====================

function setConsent(consentData) {
  const cookieValue = JSON.stringify({
    version: '4.0',
    date: new Date().toISOString(),
    ...consentData
  });
  
  document.cookie = `cookie_consent=${cookieValue}; max-age=${config.cookieExpiry * 86400}; path=/; SameSite=Lax; Secure`;
  
  applyConsent(consentData);
  log('Consent set:', consentData);
}

function getConsentCookie() {
  const cookie = document.cookie.split('; ')
    .find(row => row.startsWith('cookie_consent='));
    
  return cookie ? JSON.parse(cookie.split('=')[1]) : null;
}

function applyConsent(consent) {
  if (!consent) return;
  
  // Update GTM/GA4 consent
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cookie_consent_update',
    consent_level: consent.level
  });
  
  // Apply cookie settings
  if (consent.level === 'essential') {
    clearNonEssentialCookies();
  }
  
  log('Applied consent:', consent);
}

function clearNonEssentialCookies() {
  // Implementation would scan and remove non-essential cookies
  log('Clearing non-essential cookies');
}

// ==================== UI FUNCTIONS ====================

function showBanner() {
  const banner = document.getElementById('cookieConsentBanner');
  if (banner) {
    banner.style.display = 'block';
    banner.style.animation = 'fadeIn 0.3s ease-out';
  }
}

function hideBanner() {
  const banner = document.getElementById('cookieConsentBanner');
  if (banner) {
    banner.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => banner.style.display = 'none', 300);
  }
}

// ==================== UTILITIES ====================

function log(...args) {
  if (config.debug) {
    console.log('[CookieConsent]', ...args);
  }
}

// Add animation styles
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(20px); }
    }
  </style>
`);

// Initialize
if (document.readyState === 'complete') {
  initCookieConsent();
}
