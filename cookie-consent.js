/**
you can change the cookie category description text by this class. like you can change the essential cookies description text size.
  .broadcookiedes {
      font-size: 15px;
    } 
 */

const EU_COUNTRIES = [
  "AL", // Albania
  "AD", // Andorra
  "AM", // Armenia
  "AT", // Austria
  "AZ", // Azerbaijan
  "BY", // Belarus
  "BE", // Belgium
  "BA", // Bosnia & Herzegovina
  "BG", // Bulgaria
  "HR", // Croatia
  "CY", // Cyprus
  "CZ", // Czech Republic
  "DK", // Denmark
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "GE", // Georgia
  "DE", // Germany
  "GR", // Greece
  "HU", // Hungary
  "IS", // Iceland
  "IE", // Ireland
  "IT", // Italy
  "KZ", // Kazakhstan
  "XK", // Kosovo
  "LV", // Latvia
  "LI", // Liechtenstein
  "LT", // Lithuania
  "LU", // Luxembourg
  "MT", // Malta
  "MD", // Moldova
  "MC", // Monaco
  "ME", // Montenegro
  "NL", // Netherlands
  "MK", // North Macedonia
  "NO", // Norway
  "PL", // Poland
  "PT", // Portugal
  "RO", // Romania
  "RU", // Russia
  "SM", // San Marino
  "RS", // Serbia
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
  "SE", // Sweden
  "CH", // Switzerland
  "TR", // Turkey
  "UA", // Ukraine
  "GB", // United Kingdom
  "VA", // Vatican City
];

const config = {
    // Domain restriction
    allowedDomains: [],
    
    // Privacy policy URL (configurable)
    privacyPolicyUrl: 'https://yourdomain.com/privacy-policy', // Add your full privacy policy URL here

  // Auto-blocking configuration
    autoBlocking: {
        enabled: true,            // Enable/disable auto-blocking of tracking scripts
        blockUntilConsent: true,  // Block all tracking until consent is given
        unblockOnAccept: true,    // Automatically unblock when consent is given
        blockCategories: {        // Which categories to block by default
            advertising: true,
            analytics: true,
            performance: true
        }
    },
   
    // Query Parameter Storage Configuration
    queryParamsConfig: {
        enabled: true, // Enable/disable query parameter storage
        paramsToStore: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'],
        retentionDays: 30, // Default retention period (can be overridden)
        maxLength: 100, // Maximum length for parameter values to prevent XSS
        autoRestore: true, // Automatically restore params to new URLs
        manualClear: true // Enable manual clearing function
    },
  
    // Microsoft UET Configuration
    // Microsoft UET Configuration
    uetConfig: {
        enabled: true,
        defaultTagId: '137027166', // Fallback if auto-detection fails
        autoDetectTagId: true,     // Try to detect UET tag ID automatically
        defaultConsent: 'denied',  // 'denied' or 'granted'
        enforceInEEA: true,        // Enforce consent mode in EEA countries
        msd: window.location.hostname // Add this line for Microsoft Domain handling
    },
    
    // Behavior configuration
    behavior: {
        autoShow: true,
        bannerDelay: 0, // Desktop delay (seconds)
        bannerDelayMobile: 0, // Mobile delay (seconds) - add this line
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: false,
        showFloatingButton: true,
        showAdminButton: false,
        floatingButtonPosition: 'left',
        adminButtonPosition: 'left',
        bannerPosition: 'left',
        bannerAnimation: {
            duration: 0.4,
            easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
            enterEffect: 'fadeInUp',
            exitEffect: 'fadeOutDown'
        },
        modalAnimation: {
            duration: 0.3,
            easing: 'ease-in-out',
            enterEffect: 'fadeIn',
            exitEffect: 'fadeOut'
        },
        dashboardAnimation: {
            duration: 0.3,
            easing: 'ease-in-out',
            enterEffect: 'fadeIn',
            exitEffect: 'fadeOut'
        },
        
        // New timeline configuration for banner visibility
        bannerSchedule: {
            enabled: false, // Set to true to enable scheduling
            startDate: '2023-01-01', // Start date (YYYY-MM-DD)
            endDate: '2023-12-31',   // End date (YYYY-MM-DD)
            startTime: '00:00',      // Start time (24-hour format)
            endTime: '23:59',        // End time (24-hour format)
            daysOfWeek: [1,2,3,4,5], // 0=Sunday, 1=Monday, etc.
            durationDays: 365,       // Alternative: show banner for X days from first visit
            durationMinutes: 2       // Alternative: show banner for X minutes per session
        }
    },
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: [], // Only en and fr as requested
        showLanguageSelector: true,
        autoDetectLanguage: true
    },
    
    // Geo-targeting configuration
 // In your config object, update the geoConfig section:
geoConfig: {
    allowedCountries: [], // Only show in these countries (empty = all allowed)
    allowedRegions: [], // Only show in these regions
    allowedCities: [], // Only show in these cities
    blockedCountries: [], // Never show in these countries
    blockedRegions: [], // Never show in these regions
    blockedCities: [], // Never show in these cities
    euOnly: false, // NEW: Set to true to only show in EU countries
    specificRegions: [] // NEW: Can specify 'EU' or other regions
},
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 365,
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123',
        passwordCookieDuration: 365,
        trackPageViews: true,
        trackEvents: true,
        trackConsentChanges: true
    },
    
    // UI Theme selection
    uiTheme: 'default',
    
    // Banner styling
    bannerStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        width: '465px',
        padding: '24px',
        textColor: '#2c3e50',
        linkColor: '#3498db',
        linkHoverColor: '#1d6fa5',
        border: {
            enabled: false,
            width: '1px',
            style: 'solid',
            color: '#e0e0e0'
        },
        title: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#2c3e50'
        },
        description: {
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#7f8c8d'
        }
    },
    
    // Button styling
    buttonStyle: {
        borderRadius: '8px',
        padding: '12px 20px',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        
       accept: {
    background: '#1177d0 !important',
    color: '#ffffff !important',
    border: '1px solid #1177d0 !important',
    hover: {
        background: '#1177d0 !important',
        color: '#ffffff !important',
        transform: 'translateY(-1px) !important'
    }
        },
        
        reject: {
            background: '#f8f9fa',
            color: '#333333',
            border: '1px solid #e0e0e0',
            hover: {
                background: '#f8f9fa',
                color: '#333333',
                transform: 'translateY(-1px)'
            }
        },
        
        adjust: {
            background: '#f8f9fa',
            color: '#333333',
            border: '1px solid #e0e0e0',
            hover: {
                background: '#f0f2f5',
                color: '#333333',
                transform: 'translateY(-1px)'
            }
        },
        
        save: {
            background: '#f8f9fa',
            color: '#333333',
            border: '1px solid #e0e0e0',
            hover: {
                background: '#f8f9fa',
                color: '#333333',
                transform: 'translateY(-1px)'
            }
        }
    },
    
    // Floating button styling
    floatingButtonStyle: {
        size: '50px',
        background: '#1177d0 ',
        iconColor: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        hover: {
            background: '#1177d0',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }
    },
    
    // Admin button styling
    adminButtonStyle: {
        size: '60px',
        background: '#2ecc71',
        iconColor: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        hover: {
            background: '#2980b9',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }
    },
    
    // Modal styling
    modalStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        width: '845px',
        maxHeight: '470px',
        header: {
            background: '#f8f9fa',
            textColor: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        body: {
            background: '#fefefe',
            textColor: '#2c3e50'
        },
        footer: {
            background: '#f8f9fa',
            borderTop: '1px solid #ecf0f1'
        },
        closeButton: {
            color: '#7f8c8d',
            hoverColor: '#e74c3c'
        }
    },
    
    // Toggle switch styling
    toggleStyle: {
        activeColor: '#2ecc71',
        inactiveColor: '#bdc3c7',
        size: '50px',
        height: '26px',
        sliderSize: '20px'
    },
    
    // Cookie category styling
    categoryStyle: {
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #ecf0f1',
        title: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#2c3e50'
        },
        description: {
            fontSize: '14px',
            color: '#7f8c8d'
        }
    },
    
    // Dashboard styling
    dashboardStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        width: '900px',
        maxHeight: '600px',
        header: {
            background: '#f8f9fa',
            textColor: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        body: {
            background: '#fefefe'
        },
        statCards: {
            background: '#f8f9fa',
            borderRadius: '8px',
            acceptedColor: '#2ecc71',
            rejectedColor: '#e74c3c',
            customColor: '#3498db',
            totalColor: '#9b59b6'
        },
        barChart: {
            height: '20px',
            borderRadius: '10px',
            background: '#ecf0f1',
            acceptedColor: '#2ecc71',
            rejectedColor: '#e74c3c',
            customColor: '#3498db'
        }
    }
};

// ============== IMPLEMENTATION SECTION ============== //
// ============== IMPLEMENTATION SECTION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];

// Initialize UET queue with msd parameter if not already exists
if (typeof window.uetq === 'undefined') {
    window.uetq = [];
    // Set msd parameter immediately if UET is enabled
    if (config.uetConfig.enabled && config.uetConfig.msd) {
        window.uetq.push('set', 'msd', config.uetConfig.msd);
        
        // Push initialization event to dataLayer
        window.dataLayer.push({
            'event': 'uet_initialized',
            'uet_params': {
                'msd': config.uetConfig.msd,
                'tag_id': config.uetConfig.defaultTagId,
                'auto_detect': config.uetConfig.autoDetectTagId
            },
            'timestamp': new Date().toISOString()
        });
    }
}

function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security) AND initial GCS signal
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Push initial GCS signal (G100) immediately after default consent
window.dataLayer.push({
    'event': 'initial_consent_state',
    'consent_mode': {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted'
    },
    'gcs': 'G100', // Explicit initial GCS signal
    'timestamp': new Date().toISOString()
});

// Set default UET consent
function setDefaultUetConsent() {
    if (!config.uetConfig.enabled) return;
    
    // Initialize UET queue if not exists with msd parameter
    if (typeof window.uetq === 'undefined') {
        window.uetq = [];
        if (config.uetConfig.msd) {
            window.uetq.push('set', 'msd', config.uetConfig.msd);
        }
    }
    
    const consentState = config.uetConfig.defaultConsent === 'granted' ? 'granted' : 'denied';
    
    // Push consent update with additional parameters
    window.uetq.push('consent', 'default', {
        'ad_storage': consentState,
        'data_processing': config.uetConfig.enforceInEEA && EU_COUNTRIES.includes(locationData?.country || '') ? 
            ['LDU'] : ['GDPR']
    });
    
    // Enhanced dataLayer push for UET consent
    window.dataLayer.push({
        'event': 'uet_consent_default',
        'consent_mode': {
            'ad_storage': consentState,
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        },
        'uet_config': {
            'msd': config.uetConfig.msd || window.location.hostname,
            'enforce_eea': config.uetConfig.enforceInEEA,
            'data_processing': config.uetConfig.enforceInEEA && EU_COUNTRIES.includes(locationData?.country || '') ? 
                'LDU' : 'GDPR'
        },
        'gcs': 'G100',
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}


// Enhanced cookie database with detailed descriptions
const cookieDatabase = {
    // ========== ADVERTISING COOKIES ==========
    // Google Advertising
    '_gcl': { category: 'advertising', duration: '90 days', description: 'Google Click Identifier - Tracks ad clicks and conversions' },
    '_gcl_au': { category: 'advertising', duration: '90 days', description: 'Google Ads conversion tracking' },
    'gclid': { category: 'advertising', duration: '30 days', description: 'Google Click ID - Tracks PPC ad clicks' },
    'IDE': { category: 'advertising', duration: '390 days', description: 'Google DoubleClick - Used for retargeting' },
    'NID': { category: 'advertising', duration: '180 days', description: 'Google Ads preferences' },
    '_gat_gtag': { category: 'advertising', duration: '1 minute', description: 'Google Tag Manager throttle' },
    'DSID': { category: 'advertising', duration: '14 days', description: 'Google Display & Video 360 ID' },
    'FPLC': { category: 'advertising', duration: '20 hours', description: 'Google Floodlight counter' },
    
    // Microsoft Advertising
    'msclkid': { category: 'advertising', duration: '30 days', description: 'Microsoft Click ID - Tracks ad clicks' },
    '_uetmsdns': { category: 'advertising', duration: 'Session', description: 'Microsoft UET consent mode cookie' },
    'MUID': { category: 'advertising', duration: '390 days', description: 'Microsoft Universal ID' },
    '_uetsid': { category: 'advertising', duration: '1 day', description: 'Bing Ads session ID' },
    '_uetmsclkid': { category: 'advertising', duration: 'Session', description: 'Microsoft UET click ID' },
    '_uetmsd': { category: 'advertising', duration: 'Session', description: 'Microsoft UET domain setting' },
    'MUIDB': { category: 'advertising', duration: '390 days', description: 'Microsoft Universal ID backup' },
    '_uetvid': { category: 'advertising', duration: '390 days', description: 'Bing Ads visitor ID' },
    '_uetsid_exp': { category: 'advertising', duration: '1 day', description: 'Bing Ads session expiration' },
    
    // Facebook/Meta Advertising
    '_fbp': { category: 'advertising', duration: '90 days', description: 'Facebook Pixel - Conversion tracking' },
    'fr': { category: 'advertising', duration: '90 days', description: 'Facebook browser ID' },
    'datr': { category: 'advertising', duration: '730 days', description: 'Facebook browser identification' },
    'lu': { category: 'advertising', duration: '2 years', description: 'Facebook login status' },
    'xs': { category: 'advertising', duration: '90 days', description: 'Facebook session ID' },
    'c_user': { category: 'advertising', duration: '90 days', description: 'Facebook user ID' },
    'm_user': { category: 'advertising', duration: '90 days', description: 'Facebook mobile user ID' },
    'pl': { category: 'advertising', duration: '90 days', description: 'Facebook platform login' },
    'dbln': { category: 'advertising', duration: '2 years', description: 'Facebook device-based login' },
    '_fbc': { category: 'advertising', duration: '2 years', description: 'Facebook click ID' },
    'usida': { category: 'advertising', duration: 'Session', description: 'Facebook targeted advertising' },
    'act': { category: 'advertising', duration: 'Session', description: 'Facebook current session activity' },
    
    // TikTok Advertising
    '_ttp': { category: 'advertising', duration: '390 days', description: 'TikTok Pixel tracking' },
    'ttclid': { category: 'advertising', duration: '30 days', description: 'TikTok Click ID' },
    'tt_sessionid': { category: 'advertising', duration: '1 day', description: 'TikTok session' },
    'tt_medium': { category: 'advertising', duration: '30 days', description: 'TikTok traffic source' },
    'tt_campaign': { category: 'advertising', duration: '30 days', description: 'TikTok campaign ID' },
    
    // LinkedIn Advertising
    'lidc': { category: 'advertising', duration: '1 day', description: 'LinkedIn Ads routing' },
    'bcookie': { category: 'advertising', duration: '730 days', description: 'LinkedIn Browser ID' },
    'li_sugr': { category: 'advertising', duration: '90 days', description: 'LinkedIn user tracking' },
    'bscookie': { category: 'advertising', duration: '730 days', description: 'LinkedIn secure browser ID' },
    'UserMatchHistory': { category: 'advertising', duration: '30 days', description: 'LinkedIn Ads matching' },
    'lang': { category: 'advertising', duration: 'Session', description: 'LinkedIn language setting' },
    
    // Pinterest Advertising
    '_pinterest_ct_ua': { category: 'advertising', duration: '365 days', description: 'Pinterest Click Tracking' },
    '_pinterest_sess': { category: 'advertising', duration: '1 day', description: 'Pinterest session' },
    'cm_sub': { category: 'advertising', duration: '365 days', description: 'Pinterest conversion' },
    '_pin_unauth': { category: 'advertising', duration: '1 year', description: 'Pinterest unauthenticated user' },
    '_auth': { category: 'advertising', duration: '1 year', description: 'Pinterest authentication' },
    '_pinterest_referrer': { category: 'advertising', duration: '1 day', description: 'Pinterest referral source' },
    
    // Twitter Advertising
    'personalization_id': { category: 'advertising', duration: '730 days', description: 'Twitter personalization' },
    'guest_id': { category: 'advertising', duration: '730 days', description: 'Twitter guest tracking' },
    'ct0': { category: 'advertising', duration: '6 hours', description: 'Twitter CSRF token' },
    'auth_token': { category: 'advertising', duration: 'Session', description: 'Twitter authentication' },
    'twid': { category: 'advertising', duration: '730 days', description: 'Twitter user ID' },
    
    // Snapchat Advertising
    'sc_at': { category: 'advertising', duration: '365 days', description: 'Snapchat Ads tracking' },
    '_scid': { category: 'advertising', duration: '365 days', description: 'Snapchat user ID' },
    '_sctr': { category: 'advertising', duration: '365 days', description: 'Snapchat click tracking' },
    'snap_ga': { category: 'advertising', duration: '90 days', description: 'Snapchat Google Analytics' },
    
    // ========== ANALYTICS COOKIES ==========
    // Google Analytics
    '_ga': { category: 'analytics', duration: '730 days', description: 'Google Analytics client ID' },
    '_gid': { category: 'analytics', duration: '1 day', description: 'Google Analytics user ID' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle' },
    '_gat_UA-': { category: 'analytics', duration: '1 minute', description: 'Google Analytics account throttle' },
    '_ga_': { category: 'analytics', duration: '730 days', description: 'Google Analytics persistent ID' },
    '_dc_gtm_': { category: 'analytics', duration: '1 minute', description: 'Google Tag Manager' },
    
    // Microsoft Clarity
    '_clck': { category: 'analytics', duration: '365 days', description: 'Microsoft Clarity user ID' },
    '_clsk': { category: 'analytics', duration: '1 day', description: 'Microsoft Clarity session linkage' },
    '_cltk': { category: 'analytics', duration: 'Session', description: 'Microsoft Clarity session tracking' },
    'CLID': { category: 'analytics', duration: '365 days', description: 'Microsoft Clarity client ID' },
    'ANONCHK': { category: 'analytics', duration: '1 day', description: 'Microsoft Clarity anonymous check' },
    'SM': { category: 'analytics', duration: 'Session', description: 'Microsoft Clarity session marker' },
    
    // Adobe Analytics
    's_cc': { category: 'analytics', duration: 'Session', description: 'Adobe Analytics settings' },
    's_sq': { category: 'analytics', duration: 'Session', description: 'Adobe Analytics clickstream' },
    'AMCV_': { category: 'analytics', duration: '730 days', description: 'Adobe Marketing Cloud ID' },
    's_vi': { category: 'analytics', duration: '730 days', description: 'Adobe Omniture visitor ID' },
    'demdex': { category: 'analytics', duration: '180 days', description: 'Adobe Audience Manager' },
    
    // Hotjar
    '_hjClosedSurveyInvites': { category: 'analytics', duration: '365 days', description: 'Hotjar closed surveys' },
    '_hjDonePolls': { category: 'analytics', duration: '365 days', description: 'Hotjar completed polls' },
    '_hjMinimizedPolls': { category: 'analytics', duration: '365 days', description: 'Hotjar minimized polls' },
    '_hjShownFeedbackMessage': { category: 'analytics', duration: '365 days', description: 'Hotjar feedback status' },
    '_hjid': { category: 'analytics', duration: '365 days', description: 'Hotjar user ID' },
    '_hjIncludedInPageviewSample': { category: 'analytics', duration: '30 minutes', description: 'Hotjar pageview tracking' },
    
    // HubSpot Analytics
    'hubspotutk': { category: 'analytics', duration: '365 days', description: 'HubSpot visitor identity' },
    '__hssc': { category: 'analytics', duration: '30 minutes', description: 'HubSpot session' },
    '__hssrc': { category: 'analytics', duration: 'Session', description: 'HubSpot new session' },
    '__hstc': { category: 'analytics', duration: '730 days', description: 'HubSpot campaign tracking' },
    'hsfirstvisit': { category: 'analytics', duration: '730 days', description: 'HubSpot first visit' },
    
    // ========== FUNCTIONAL COOKIES ==========
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session identifier' },
    'cookie_consent': { category: 'functional', duration: '365 days', description: 'Cookie consent preferences' },
    'wp-settings-': { category: 'functional', duration: '1 year', description: 'WordPress user settings' },
    'wp-settings-time-': { category: 'functional', duration: '1 year', description: 'WordPress settings timestamp' },
    'wordpress_test_cookie': { category: 'functional', duration: 'Session', description: 'WordPress test cookie' },
    'wfvt_': { category: 'functional', duration: '30 minutes', description: 'Wordfence security cookie' },
    
    // Facebook Functional
    'wd': { category: 'functional', duration: 'Session', description: 'Facebook window dimensions' },
    'presence': { category: 'functional', duration: 'Session', description: 'Facebook chat status' },
    'sb': { category: 'functional', duration: '2 years', description: 'Facebook browser identification' },
    
    // ========== ESSENTIAL COOKIES ==========
    'AWSALB': { category: 'essential', duration: '7 days', description: 'AWS load balancer' },
    'AWSALBCORS': { category: 'essential', duration: '7 days', description: 'AWS CORS load balancer' },
    '__cfduid': { category: 'essential', duration: '30 days', description: 'Cloudflare security' },
    '__cf_bm': { category: 'essential', duration: '30 minutes', description: 'Cloudflare bot management' },
    'JSESSIONID': { category: 'essential', duration: 'Session', description: 'Java session ID' },
    'ARRAffinity': { category: 'essential', duration: 'Session', description: 'Azure load balancer' },
    
    // ========== OTHER PLATFORMS ==========
    // Shopify
    '_shopify_y': { category: 'analytics', duration: '1 year', description: 'Shopify analytics' },
    '_shopify_s': { category: 'analytics', duration: '30 minutes', description: 'Shopify session' },
    '_shopify_sa_p': { category: 'advertising', duration: '30 minutes', description: 'Shopify affiliate' },
    '_shopify_fs': { category: 'analytics', duration: '2 years', description: 'Shopify first visit' },
    '_shopify_uniq': { category: 'analytics', duration: '1 day', description: 'Shopify unique visitor' },
    
    // Taboola
    't_gid': { category: 'advertising', duration: '365 days', description: 'Taboola user ID' },
    't_sessionid': { category: 'advertising', duration: 'Session', description: 'Taboola session' },
    'taboola_usg': { category: 'advertising', duration: '30 days', description: 'Taboola user segments' },
    
    // Outbrain
    'obuid': { category: 'advertising', duration: '365 days', description: 'Outbrain user ID' },
    'obcl': { category: 'advertising', duration: '30 days', description: 'Outbrain click tracking' },
    'outbrain_cid': { category: 'advertising', duration: '30 days', description: 'Outbrain click ID' },
    
    // Verizon Media
    'TUUID': { category: 'advertising', duration: '365 days', description: 'Verizon user ID' },
    'TUUID_TIMESTAMP': { category: 'advertising', duration: '365 days', description: 'Verizon timestamp' },
    
    // Quantcast
    'd': { category: 'advertising', duration: '3 months', description: 'Quantcast measurement' },
    'qc_shared': { category: 'advertising', duration: '3 months', description: 'Quantcast shared data' },
    
    // Liveramp
    '_cc_cc': { category: 'advertising', duration: '180 days', description: 'LiveRamp identity' },
    '_cc_id': { category: 'advertising', duration: '180 days', description: 'LiveRamp cookie ID' },
    
    // Yandex
    'yandexuid': { category: 'advertising', duration: '365 days', description: 'Yandex Metrica user ID' },
    'ymex': { category: 'advertising', duration: '365 days', description: 'Yandex Metrica visitor' },
    '_ym_uid': { category: 'analytics', duration: '365 days', description: 'Yandex Metrica unique ID' },
    '_ym_d': { category: 'analytics', duration: '365 days', description: 'Yandex Metrica first visit' },
    
    // Quora
    'm-b': { category: 'advertising', duration: '365 days', description: 'Quora browser ID' },
    'm-uid': { category: 'advertising', duration: '365 days', description: 'Quora user ID' },
    
    // StackAdapt
    'sadb': { category: 'advertising', duration: '30 days', description: 'StackAdapt bidding data' },
    'sadr': { category: 'advertising', duration: '30 days', description: 'StackAdapt retargeting' },
    
    // The Trade Desk
    'TDID': { category: 'advertising', duration: '365 days', description: 'The Trade Desk ID' },
    'TDCPM': { category: 'advertising', duration: '365 days', description: 'The Trade Desk CPM data' },
    
    // MediaMath
    'mmapi': { category: 'advertising', duration: '30 days', description: 'MediaMath API tracking' },
    'mmdata': { category: 'advertising', duration: '30 days', description: 'MediaMath campaign data' },
    
    // Criteo
    'criteo': { category: 'advertising', duration: '365 days', description: 'Criteo retargeting' },
    'uid': { category: 'advertising', duration: '365 days', description: 'Criteo user ID' },
    
    // AdRoll
    '__adroll': { category: 'advertising', duration: '365 days', description: 'AdRoll tracking' },
    '__ar_v4': { category: 'advertising', duration: '365 days', description: 'AdRoll segmentation' },
    
    // Amazon Advertising
    'ad-id': { category: 'advertising', duration: '270 days', description: 'Amazon Ad System ID' },
    'ad-privacy': { category: 'advertising', duration: '730 days', description: 'Amazon Ad Preferences' },
    'adblk': { category: 'advertising', duration: '30 days', description: 'Amazon Ad Block detection' },
    
    // New Relic
    'NRBA_POOL': { category: 'analytics', duration: 'Session', description: 'New Relic browser monitoring' },
    'NRBA_SESSION': { category: 'analytics', duration: 'Session', description: 'New Relic session tracking' },
    
    // Optimizely
    'optimizelyEndUserId': { category: 'analytics', duration: '180 days', description: 'Optimizely user ID' },
    'optimizelySegments': { category: 'analytics', duration: '180 days', description: 'Optimizely segmentation' },
    
    // Vimeo
    'vuid': { category: 'analytics', duration: '2 years', description: 'Vimeo analytics ID' },
    'player': { category: 'functional', duration: '1 year', description: 'Vimeo player preferences' },
    
    // YouTube
    'VISITOR_INFO1_LIVE': { category: 'functional', duration: '180 days', description: 'YouTube bandwidth estimation' },
    'YSC': { category: 'functional', duration: 'Session', description: 'YouTube session cookie' },
    'PREF': { category: 'functional', duration: '2 years', description: 'YouTube preferences' },
    
    // Dailymotion
    'dmvk': { category: 'analytics', duration: 'Session', description: 'Dailymotion visitor key' },
    'dm_last_visit': { category: 'analytics', duration: '1 year', description: 'Dailymotion last visit' },
    
    // Trustpilot
    'trustpilot_customer_auth': { category: 'functional', duration: 'Session', description: 'Trustpilot authentication' },
    'trustpilot_machine_id': { category: 'analytics', duration: '1 year', description: 'Trustpilot device ID' },
    
    // Zendesk
    '__zlcmid': { category: 'functional', duration: '1 year', description: 'Zendesk chat identification' },
    '__zlcprivacy': { category: 'functional', duration: '1 year', description: 'Zendesk privacy preferences' },
    
    // Freshchat
    '_fw_crm_v': { category: 'functional', duration: '1 year', description: 'Freshchat visitor ID' },
    '_fw_l2_b': { category: 'functional', duration: 'Session', description: 'Freshchat session' },
    
    // Drift
    'drift_aid': { category: 'functional', duration: '2 years', description: 'Drift anonymous ID' },
    'drift_campaign_refresh': { category: 'functional', duration: 'Session', description: 'Drift campaign state' },
    
    // Intercom
    'intercom-id': { category: 'functional', duration: '9 months', description: 'Intercom user ID' },
    'intercom-session': { category: 'functional', duration: '7 days', description: 'Intercom session' },
    
    // Segment
    'ajs_anonymous_id': { category: 'analytics', duration: '1 year', description: 'Segment anonymous ID' },
    'ajs_user_id': { category: 'analytics', duration: '1 year', description: 'Segment user ID' },
    
    // Snowplow
    '_sp_id': { category: 'analytics', duration: '2 years', description: 'Snowplow visitor ID' },
    '_sp_ses': { category: 'analytics', duration: '30 minutes', description: 'Snowplow session ID' },
    
    // Matomo
    '_pk_id': { category: 'analytics', duration: '1 year', description: 'Matomo visitor ID' },
    '_pk_ses': { category: 'analytics', duration: '30 minutes', description: 'Matomo session ID' },
    
    // Crazy Egg
    'is_returning': { category: 'analytics', duration: '5 years', description: 'Crazy Egg returning visitor' },
    'ce_need_secure': { category: 'functional', duration: 'Session', description: 'Crazy Egg security' },
    
    // Mouseflow
    'mf_[websiteid]': { category: 'analytics', duration: '90 days', description: 'Mouseflow session' },
    'mf_user': { category: 'analytics', duration: '90 days', description: 'Mouseflow user ID' },
    
    // FullStory
    '_fsuid': { category: 'analytics', duration: '1 year', description: 'FullStory user ID' },
    '_fssid': { category: 'analytics', duration: 'Session', description: 'FullStory session ID' },
    
    // Pardot
    'visitor_id': { category: 'advertising', duration: '10 years', description: 'Pardot visitor ID' },
    'visitor_id-hash': { category: 'advertising', duration: '10 years', description: 'Pardot hashed visitor ID' },
    
    // Marketo
    '_mkto_trk': { category: 'advertising', duration: '2 years', description: 'Marketo tracking' },
    'BIGipServerpool_': { category: 'functional', duration: 'Session', description: 'Marketo load balancing' },
    
    // Eloqua
    'ELOQUA': { category: 'advertising', duration: '2 years', description: 'Eloqua visitor ID' },
    'ELQSTATUS': { category: 'advertising', duration: '2 years', description: 'Eloqua status' },
    
    // Salesforce
    'sid': { category: 'essential', duration: 'Session', description: 'Salesforce session ID' },
    'clientSrc': { category: 'functional', duration: '1 year', description: 'Salesforce client source' },
    
    // Tealium
    'utag_main': { category: 'analytics', duration: '1 year', description: 'Tealium main cookie' },
    'utag_env': { category: 'analytics', duration: 'Session', description: 'Tealium environment' },
    
    // OneTrust
    'OptanonAlertBoxClosed': { category: 'functional', duration: '365 days', description: 'OneTrust consent banner closed' },
    'OptanonConsent': { category: 'functional', duration: '365 days', description: 'OneTrust consent preferences' },
    
    // Cookiebot
    'CookieConsent': { category: 'functional', duration: '1 year', description: 'Cookiebot consent status' },
    'cookietest': { category: 'functional', duration: 'Session', description: 'Cookiebot test' },
    
    // Usercentrics
    'uc_user_interaction': { category: 'functional', duration: '1 year', description: 'Usercentrics user consent' },
    'uc_user_interaction_ts': { category: 'functional', duration: '1 year', description: 'Usercentrics consent timestamp' },
    
    // TrustArc
    'notice_gdpr_prefs': { category: 'functional', duration: '1 year', description: 'TrustArc GDPR preferences' },
    'notice_behavior': { category: 'functional', duration: '1 year', description: 'TrustArc notice behavior' },
    
    // Quantcast Choice
    'quantcast_choice': { category: 'functional', duration: '1 year', description: 'Quantcast consent' },
    'quantcast2.quantcast': { category: 'functional', duration: '1 year', description: 'Quantcast preferences' },
    
    // IAB TCF
    'euconsent-v2': { category: 'functional', duration: '1 year', description: 'IAB TCF consent string' },
    'eupubconsent-v2': { category: 'functional', duration: '1 year', description: 'IAB TCF publisher consent' }
};

// Language translations (keeping only en and fr as requested)
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
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast1Day: "Last 1 Day",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        seeAnalytics: "See Consent Analytics"
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
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast1Day: "Dernier Jour",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours",
        passwordPrompt: "Entrez le mot de passe pour voir les analyses",
        passwordSubmit: "Soumettre",
        passwordIncorrect: "Mot de passe incorrect",
        dashboardTitle: "Tableau de bord des analyses de consentement",
        seeAnalytics: "Voir les analyses de consentement"
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
        save: "Einstellungen speichern",
        language: "Deutsch",
        statsTitle: "Zustimmungsstatistiken",
        statsAccepted: "Akzeptiert",
        statsRejected: "Abgelehnt",
        statsCustom: "Angepasst",
        statsTotal: "Gesamt",
        statsPercentage: "Prozentsatz",
        statsLast1Day: "Letzter Tag",
        statsLast7Days: "Letzten 7 Tage",
        statsLast30Days: "Letzten 30 Tage",
        passwordPrompt: "Passwort eingeben, um Analysen zu sehen",
        passwordSubmit: "Einreichen",
        passwordIncorrect: "Falsches Passwort",
        dashboardTitle: "Zustimmungsanalyse-Dashboard",
        seeAnalytics: "Zustimmungsanalysen anzeigen"
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
        save: "Salva preferenze",
        language: "Italiano",
        statsTitle: "Statistiche del Consenso",
        statsAccepted: "Accettato",
        statsRejected: "Rifiutato",
        statsCustom: "Personalizzato",
        statsTotal: "Totale",
        statsPercentage: "Percentuale",
        statsLast1Day: "Ultimo 1 Giorno",
        statsLast7Days: "Ultimi 7 Giorni",
        statsLast30Days: "Ultimi 30 Giorni",
        passwordPrompt: "Inserisci la password per visualizzare le analitiche",
        passwordSubmit: "Invia",
        passwordIncorrect: "Password errata",
        dashboardTitle: "Dashboard Analisi Consenso",
        seeAnalytics: "Vedi Analisi Consenso"
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
        save: "Guardar preferencias",
        language: "Español",
        statsTitle: "Estadísticas de Consentimiento",
        statsAccepted: "Aceptado",
        statsRejected: "Rechazado",
        statsCustom: "Personalizado",
        statsTotal: "Total",
        statsPercentage: "Porcentaje",
        statsLast1Day: "Último Día",
        statsLast7Days: "Últimos 7 Días",
        statsLast30Days: "Últimos 30 Días",
        passwordPrompt: "Ingrese contraseña para ver análisis",
        passwordSubmit: "Enviar",
        passwordIncorrect: "Contraseña incorrecta",
        dashboardTitle: "Panel de Análisis de Consentimiento",
        seeAnalytics: "Ver Estadísticas de Consentimiento"
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
        save: "Salvar Preferências",
        language: "Português",
        statsTitle: "Estatísticas de Consentimento",
        statsAccepted: "Aceito",
        statsRejected: "Rejeitado",
        statsCustom: "Personalizado",
        statsTotal: "Total",
        statsPercentage: "Percentagem",
        statsLast1Day: "Último Dia",
        statsLast7Days: "Últimos 7 Dias",
        statsLast30Days: "Últimos 30 Dias",
        passwordPrompt: "Digite a senha para ver análises",
        passwordSubmit: "Enviar",
        passwordIncorrect: "Senha incorreta",
        dashboardTitle: "Painel de Análise de Consentimento",
        seeAnalytics: "Ver Estatísticas de Consentimento"
    },
    nl: {
        title: "We waarderen uw privacy",
        description: "We gebruiken cookies om uw browse-ervaring te verbeteren, gepersonaliseerde advertenties of inhoud te bieden en ons verkeer te analyseren. Door op \"Alles accepteren\" te klikken, stemt u in met het gebruik van cookies.",
        privacy: "Privacybeleid",
        customize: "Aanpassen",
        reject: "Alles weigeren",
        accept: "Alles accepteren",
        essential: "Essentiële Cookies",
        essentialDesc: "Noodzakelijk voor websitefunctionaliteit",
        analytics: "Analysecookies",
        analyticsDesc: "Helpen bezoekersinteracties te begrijpen",
        performance: "Prestatiecookies",
        performanceDesc: "Verbeteren website prestaties",
        advertising: "Advertentiecookies",
        advertisingDesc: "Leveren relevante advertenties",
        other: "Andere Cookies",
        otherDesc: "Niet-gecategoriseerde cookies",
        save: "Voorkeuren opslaan",
        language: "Nederlands",
        statsTitle: "Toestemmingsstatistieken",
        statsAccepted: "Geaccepteerd",
        statsRejected: "Geweigerd",
        statsCustom: "Aangepast",
        statsTotal: "Totaal",
        statsPercentage: "Percentage",
        statsLast1Day: "Laatste Dag",
        statsLast7Days: "Laatste 7 Dagen",
        statsLast30Days: "Laatste 30 Dagen",
        passwordPrompt: "Voer wachtwoord in om analyses te zien",
        passwordSubmit: "Indienen",
        passwordIncorrect: "Onjuist wachtwoord",
        dashboardTitle: "Dashboard Toestemmingsanalyses",
        seeAnalytics: "Toestemmingsstatistieken bekijken"
    },
    pl: {
        title: "Szanujemy Twoją prywatność",
        description: "Używamy plików cookie, aby poprawić Twoje doświadczenia przeglądania, dostarczać spersonalizowane reklamy lub treści i analizować nasz ruch. Klikając „Zaakceptuj wszystkie\", wyrażasz zgodę na używanie plików cookie.",
        privacy: "Polityka prywatności",
        customize: "Dostosuj",
        reject: "Odrzuć wszystkie",
        accept: "Zaakceptuj wszystkie",
        essential: "Niezbędne pliki cookie",
        essentialDesc: "Wymagane do działania witryny",
        analytics: "Analityczne pliki cookie",
        analyticsDesc: "Pomagają zrozumieć interakcje",
        performance: "Pliki cookie wydajności",
        performanceDesc: "Poprawiają wydajność witryny",
        advertising: "Reklamowe pliki cookie",
        advertisingDesc: "Dostarczają odpowiednie reklamy",
        other: "Inne pliki cookie",
        otherDesc: "Nieskategoryzowane pliki cookie",
        save: "Zapisz preferencje",
        language: "Polski",
        statsTitle: "Statystyki zgód",
        statsAccepted: "Zaakceptowane",
        statsRejected: "Odrzucone",
        statsCustom: "Dostosowane",
        statsTotal: "Łącznie",
        statsPercentage: "Procent",
        statsLast1Day: "Ostatni Dzień",
        statsLast7Days: "Ostatnie 7 Dni",
        statsLast30Days: "Ostatnie 30 Dni",
        passwordPrompt: "Wpisz hasło, aby zobaczyć analizy",
        passwordSubmit: "Zatwierdź",
        passwordIncorrect: "Nieprawidłowe hasło",
        dashboardTitle: "Panel statystyk zgód",
        seeAnalytics: "Zobacz statystyki zgód"
    },
    sv: {
        title: "Vi värdesätter din integritet",
        description: "Vi använder cookies för att förbättra din surfupplevelse, tillhandahålla anpassade annonser eller innehåll och analysera vår trafik. Genom att klicka på \"Acceptera alla\" samtycker du till användningen av cookies.",
        privacy: "Integritetspolicy",
        customize: "Anpassa",
        reject: "Avvisa alla",
        accept: "Acceptera alla",
        essential: "Nödvändiga Cookies",
        essentialDesc: "Nödvändiga för webbplatsens funktionalitet",
        analytics: "Analyscookies",
        analyticsDesc: "Hjälper till att förstå besökarinteraktioner",
        performance: "Prestandacookies",
        performanceDesc: "Förbättrar webbplatsens prestanda",
        advertising: "Annonscookies",
        advertisingDesc: "Levererar relevanta annonser",
        other: "Andra Cookies",
        otherDesc: "Okategoriserade cookies",
        save: "Spara inställningar",
        language: "Svenska",
        statsTitle: "Samtyckesstatistik",
        statsAccepted: "Accepterade",
        statsRejected: "Avvisade",
        statsCustom: "Anpassade",
        statsTotal: "Totalt",
        statsPercentage: "Procent",
        statsLast1Day: "Senaste Dagen",
        statsLast7Days: "Senaste 7 Dagarna",
        statsLast30Days: "Senaste 30 Dagarna",
        passwordPrompt: "Ange lösenord för att se analyser",
        passwordSubmit: "Skicka",
        passwordIncorrect: "Felaktigt lösenord",
        dashboardTitle: "Samtyckesanalyspanel",
        seeAnalytics: "Se samtyckesstatistik"
    },
    da: {
        title: "Vi værdsætter dit privatliv",
        description: "Vi bruger cookies til at forbedre din browsingoplevelse, levere personificerede annoncer eller indhold og analysere vores trafik. Ved at klikke på \"Accepter alle\" giver du samtykke til brugen af cookies.",
        privacy: "Privatlivspolitik",
        customize: "Tilpas",
        reject: "Afvis alle",
        accept: "Accepter alle",
        essential: "Nødvendige Cookies",
        essentialDesc: "Nødvendige for webstedets funktionalitet",
        analytics: "Analysecookies",
        analyticsDesc: "Hjælper med at forstå brugerinteraktioner",
        performance: "Performancecookies",
        performanceDesc: "Forbedrer webstedets ydeevne",
        advertising: "Annoncecookies",
        advertisingDesc: "Leverer relevante annoncer",
        other: "Andre Cookies",
        otherDesc: "Ukategoriserede cookies",
        save: "Gem indstillinger",
        language: "Dansk",
        statsTitle: "Samtykkestatistik",
        statsAccepted: "Accepteret",
        statsRejected: "Afvist",
        statsCustom: "Tilpasset",
        statsTotal: "Total",
        statsPercentage: "Procentdel",
        statsLast1Day: "Sidste Dag",
        statsLast7Days: "Sidste 7 Dage",
        statsLast30Days: "Sidste 30 Dage",
        passwordPrompt: "Indtast adgangskode for at se analyser",
        passwordSubmit: "Indsend",
        passwordIncorrect: "Forkert adgangskode",
        dashboardTitle: "Samtykkeanalysepanel",
        seeAnalytics: "Se samtykkestatistik"
    },
    fi: {
        title: "Arvostamme yksityisyyttäsi",
        description: "Käytämme evästeitä parantaaksemme selauskokemustasi, tarjotaksemme henkilökohtaisia mainoksia tai sisältöä ja analysoidaksemme liikennettämme. Klikkaamalla \"Hyväksy kaikki\" annat suostumuksesi evästeiden käyttöön.",
        privacy: "Tietosuojakäytäntö",
        customize: "Mukauta",
        reject: "Hylkää kaikki",
        accept: "Hyväksy kaikki",
        essential: "Välttämättömät evästeet",
        essentialDesc: "Välttämättömiä sivuston toiminnan kannalta",
        analytics: "Analytiikkaevästeet",
        analyticsDesc: "Auttavat ymmärtämään käyttäjäinteraktioita",
        performance: "Suorituskykyevästeet",
        performanceDesc: "Parantavat sivuston suorituskykyä",
        advertising: "Mainosevästeet",
        advertisingDesc: "Toimittavat asiaankuuluvia mainoksia",
        other: "Muut evästeet",
        otherDesc: "Luokittelemattomat evästeet",
        save: "Tallenna asetukset",
        language: "Suomi",
        statsTitle: "Suostumustilastot",
        statsAccepted: "Hyväksytty",
        statsRejected: "Hylätty",
        statsCustom: "Mukautettu",
        statsTotal: "Yhteensä",
        statsPercentage: "Prosenttia",
        statsLast1Day: "Viimeinen Päivä",
        statsLast7Days: "Viimeiset 7 Päivää",
        statsLast30Days: "Viimeiset 30 Päivää",
        passwordPrompt: "Anna salasana nähdäksesi analyysit",
        passwordSubmit: "Lähetä",
        passwordIncorrect: "Väärä salasana",
        dashboardTitle: "Suostumusanalyysien kojelauta",
        seeAnalytics: "Näytä suostumustilastot"
    },
    el: {
        title: "Σεβόμαστε την ιδιωτικότητά σας",
        description: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας, να παρέχουμε εξατομικευμένες διαφημίσεις ή περιεχόμενο και να αναλύουμε την επισκεψιμότητά μας. Κάνοντας κλικ στο \"Αποδοχή όλων\", συναινείτε στη χρήση cookies.",
        privacy: "Πολιτική Απορρήτου",
        customize: "Προσαρμογή",
        reject: "Απόρριψη όλων",
        accept: "Αποδοχή όλων",
        essential: "Απαραίτητα Cookies",
        essentialDesc: "Απαραίτητα για τη λειτουργία του ιστότοπου",
        analytics: "Αναλυτικά Cookies",
        analyticsDesc: "Βοηθούν στην κατανόηση αλληλεπιδράσεων",
        performance: "Cookies Απόδοσης",
        performanceDesc: "Βελτιώνουν την απόδοση του ιστότοπου",
        advertising: "Διαφημιστικά Cookies",
        advertisingDesc: "Παρέχουν σχετικές διαφημίσεις",
        other: "Άλλα Cookies",
        otherDesc: "Μη κατηγοριοποιημένα cookies",
        save: "Αποθήκευση προτιμήσεων",
        language: "Ελληνικά",
        statsTitle: "Στατιστικά Συναίνεσης",
        statsAccepted: "Αποδεκτά",
        statsRejected: "Απορριφθέντα",
        statsCustom: "Προσαρμοσμένα",
        statsTotal: "Σύνολο",
        statsPercentage: "Ποσοστό",
        statsLast1Day: "Τελευταία Μέρα",
        statsLast7Days: "Τελευταίες 7 Ημέρες",
        statsLast30Days: "Τελευταίες 30 Ημέρες",
        passwordPrompt: "Εισάγετε κωδικό για να δείτε αναλύσεις",
        passwordSubmit: "Υποβολή",
        passwordIncorrect: "Λάθος κωδικός",
        dashboardTitle: "Πίνακας Ανάλυσης Συναινέσεων",
        seeAnalytics: "Δείτε στατιστικά συναίνεσης"
    },
    hu: {
        title: "Tiszteljük az Ön privát szféráját",
        description: "Cookie-kat használunk a böngészési élmény javításához, személyre szabott hirdetések vagy tartalom nyújtásához és a forgalmunk elemzéséhez. Az \"Összes elfogadása\" gombra kattintva hozzájárul a cookie-k használatához.",
        privacy: "Adatvédelmi irányelv",
        customize: "Testreszabás",
        reject: "Összes elutasítása",
        accept: "Összes elfogadása",
        essential: "Alapvető Cookie-k",
        essentialDesc: "A weboldal működéséhez szükséges",
        analytics: "Elemző Cookie-k",
        analyticsDesc: "Segítenek megérteni a látogatói interakciókat",
        performance: "Teljesítmény Cookie-k",
        performanceDesc: "Javítják a weboldal teljesítményét",
        advertising: "Hirdetési Cookie-k",
        advertisingDesc: "Releváns hirdetéseket jelenítenek meg",
        other: "Egyéb Cookie-k",
        otherDesc: "Nincs kategorizálva",
        save: "Beállítások mentése",
        language: "Magyar",
        statsTitle: "Hozzájárulási statisztikák",
        statsAccepted: "Elfogadva",
        statsRejected: "Elutasítva",
        statsCustom: "Testreszabva",
        statsTotal: "Összesen",
        statsPercentage: "Százalék",
        statsLast1Day: "Elmúlt Nap",
        statsLast7Days: "Elmúlt 7 Nap",
        statsLast30Days: "Elmúlt 30 Nap",
        passwordPrompt: "Adja meg a jelszót az elemzések megtekintéséhez",
        passwordSubmit: "Beküldés",
        passwordIncorrect: "Hibás jelszó",
        dashboardTitle: "Hozzájárulási Elemző Irányítópult",
        seeAnalytics: "Hozzájárulási statisztikák megtekintése"
    },
    cs: {
        title: "Vaše soukromí je pro nás důležité",
        description: "Používáme cookies ke zlepšení vašeho zážitku z prohlížení, poskytování personalizovaných reklam nebo obsahu a analýze našeho provozu. Kliknutím na \"Přijmout vše\" souhlasíte s používáním cookies.",
        privacy: "Zásady ochrany osobních údajů",
        customize: "Přizpůsobit",
        reject: "Odmítnout vše",
        accept: "Přijmout vše",
        essential: "Nezbytné Cookies",
        essentialDesc: "Nezbytné pro funkčnost webu",
        analytics: "Analytické Cookies",
        analyticsDesc: "Pomáhají porozumět interakcím návštěvníků",
        performance: "Výkonnostní Cookies",
        performanceDesc: "Zlepšují výkon webu",
        advertising: "Reklamní Cookies",
        advertisingDesc: "Poskytují relevantní reklamy",
        other: "Ostatní Cookies",
        otherDesc: "Nekategorizované cookies",
        save: "Uložit nastavení",
        language: "Čeština",
        statsTitle: "Statistiky souhlasu",
        statsAccepted: "Přijato",
        statsRejected: "Odmítnuto",
        statsCustom: "Přizpůsobeno",
        statsTotal: "Celkem",
        statsPercentage: "Procento",
        statsLast1Day: "Poslední Den",
        statsLast7Days: "Posledních 7 Dní",
        statsLast30Days: "Posledních 30 Dní",
        passwordPrompt: "Zadejte heslo pro zobrazení analýz",
        passwordSubmit: "Odeslat",
        passwordIncorrect: "Nesprávné heslo",
        dashboardTitle: "Analytický Panel Souhlasu",
        seeAnalytics: "Zobrazit statistiky souhlasu"
    },
    ro: {
        title: "Respectăm confidențialitatea dumneavoastră",
        description: "Folosim cookie-uri pentru a îmbunătăți experiența de navigare, pentru a furniza reclame sau conținut personalizat și pentru a analiza traficul nostru. Făcând clic pe \"Acceptă tot\", sunteți de acord cu utilizarea cookie-urilor.",
        privacy: "Politica de confidențialitate",
        customize: "Personalizează",
        reject: "Respinge tot",
        accept: "Acceptă tot",
        essential: "Cookie-uri esențiale",
        essentialDesc: "Necesare pentru funcționalitatea site-ului",
        analytics: "Cookie-uri analitice",
        analyticsDesc: "Ajută la înțelegerea interacțiunilor vizitatorilor",
        performance: "Cookie-uri de performanță",
        performanceDesc: "Îmbunătățesc performanța site-ului",
        advertising: "Cookie-uri publicitare",
        advertisingDesc: "Furnizează reclame relevante",
        other: "Alte Cookie-uri",
        otherDesc: "Cookie-uri necategorizate",
        save: "Salvează preferințele",
        language: "Română",
        statsTitle: "Statistici consimțământ",
        statsAccepted: "Acceptat",
        statsRejected: "Respins",
        statsCustom: "Personalizat",
        statsTotal: "Total",
        statsPercentage: "Procent",
        statsLast1Day: "Ultima Zi",
        statsLast7Days: "Ultimele 7 Zile",
        statsLast30Days: "Ultimele 30 Zile",
        passwordPrompt: "Introduceți parola pentru a vedea analizele",
        passwordSubmit: "Trimite",
        passwordIncorrect: "Parolă incorectă",
        dashboardTitle: "Tablou de Bord Analize Consimțământ",
        seeAnalytics: "Vezi statistici consimțământ"
    },
    sk: {
        title: "Rešpektujeme vaše súkromie",
        description: "Používame cookies na zlepšenie vášho zážitku z prehliadania, poskytovanie personalizovaných reklám alebo obsahu a analýzu nášho prevádzky. Kliknutím na \"Prijať všetko\" súhlasíte s používaním súborov cookie.",
        privacy: "Zásady ochrany osobných údajov",
        customize: "Prispôsobiť",
        reject: "Odmietnuť všetko",
        accept: "Prijať všetko",
        essential: "Nevyhnutné Cookies",
        essentialDesc: "Nevyhnutné pre funkčnosť webu",
        analytics: "Analytické Cookies",
        analyticsDesc: "Pomáhajú pochopiť interakcie návštevníkov",
        performance: "Výkonnostné Cookies",
        performanceDesc: "Zlepšujú výkon webu",
        advertising: "Reklamné Cookies",
        advertisingDesc: "Poskytujú relevantné reklamy",
        other: "Ostatné Cookies",
        otherDesc: "Nekategorizované cookies",
        save: "Uložiť nastavenia",
        language: "Slovenčina",
        statsTitle: "Štatistiky súhlasu",
        statsAccepted: "Prijaté",
        statsRejected: "Odmietnuté",
        statsCustom: "Prispôsobené",
        statsTotal: "Celkom",
        statsPercentage: "Percento",
        statsLast1Day: "Posledný Deň",
        statsLast7Days: "Posledných 7 Dní",
        statsLast30Days: "Posledných 30 Dní",
        passwordPrompt: "Zadajte heslo pre zobrazenie analýz",
        passwordSubmit: "Odoslať",
        passwordIncorrect: "Nesprávne heslo",
        dashboardTitle: "Analytický Panel Súhlasu",
        seeAnalytics: "Zobraziť štatistiky súhlasu"
    },
    sl: {
        title: "Spoštujemo vašo zasebnost",
        description: "Uporabljamo piškotke za izboljšanje vaše izkušnje brskanja, zagotavljanje prilagojenih oglasov ali vsebin in analizo našega prometa. S klikom na \"Sprejmi vse\" se strinjate z uporabo piškotkov.",
        privacy: "Politika zasebnosti",
        customize: "Prilagodi",
        reject: "Zavrni vse",
        accept: "Sprejmi vse",
        essential: "Bistveni piškotki",
        essentialDesc: "Nujni za delovanje spletnega mesta",
        analytics: "Analitični piškotki",
        analyticsDesc: "Pomagajo razumeti interakcije obiskovalcev",
        performance: "Piškotki za zmogljivost",
        performanceDesc: "Izboljšajo zmogljivost spletnega mesta",
        advertising: "Oglasni piškotki",
        advertisingDesc: "Zagotavljajo ustrezne oglase",
        other: "Drugi piškotki",
        otherDesc: "Nekategorizirani piškotki",
        save: "Shrani nastavitve",
        language: "Slovenščina",
        statsTitle: "Statistika privolitve",
        statsAccepted: "Sprejeto",
        statsRejected: "Zavrnjeno",
        statsCustom: "Prilagojeno",
        statsTotal: "Skupaj",
        statsPercentage: "Odstotek",
        statsLast1Day: "Zadnji Dan",
        statsLast7Days: "Zadnjih 7 Dni",
        statsLast30Days: "Zadnjih 30 Dni",
        passwordPrompt: "Vnesite geslo za ogled analiz",
        passwordSubmit: "Pošlji",
        passwordIncorrect: "Napačno geslo",
        dashboardTitle: "Nadzorna plošča analize privolitve",
        seeAnalytics: "Ogled statistike privolitve"
    },
    bg: {
        title: "Уважаваме вашата поверителност",
        description: "Използваме бисквитки, за да подобрим вашето сърфиране, да предоставяме персонализирани реклами или съдържание и да анализираме нашия трафик. С натискане на \"Приеми всички\" вие се съгласявате с използването на бисквитки.",
        privacy: "Политика за поверителност",
        customize: "Персонализиране",
        reject: "Отхвърли всички",
        accept: "Приеми всички",
        essential: "Основни бисквитки",
        essentialDesc: "Необходими за функционалността на сайта",
        analytics: "Аналитични бисквитки",
        analyticsDesc: "Помагат за разбиране на взаимодействията",
        performance: "Бисквитки за производителност",
        performanceDesc: "Подобряват производителността на сайта",
        advertising: "Рекламни бисквитки",
        advertisingDesc: "Доставят релевантни реклами",
        other: "Други бисквитки",
        otherDesc: "Некласифицирани бисквитки",
        save: "Запази настройките",
        language: "Български",
        statsTitle: "Статистика за съгласие",
        statsAccepted: "Прието",
        statsRejected: "Отхвърлено",
        statsCustom: "Персонализирано",
        statsTotal: "Общо",
        statsPercentage: "Процент",
        statsLast1Day: "Последният Ден",
        statsLast7Days: "Последните 7 Дни",
        statsLast30Days: "Последните 30 Дни",
        passwordPrompt: "Въведете парола за преглед на анализи",
        passwordSubmit: "Изпращане",
        passwordIncorrect: "Грешна парола",
        dashboardTitle: "Табло за анализ на съгласие",
        seeAnalytics: "Вижте статистика за съгласие"
    },
    hr: {
        title: "Poštujemo vašu privatnost",
        description: "Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja, pružanje personaliziranih oglasa ili sadržaja i analizu našeg prometa. Klikom na \"Prihvati sve\" pristajete na korištenje kolačića.",
        privacy: "Politika privatnosti",
        customize: "Prilagodi",
        reject: "Odbaci sve",
        accept: "Prihvati sve",
        essential: "Osnovni kolačići",
        essentialDesc: "Potrebni za funkcionalnost web stranice",
        analytics: "Analitički kolačići",
        analyticsDesc: "Pomažu razumjeti interakcije posjetitelja",
        performance: "Kolačići performansi",
        performanceDesc: "Poboljšavaju performanse web stranice",
        advertising: "Oglasni kolačići",
        advertisingDesc: "Pružaju relevantne oglase",
        other: "Ostali kolačići",
        otherDesc: "Nekategorizirani kolačići",
        save: "Spremi postavke",
        language: "Hrvatski",
        statsTitle: "Statistika pristanka",
        statsAccepted: "Prihvaćeno",
        statsRejected: "Odbijeno",
        statsCustom: "Prilagođeno",
        statsTotal: "Ukupno",
        statsPercentage: "Postotak",
        statsLast1Day: "Zadnji Dan",
        statsLast7Days: "Zadnjih 7 Dana",
        statsLast30Days: "Zadnjih 30 Dana",
        passwordPrompt: "Unesite lozinku za pregled analize",
        passwordSubmit: "Pošalji",
        passwordIncorrect: "Pogrešna lozinka",
        dashboardTitle: "Nadzorna ploča analize pristanka",
        seeAnalytics: "Pogledajte statistiku pristanka"
    },
    lt: {
        title: "Mes gerbiame jūsų privatumą",
        description: "Mes naudojame slapukus, kad pagerintume jūsų naršymo patirtį, teiktume suasmenintas reklamas ar turinį ir analizuotume savo srautą. Spustelėję \"Priimti viską\" sutinkate su slapukų naudojimu.",
        privacy: "Privatumo politika",
        customize: "Pritaikyti",
        reject: "Atmesti viską",
        accept: "Priimti viską",
        essential: "Būtini slapukai",
        essentialDesc: "Būtini svetainės funkcionalumui",
        analytics: "Analitiniai slapukai",
        analyticsDesc: "Padeda suprasti lankytojų sąveiką",
        performance: "Veiklos slapukai",
        performanceDesc: "Pagerina svetainės veikimą",
        advertising: "Reklaminiai slapukai",
        advertisingDesc: "Teikia aktualias reklamas",
        other: "Kiti slapukai",
        otherDesc: "Nekategorizuoti slapukai",
        save: "Išsaugoti nuostatas",
        language: "Lietuvių",
        statsTitle: "Sutikimo statistika",
        statsAccepted: "Priimta",
        statsRejected: "Atmesta",
        statsCustom: "Pritaikyta",
        statsTotal: "Iš viso",
        statsPercentage: "Procentas",
        statsLast1Day: "Paskutinė Diena",
        statsLast7Days: "Paskutinės 7 Dienos",
        statsLast30Days: "Paskutinės 30 Dienų",
        passwordPrompt: "Įveskite slaptažodį analizei peržiūrėti",
        passwordSubmit: "Pateikti",
        passwordIncorrect: "Neteisingas slaptažodis",
        dashboardTitle: "Sutikimo analizės prietaisų skydelis",
        seeAnalytics: "Peržiūrėti sutikimo statistiką"
    },
    lv: {
        title: "Mēs cienām jūsu privātumu",
        description: "Mēs izmantojam sīkfailus, lai uzlabotu jūsu pārlūkošanas pieredzi, nodrošinātu personalizētus reklāmas vai saturu un analizētu mūsu satiksmi. Noklikšķinot uz \"Piekrist visiem\", jūs piekrītat sīkfailu izmantošanai.",
        privacy: "Privātuma politika",
        customize: "Pielāgot",
        reject: "Noraidīt visus",
        accept: "Piekrist visiem",
        essential: "Būtiskie sīkfaili",
        essentialDesc: "Nepieciešami vietnes funkcionalitātei",
        analytics: "Analītiskie sīkfaili",
        analyticsDesc: "Palīdz izprast apmeklētāju mijiedarbību",
        performance: "Veiktspējas sīkfaili",
        performanceDesc: "Uzlabo vietnes veiktspēju",
        advertising: "Reklāmas sīkfaili",
        advertisingDesc: "Nodrošina atbilstošas reklāmas",
        other: "Citi sīkfaili",
        otherDesc: "Nekategorizēti sīkfaili",
        save: "Saglabāt iestatījumus",
        language: "Latviešu",
        statsTitle: "Piekrišanas statistika",
        statsAccepted: "Piekrituši",
        statsRejected: "Noraidīti",
        statsCustom: "Pielāgoti",
        statsTotal: "Kopā",
        statsPercentage: "Procenti",
        statsLast1Day: "Pēdējā Diena",
        statsLast7Days: "Pēdējās 7 Dienas",
        statsLast30Days: "Pēdējās 30 Dienas",
        passwordPrompt: "Ievadiet paroli, lai skatītu analīzi",
        passwordSubmit: "Iesniegt",
        passwordIncorrect: "Nepareiza parole",
        dashboardTitle: "Piekrišanas analīzes panelis",
        seeAnalytics: "Skatīt piekrišanas statistiku"
    },
    et: {
        title: "Me austame teie privaatsust",
        description: "Kasutame küpsiseid, et parandada teie veebilehitsemise kogemust, pakkuda personaalseid reklaame või sisu ning analüüsida oma liiklust. Klõpsates nupul \"Nõustu kõigega\", nõustute küpsiste kasutamisega.",
        privacy: "Privaatsuspoliitika",
        customize: "Kohanda",
        reject: "Keeldu kõigest",
        accept: "Nõustu kõigega",
        essential: "Olulised küpsised",
        essentialDesc: "Vajalikud veebisaidi toimimiseks",
        analytics: "Analüütilised küpsised",
        analyticsDesc: "Aitavad mõista külastajate suhtlemist",
        performance: "Töökindluse küpsised",
        performanceDesc: "Parandavad veebisaidi jõudlust",
        advertising: "Reklaamiküpsised",
        advertisingDesc: "Pakuvad asjakohaseid reklaame",
        other: "Muud küpsised",
        otherDesc: "Liigitamata küpsised",
        save: "Salvesta eelistused",
        language: "Eesti",
        statsTitle: "Nõusoleku statistika",
        statsAccepted: "Nõustutud",
        statsRejected: "Keeldutud",
        statsCustom: "Kohandatud",
        statsTotal: "Kokku",
        statsPercentage: "Protsent",
        statsLast1Day: "Viimane Päev",
        statsLast7Days: "Viimased 7 Päeva",
        statsLast30Days: "Viimased 30 Päeva",
        passwordPrompt: "Sisesta parool analüüside vaatamiseks",
        passwordSubmit: "Esita",
        passwordIncorrect: "Vale parool",
        dashboardTitle: "Nõusoleku analüüside töölaud",
        seeAnalytics: "Vaata nõusoleku statistikat"
    },
    mt: {
        title: "Nirrispettaw il-privatezza tiegħek",
        description: "Nużaw cookies biex ittejjeb l-esperjenza tiegħek ta 'navigazzjoni, nipprovdu reklami jew kontent personalizzat u nanalizzaw it-traffiku tagħna. Billi tikklikkja \"Aċċetta Kollox\", qed tagħti l-kunsens għall-użu ta 'cookies.",
        privacy: "Politika tal-Privatezza",
        customize: "Ippersonalizza",
        reject: "Irrifjuta Kollox",
        accept: "Aċċetta Kollox",
        essential: "Cookies Essenzjali",
        essentialDesc: "Meħtieġa għall-funzjonalità tas-sit",
        analytics: "Cookies Analitiċi",
        analyticsDesc: "Jgħin fuq interazzjonijiet tal-viżitatur",
        performance: "Cookies ta 'Prestazzjoni",
        performanceDesc: "Ittejjeb il-prestazzjoni tas-sit",
        advertising: "Cookies tar-Reklamar",
        advertisingDesc: "Ipprovdi reklami rilevanti",
        other: "Cookies Oħra",
        otherDesc: "Cookies mhux kategorizzati",
        save: "Issejvja l-Preferenzi",
        language: "Malti",
        statsTitle: "Statistika tal-Kunsens",
        statsAccepted: "Aċċettat",
        statsRejected: "Rrifjutat",
        statsCustom: "Ippersonalizzat",
        statsTotal: "Total",
        statsPercentage: "Perċentwal",
        statsLast1Day: "L-Aħħar Jum",
        statsLast7Days: "L-Aħħar 7 Ġranet",
        statsLast30Days: "L-Aħħar 30 Ġranet",
        passwordPrompt: "Idħol il-password biex tara l-analiżi",
        passwordSubmit: "Ibgħat",
        passwordIncorrect: "Password mhux korretta",
        dashboardTitle: "Dashboard tal-Analiżi tal-Kunsens",
        seeAnalytics: "Ara l-Istatistika tal-Kunsens"
    },
 // ... (keep all other language translations the same)
};

// Country to language mapping for auto-translation (keeping all mappings)
const countryLanguageMap = {
    // EU Countries
    'AT': 'de',     // Austria
    'BE': 'nl',     // Belgium (Dutch)
    'BE': 'fr',     // Belgium (French)
    'BG': 'bg',     // Bulgaria
    'HR': 'hr',     // Croatia
    'CY': 'el',     // Cyprus
    'CZ': 'cs',     // Czech Republic
    'DK': 'da',     // Denmark
    'EE': 'et',     // Estonia
    'FI': 'fi',     // Finland
    'FR': 'fr',     // France
    'DE': 'de',     // Germany
    'GR': 'el',     // Greece
    'HU': 'hu',     // Hungary
    'IE': 'en',     // Ireland
    'IT': 'it',     // Italy
    'LV': 'lv',     // Latvia
    'LT': 'lt',     // Lithuania
    'LU': 'fr',     // Luxembourg
    'LU': 'de',     // Luxembourg
    'MT': 'mt',     // Malta
    'NL': 'nl',     // Netherlands
    'PL': 'pl',     // Poland
    'PT': 'pt',     // Portugal
    'RO': 'ro',     // Romania
    'SK': 'sk',     // Slovakia
    'SI': 'sl',     // Slovenia
    'ES': 'es',     // Spain
    'SE': 'sv',     // Sweden
    
    // Other European countries
    'AL': 'en',     // Albania
    'BA': 'en',     // Bosnia and Herzegovina
    'IS': 'en',     // Iceland
    'LI': 'de',     // Liechtenstein
    'MK': 'en',     // North Macedonia
    'NO': 'en',     // Norway
    'RS': 'en',     // Serbia
    'CH': 'de',     // Switzerland
    'CH': 'fr',     // Switzerland
    'CH': 'it',     // Switzerland
    'UA': 'uk',     // Ukraine
    'GB': 'en',     // United Kingdom
    
    // Rest of the world
    'US': 'en',     // United States
    'CA': 'en',     // Canada
    'CA': 'fr',     // Canada (French)
    'AU': 'en',     // Australia
    'NZ': 'en',     // New Zealand
    'ZA': 'en',     // South Africa
    'IN': 'en',     // India
    'CN': 'zh',     // China
    'JP': 'ja',     // Japan
    'KR': 'ko',     // South Korea
    'BR': 'pt',     // Brazil
    'MX': 'es',     // Mexico
    'AR': 'es',     // Argentina
    'RU': 'ru'      // Russia
};

// Analytics data storage
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {}
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Banner scheduling variables
let bannerTimer = null;
let bannerShown = false;

// Location data storage
// Location data storage with immediate initialization
// Location data storage - start empty
let locationData = {};

// First try to load from session storage if available
const savedLocation = sessionStorage.getItem('locationData');
if (savedLocation) {
    locationData = JSON.parse(savedLocation);
} else {
    // If no saved data, fetch fresh data
    fetchLocationData().then(() => {
        // Push to dataLayer after we have the data
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'locationInitialized',
            'location_data': locationData,
            'timestamp': new Date().toISOString()
        });
    });
}
// Function to fetch location data

async function fetchLocationData() {
    // Return cached data if available
    const cachedData = sessionStorage.getItem('locationData');
    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        // Push cached location data to dataLayer
        pushGeoDataToDataLayer(parsedData);
        return parsedData;
    }

    const APIs = [
        'https://ipinfo.io/json?token=4c1e5d00e0ac93',
        'https://ipapi.co/json/',
        'https://geolocation-db.com/json/'
    ];

    for (const apiUrl of APIs) {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 3000);
            
            const response = await fetch(apiUrl, { signal: controller.signal });
            clearTimeout(timeout);
            
            if (!response.ok) continue;
            
            const payload = await response.json();
            
            // Standardize the response format with all possible fields
            const data = {
                ip: payload.ip || '',
                country: payload.country || payload.country_code || '',
                country_name: payload.country_name || '',
                region: payload.region || payload.regionName || '',
                city: payload.city || '',
                postal: payload.postal || payload.zip || '',
                latitude: payload.latitude || payload.lat || '',
                longitude: payload.longitude || payload.lon || payload.lng || '',
                timezone: payload.timezone || '',
                org: payload.org || '',
                asn: payload.asn || '',
                continent: payload.continent || getContinentFromCountry(payload.country || payload.country_code || ''),
                hostname: payload.hostname || ''
            };

            // Cache the result
            sessionStorage.setItem('locationData', JSON.stringify(data));
            
            // Push the geo data to dataLayer
            pushGeoDataToDataLayer(data);
            
            return data;
            
        } catch (error) {
            console.log(`Failed with ${apiUrl}:`, error);
            continue;
        }
    }

    // All APIs failed - fallback to browser language
    console.warn("All geolocation APIs failed - using fallback");
    const fallbackData = {
        ip: '',
        country: "Unknown",
        country_name: "Unknown",
        region: "Unknown",
        city: "Unknown",
        postal: '',
        latitude: '',
        longitude: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
        org: '',
        asn: '',
        continent: "Unknown",
        hostname: window.location.hostname
    };
    
    sessionStorage.setItem('locationData', JSON.stringify(fallbackData));
    
    // Push fallback data to dataLayer
    pushGeoDataToDataLayer(fallbackData);
    
    return fallbackData;
}


function pushGeoDataToDataLayer(geoData) {
    window.dataLayer = window.dataLayer || [];
    const geoDataEvent = {
        'event': 'geoDataLoaded',
        'geo_data': {
            'ip': geoData.ip || '',
            'country': geoData.country || '',
            'country_name': geoData.country_name || '',
            'region': geoData.region || '',
            'city': geoData.city || '',
            'postal_code': geoData.postal || '',
            'coordinates': {
                'latitude': geoData.latitude || '',
                'longitude': geoData.longitude || ''
            },
            'timezone': geoData.timezone || '',
            'organization': geoData.org || '',
            'asn': geoData.asn || '',
            'continent': geoData.continent || '',
            'hostname': geoData.hostname || ''
        },
        'timestamp': new Date().toISOString()
    };
    
    // Add location_data flat structure for backward compatibility
    geoDataEvent.location_data = {
        'country': geoData.country || '',
        'city': geoData.city || ''
    };
    
    window.dataLayer.push(geoDataEvent);
}

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

// Load analytics data from localStorage
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    // Initialize today's data if not exists
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Check if dashboard is authenticated
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data
function updateConsentStats(status) {
    const today = new Date().toISOString().split('T')[0];
    
    // Update totals
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    saveAnalyticsData();
}

// Generate analytics dashboard HTML with 1 day, 7 days, and 30 days sections
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Calculate totals
    const total = consentAnalytics.total.accepted + 
                 consentAnalytics.total.rejected + 
                 consentAnalytics.total.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 1 day data
    const today = new Date().toISOString().split('T')[0];
    const last1Day = {};
    last1Day[today] = consentAnalytics.daily[today] || { accepted: 0, rejected: 0, custom: 0 };
    
    // Get last 7 days data
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    // Get last 30 days data
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast1Day}</h4>
                <div class="stat-bars">
                    ${Object.entries(last1Day).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

// Generate password prompt HTML
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
// Replace the existing checkGeoTargeting function with this:
function checkGeoTargeting(geoData) {
    // If we don't have country data, allow by default (or deny if you prefer)
    if (!geoData || !geoData.country || geoData.country === 'Unknown') {
        return !config.geoConfig.euOnly; // If EU-only mode, deny unknown locations
    }

    // Check blocked locations first (highest priority)
    if (config.geoConfig.blockedCountries.length > 0 && 
        config.geoConfig.blockedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.blockedRegions.length > 0 && 
        config.geoConfig.blockedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.blockedCities.length > 0 && 
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }

    // Handle EU-only mode
    if (config.geoConfig.euOnly) {
        return EU_COUNTRIES.includes(geoData.country);
    }

    // Check if specific regions are specified
    if (config.geoConfig.specificRegions.length > 0) {
       // if (config.geoConfig.specificRegions.includes('EU') && 
          //  EU_COUNTRIES.includes(geoData.country)) {
           // return true;
     //   }
        return config.geoConfig.specificRegions.includes(geoData.region);
    }

    // Check allowed locations (if any restrictions are set)
    if (config.geoConfig.allowedCountries.length > 0 && 
        !config.geoConfig.allowedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.allowedRegions.length > 0 && 
        !config.geoConfig.allowedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.allowedCities.length > 0 && 
        !config.geoConfig.allowedCities.includes(geoData.city)) {
        return false;
    }
    
    // If no restrictions, allow by default
    return true;
}

// Detect user language based on country and browser settings
function detectUserLanguage(geoData) {
    // First check if language is stored in cookie
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) {
            return preferredLanguage;
        }
    }
    
    // Then try to get language from country if auto-detection is enabled
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) {
            return countryLang;
        }
    }
    
    // Fallback to browser language
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Final fallback to configured default language
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    // Update banner text
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.main-privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    // Update modal text
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        const categories = {
            'functional': 'essential',
            'analytics': 'analytics',
            'performance': 'performance',
            'advertising': 'advertising',
            'uncategorized': 'other'
        };
        
        for (const [category, key] of Object.entries(categories)) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[key];
                container.querySelector('p').textContent = lang[`${key}Desc`];
            }
        }
        
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
        
        // Update "See Consent Analytics" link
        const seeAnalyticsLink = modal.querySelector('.see-analytics-link');
        if (seeAnalyticsLink) {
            seeAnalyticsLink.textContent = lang.seeAnalytics;
        }
    }
    
    // Update floating button title
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    // Update analytics dashboard if visible
    const dashboardModal = document.getElementById('cookieAnalyticsModal');
    if (dashboardModal && dashboardModal.style.display === 'flex') {
        if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
            dashboardModal.querySelector('.cookie-analytics-body').innerHTML = generatePasswordPrompt(languageCode);
            setupPasswordPromptEvents();
        } else {
            dashboardModal.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(languageCode);
        }
    }

    // Update analytics dashboard title if visible
    const dashboardTitle = document.querySelector('.cookie-analytics-header h2');
    if (dashboardTitle) {
        dashboardTitle.textContent = lang.dashboardTitle;
    }

    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt h3');
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    const passwordError = document.getElementById('passwordError');
    if (passwordPrompt) passwordPrompt.textContent = lang.passwordPrompt;
    if (passwordSubmit) passwordSubmit.textContent = lang.passwordSubmit;
    if (passwordError && passwordError.textContent) {
        passwordError.textContent = translations[languageCode].passwordIncorrect;
    }
    
    // Store selected language in cookie
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
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



// Function to store query parameters in localStorage
function storeQueryParams() {
    if (!config.queryParamsConfig.enabled) return;

    const urlParams = new URLSearchParams(window.location.search);
    const storedParams = JSON.parse(localStorage.getItem('storedQueryParams') || '{}');
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + config.queryParamsConfig.retentionDays);

    config.queryParamsConfig.paramsToStore.forEach(param => {
        if (urlParams.has(param)) {
            const value = sanitizeParamValue(urlParams.get(param));
            if (value) {
                storedParams[param] = {
                    value: value,
                    expires: expiration.getTime()
                };
            }
        }
    });

    if (Object.keys(storedParams).length > 0) {
        localStorage.setItem('storedQueryParams', JSON.stringify(storedParams));
    }
}

function addStoredParamsToURL() {
    if (!config.queryParamsConfig.enabled || !config.queryParamsConfig.autoRestore) return;

    const storedData = localStorage.getItem('storedQueryParams');
    if (!storedData) return;

    const storedParams = JSON.parse(storedData);
    const currentParams = new URLSearchParams(window.location.search);
    const url = new URL(window.location.href);
    const now = new Date().getTime();

    let hasUpdates = false;

    Object.entries(storedParams).forEach(([key, data]) => {
        // Check if parameter has expired
        if (data.expires && data.expires < now) {
            delete storedParams[key];
            hasUpdates = true;
            return;
        }

        // Only add if not already in URL and value is valid
        if (!currentParams.has(key) && data.value) {
            url.searchParams.set(key, data.value);
            hasUpdates = true;
        }
    });

    if (hasUpdates) {
        // Update localStorage if we removed expired params
        if (Object.keys(storedParams).length > 0) {
            localStorage.setItem('storedQueryParams', JSON.stringify(storedParams));
        } else {
            localStorage.removeItem('storedQueryParams');
        }

        // Only update URL if we actually added params
        if (url.search !== window.location.search) {
            window.history.replaceState(null, '', url.toString());
        }
    }
}




// Add this new function to manually clear stored parameters:
function clearStoredParams() {
    if (!config.queryParamsConfig.manualClear) return;
    
    localStorage.removeItem('storedQueryParams');
    console.log('Stored query parameters cleared');
    
    // Optional: Add UI feedback if you want
    if (typeof window.showAlert === 'function') {
        window.showAlert('Stored URL parameters have been cleared');
    }
}

// Add to your window.cookieConsent exports:
if (typeof window !== 'undefined') {
    window.cookieConsent = {
        // ... existing exports ...
        clearStoredParams: clearStoredParams,
        getStoredParams: () => JSON.parse(localStorage.getItem('storedQueryParams') || '{}')
    };
}




// Generate cookie table with mobile-friendly display
function generateCookieTable(cookies) {
    return `
    <table class="main-cookie-details-table">
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
                <td class="cookie-value-cell">
                    <span class="cookie-value-full" style="display:none;">${cookie.value}</span>
                    <span class="cookie-value-truncated">${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</span>
                    ${cookie.value.length > 20 ? '<button class="toggle-cookie-value" data-state="truncated">Show full</button>' : ''}
                </td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

// Inject all HTML elements into the page
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    
    // Generate cookie tables for each category
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="main-toggle-switch" data-ms-consent="ad_storage">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
             <p class="broadcookiedes">${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="main-cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none">
            <title>Admin Dashboard</title>
            <path d="M4.75,20.75A.25.25,0,0,0,5,20.5v-2a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v2a.25.25,0,0,0,.25.25Z"/>
            <path d="M10.75,20.75A.25.25,0,0,0,11,20.5v-7a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v7a.25.25,0,0,0,.25.25Z"/>
            <path d="M16.75,20.75A.25.25,0,0,0,17,20.5v-5a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v5a.25.25,0,0,0,.25.25Z"/>
            <path d="M22.75,20.75A.25.25,0,0,0,23,20.5V8.5a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v12a.25.25,0,0,0,.25.25Z"/>
            <path d="M3.5,13.5a2,2,0,0,0,2-2,1.981,1.981,0,0,0-.1-.6l3.167-2.64A1.955,1.955,0,0,0,11.011,7.8l2.5.834A2,2,0,0,0,17.5,8.5a1.964,1.964,0,0,0-.231-.912l3.287-3.835A1.994,1.994,0,1,0,19.5,2a1.962,1.962,0,0,0,.093.571L16.13,6.612a1.932,1.932,0,0,0-2.141.593l-2.5-.833A1.995,1.995,0,0,0,7.6,7.1L4.436,9.744A1.975,1.975,0,0,0,3.5,9.5a2,2,0,0,0,0,4Z"/>
            <path d="M23,22H1a1.016,1.016,0,0,0-1,1,1,1,0,0,0,1,1H23a1,1,0,0,0,1-1A1.015,1.015,0,0,0,23,22Z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="main-cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="${config.privacyPolicyUrl}" class="main-privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="all-cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn main-accept-button">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn main-adjust-button">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn main-reject-btn">${lang.reject}</button>
                
                
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
                ${config.analytics.enabled ? `
                <div class="see-analytics-container">
                    <a href="#" class="see-analytics-link">${lang.seeAnalytics}</a>
                </div>` : ''}
                 <div class="modal-buttons-container">
                    <button id="acceptAllSettingsBtn" class="cookie-btn main-accept-button">${lang.accept}</button>
                    <button id="saveSettingsBtn" class="cookie-btn main-save-btn">${lang.save}</button>
                    <button id="rejectAllSettingsBtn" class="cookie-btn main-reject-btn">${lang.reject}</button>
                </div>
            </div>
        </div>
    </div>

// Floating Settings Button
<div id="cookieFloatingButton" class="cookie-settings-button mobile-only" title="${lang.title}">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none">
        <path d="M6 8H8.01V10H6V8Z" fill="currentColor"/>
        <path d="M11 11H13.01V13H11V11Z" fill="currentColor"/>
        <path d="M8 15H10.01V17H8V15Z" fill="currentColor"/>
        <path d="M15 15H17.01V17H15V15Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C12.0366 1 12.0732 1.00018 12.1097 1.00054L13.3208 1.01239L13.08 2.19932C13.0276 2.45721 13 2.72486 13 3C13 4.95769 14.4074 6.58878 16.2659 6.93296L16.9419 7.05815L17.067 7.73414C17.4112 9.59261 19.0423 11 21 11C21.2751 11 21.5428 10.9724 21.8007 10.92L22.9876 10.6792L22.9995 11.8903C22.9998 11.9268 23 11.9634 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.0002 3.0549C6.50018 3.55223 3 7.36736 3 12C3 16.9706 7.02944 21 12 21C16.6326 21 20.4478 17.4998 20.9451 12.9998C18.2609 12.9757 15.9991 11.1899 15.2573 8.74272C12.8101 8.00085 11.0243 5.73912 11.0002 3.0549Z" fill="currentColor"/>
    </svg>
</div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    /* Main Banner Styles */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${config.behavior.bannerPosition === 'left' ? 'left: 20px;' : 'right: 20px;'}
        width: ${config.bannerStyle.width};
        background: ${config.bannerStyle.background};
        border-radius: ${config.bannerStyle.borderRadius};
        box-shadow: ${config.bannerStyle.boxShadow};
        z-index: 9999;
        padding: ${config.bannerStyle.padding};
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.behavior.bannerAnimation.duration}s ${config.behavior.bannerAnimation.easing};
        ${config.bannerStyle.border.enabled ? 
            `border: ${config.bannerStyle.border.width} ${config.bannerStyle.border.style} ${config.bannerStyle.border.color};` : 
            'border: none;'}
        overflow: hidden;
    }


    /* .broadcookiedes {
      font-size: 0px;
    } */



    .cookie-consent-banner.show {
        transform: translateY(0);
        opacity: 1;
        display: block;
    }

    .main-cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: ${config.bannerStyle.title.fontSize};
        color: ${config.bannerStyle.title.color};
        font-weight: ${config.bannerStyle.title.fontWeight};
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .main-cookie-consent-content p {
        margin: 0 0 10px 0;
        font-size: ${config.bannerStyle.description.fontSize};
        color: ${config.bannerStyle.description.color};
        line-height: ${config.bannerStyle.description.lineHeight};
    }

    .main-privacy-policy-link {
        color: ${config.bannerStyle.linkColor};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 8px;
        transition: color 0.2s ease;
    }

    .main-privacy-policy-link:hover {
        color: ${config.bannerStyle.linkHoverColor};
    }

.all-cookie-consent-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
}

    .cookie-btn {
        padding: ${config.buttonStyle.padding};
        border-radius: ${config.buttonStyle.borderRadius};
        cursor: pointer;
        font-weight: ${config.buttonStyle.fontWeight};
        font-size: ${config.buttonStyle.fontSize};
        transition: ${config.buttonStyle.transition};
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .main-adjust-button {
        background-color: ${config.buttonStyle.adjust.background};
        color: ${config.buttonStyle.adjust.color};
        border: ${config.buttonStyle.adjust.border};
    }

    .main-adjust-button:hover {
        background-color: ${config.buttonStyle.adjust.hover.background};
        color: ${config.buttonStyle.adjust.hover.color};
        transform: ${config.buttonStyle.adjust.hover.transform};
        
    }

    .main-reject-btn {
        background-color: ${config.buttonStyle.reject.background};
        color: ${config.buttonStyle.reject.color};
        border: ${config.buttonStyle.reject.border};
    }

    .main-reject-btn:hover {
        background-color: ${config.buttonStyle.reject.hover.background};
        color: ${config.buttonStyle.reject.hover.color};
        transform: ${config.buttonStyle.reject.hover.transform};
        
    }

 .main-accept-button {
    background-color: ${config.buttonStyle.accept.background};
    color: ${config.buttonStyle.accept.color};
    border: ${config.buttonStyle.accept.border};
    
}

.main-accept-button:hover {
    background-color: ${config.buttonStyle.accept.hover.background};
    color: ${config.buttonStyle.accept.hover.color};
    transform: ${config.buttonStyle.accept.hover.transform};
    
}

    .main-save-btn {
        background-color: ${config.buttonStyle.save.background};
        color: ${config.buttonStyle.save.color};
        border: ${config.buttonStyle.save.border};
    }

    .main-save-btn:hover {
        background-color: ${config.buttonStyle.save.hover.background};
        color: ${config.buttonStyle.save.hover.color};
        transform: ${config.buttonStyle.save.hover.transform};
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    }

    /* Modal Footer Buttons */
    .modal-buttons-container {
        display: flex;
        gap: 12px;
        margin-top: 15px;
    }

    .modal-buttons-container .cookie-btn {
        flex: 1;
    }

    /* Language Selector Styles */
    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        background-color: #f8f9fa;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .language-selector select:hover {
        border-color: ${config.bannerStyle.linkColor};
        background-color: #fff;
    }

    .language-selector select:focus {
        outline: none;
        border-color: ${config.bannerStyle.linkColor};
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    /* Settings Modal */
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
        transition: opacity ${config.behavior.modalAnimation.duration}s ${config.behavior.modalAnimation.easing};
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-settings-content {
        background-color: ${config.modalStyle.background};
        margin: 0 auto;
        width: ${config.modalStyle.width};
        max-height: ${config.modalStyle.maxHeight};
        border-radius: ${config.modalStyle.borderRadius};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.behavior.modalAnimation.duration}s ${config.behavior.modalAnimation.easing};
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
        background-color: ${config.modalStyle.header.background};
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: ${config.modalStyle.header.textColor};
        font-size: ${config.modalStyle.header.fontSize};
        font-weight: ${config.modalStyle.header.fontWeight};
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${config.modalStyle.closeButton.color};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: ${config.modalStyle.closeButton.hoverColor};
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: ${config.modalStyle.body.background};
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
        background-color: ${config.categoryStyle.background};
        border-radius: ${config.categoryStyle.borderRadius};
        padding: 20px;
        margin-bottom: 20px;
        border: ${config.categoryStyle.border};
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
        font-size: ${config.categoryStyle.title.fontSize};
        color: ${config.categoryStyle.title.color};
        font-weight: ${config.categoryStyle.title.fontWeight};
    }

    .main-toggle-switch {
        position: relative;
        display: inline-block;
        width: ${config.toggleStyle.size};
        height: ${config.toggleStyle.height};
    }

    .main-toggle-switch input {
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
        background-color: ${config.toggleStyle.inactiveColor};
        transition: .4s;
        border-radius: 34px;
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: ${config.toggleStyle.sliderSize};
        width: ${config.toggleStyle.sliderSize};
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    input:checked + .toggle-slider {
        background-color: ${config.toggleStyle.activeColor};
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
        border-color: ${config.buttonStyle.accept.background};
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

    .main-cookie-details-content {
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

    .main-cookie-details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .main-cookie-details-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: #f0f0f0;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
        color: ${config.bannerStyle.title.color};
    }

    .main-cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${config.bannerStyle.description.color};
    }

    .main-cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .main-cookie-details-table tr:hover {
        background-color: #f5f5f5;
    }

    .main-cookie-details-table code {
        background-color: #f0f0f0;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: ${config.bannerStyle.title.color};
    }

    /* See Analytics Link */
    .see-analytics-container {
        margin-bottom: 15px;
        text-align: center;
    }

    .see-analytics-link {
        color: ${config.bannerStyle.linkColor};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        transition: color 0.2s ease;
        display: none;
    }

    .see-analytics-link:hover {
        color: ${config.bannerStyle.linkHoverColor};
        text-decoration: underline;
    }

    /* Mobile-friendly cookie value display */
    .cookie-value-cell {
        position: relative;
    }

    .cookie-value-full {
        word-break: break-all;
    }

    .toggle-cookie-value {
        background: none;
        border: none;
        color: ${config.bannerStyle.linkColor};
        text-decoration: underline;
        cursor: pointer;
        font-size: 12px;
        padding: 0;
        margin-top: 5px;
        display: block;
    }

    .toggle-cookie-value:hover {
        color: ${config.bannerStyle.linkHoverColor};
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
        ${config.behavior.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: ${config.floatingButtonStyle.size};
        height: ${config.floatingButtonStyle.size};
        background-color: ${config.floatingButtonStyle.background};
        border-radius: ${config.floatingButtonStyle.borderRadius};
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: ${config.floatingButtonStyle.boxShadow};
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: ${config.floatingButtonStyle.border};
    }

    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-settings-button:hover {
        background-color: ${config.floatingButtonStyle.hover.background};
        transform: ${config.floatingButtonStyle.hover.transform};
        box-shadow: ${config.floatingButtonStyle.hover.boxShadow};
    }

    #cookieFloatingButton.cookie-settings-button svg,
    #cookieFloatingButton.cookie-settings-button svg path {
        width: 40px;
        height: 40px;
        fill: ${config.floatingButtonStyle.iconColor} !important;
        stroke: none;
        transition: transform 0.3s ease;
        margin-top: 0px; 
    }
    .cookie-settings-button:hover svg {
        transform: rotate(15deg);
    }

    /* Admin Button */
    .cookie-admin-button {
        position: fixed;
        ${config.behavior.adminButtonPosition === 'left' ? 
          'left: 30px; bottom: 100px;' : 
          'right: 30px; bottom: 100px;'}
        width: ${config.adminButtonStyle.size};
        height: ${config.adminButtonStyle.size};
        background-color: ${config.adminButtonStyle.background};
        border-radius: ${config.adminButtonStyle.borderRadius};
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: ${config.adminButtonStyle.boxShadow};
        z-index: 9997;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: ${config.adminButtonStyle.border};
    }

    .cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-admin-button:hover {
        background-color: ${config.adminButtonStyle.hover.background};
        transform: ${config.adminButtonStyle.hover.transform};
        box-shadow: ${config.adminButtonStyle.hover.boxShadow};
    }

    .cookie-admin-button svg {
        width: 28px;
        height: 28px;
        fill: ${config.adminButtonStyle.iconColor};
        transition: transform 0.3s ease;
    }

    .cookie-admin-button:hover svg {
        transform: rotate(15deg);
    }

    /* Analytics Dashboard */
    .cookie-analytics-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10001;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity ${config.behavior.dashboardAnimation.duration}s ${config.behavior.dashboardAnimation.easing};
    }

    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-analytics-content {
        background-color: ${config.dashboardStyle.background};
        margin: 0 auto;
        width: ${config.dashboardStyle.width};
        max-height: ${config.dashboardStyle.maxHeight};
        border-radius: ${config.dashboardStyle.borderRadius};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.behavior.dashboardAnimation.duration}s ${config.behavior.dashboardAnimation.easing};
        display: flex;
        flex-direction: column;
    }

    .cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }

    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${config.dashboardStyle.header.background};
    }

    .cookie-analytics-header h2 {
        margin: 0;
        color: ${config.dashboardStyle.header.textColor};
        font-size: ${config.dashboardStyle.header.fontSize};
        font-weight: ${config.dashboardStyle.header.fontWeight};
    }

    .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${config.modalStyle.closeButton.color};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-analytics-modal:hover {
        color: ${config.modalStyle.closeButton.hoverColor};
    }

    .cookie-analytics-body {
        padding: 25px 30px;
        background-color: ${config.dashboardStyle.body.background};
        overflow-y: auto;
        flex: 1;
    }

    /* Stats Dashboard */
    .analytics-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .analytics-dashboard h3 {
        color: ${config.bannerStyle.title.color};
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    .stats-summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }

    .stat-card {
        background-color: ${config.dashboardStyle.statCards.background};
                border-radius: ${config.dashboardStyle.statCards.borderRadius};
        padding: 15px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-card.accepted {
        border-top: 4px solid ${config.dashboardStyle.statCards.acceptedColor};
    }

    .stat-card.rejected {
        border-top: 4px solid ${config.dashboardStyle.statCards.rejectedColor};
    }

    .stat-card.custom {
        border-top: 4px solid ${config.dashboardStyle.statCards.customColor};
    }

    .stat-card.total {
        border-top: 4px solid ${config.dashboardStyle.statCards.totalColor};
    }

    .stat-card h4 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: ${config.bannerStyle.description.color};
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${config.bannerStyle.title.color};
        margin-bottom: 5px;
    }

    .stat-percentage {
        font-size: 1rem;
        color: ${config.bannerStyle.description.color};
    }

    .time-based-stats {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .time-stat {
        background-color: ${config.dashboardStyle.statCards.background};
        border-radius: ${config.dashboardStyle.statCards.borderRadius};
        padding: 20px;
    }

    .time-stat h4 {
        margin: 0 0 15px 0;
        font-size: 1.1rem;
        color: ${config.bannerStyle.title.color};
    }

    .stat-bars {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .stat-bar-container {
        margin-bottom: 15px;
    }

    .stat-bar-label {
        font-size: 0.85rem;
        color: ${config.bannerStyle.description.color};
        margin-bottom: 5px;
    }

    .stat-bar {
        height: ${config.dashboardStyle.barChart.height};
        background-color: ${config.dashboardStyle.barChart.background};
        border-radius: ${config.dashboardStyle.barChart.borderRadius};
        overflow: hidden;
        display: flex;
    }

    .stat-bar-segment {
        height: 100%;
    }

    .stat-bar-segment.accepted {
        background-color: ${config.dashboardStyle.barChart.acceptedColor};
    }

    .stat-bar-segment.rejected {
        background-color: ${config.dashboardStyle.barChart.rejectedColor};
    }

    .stat-bar-segment.custom {
        background-color: ${config.dashboardStyle.barChart.customColor};
    }

    .stat-bar-legend {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: ${config.bannerStyle.description.color};
        margin-top: 5px;
    }

    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: ${config.modalStyle.footer.background};
        border-top: ${config.modalStyle.footer.borderTop};
    }

    /* Password Prompt */
    .password-prompt {
        text-align: center;
        padding: 30px;
    }

    .password-prompt h3 {
        color: ${config.bannerStyle.title.color};
        margin-bottom: 20px;
    }

    .password-prompt input {
        padding: 12px 15px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .password-prompt button {
        padding: 12px 25px;
        background-color: ${config.buttonStyle.accept.background};
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .password-prompt button:hover {
        background-color: ${config.buttonStyle.accept.hover.background};
    }

    .error-message {
        color: ${config.buttonStyle.reject.color};
        margin-top: 10px;
        font-size: 14px;
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .cookie-analytics-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .stats-summary {
            grid-template-columns: repeat(2, 1fr);
        }
    }
@media (min-width: 768px) {
    .all-cookie-consent-buttons {
        flex-direction: row;
    }
    .cookie-btn {
        flex: 1;
    }
}
    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: 90%;
            ${config.behavior.bannerPosition === 'left' ? 'left: 5%;' : 'right: 5%;'}
            bottom: 10px;
            padding: 20px;
            flex-direction: column;
        }
        
        .cookie-btn {
            flex: 1;
            min-width: 120px;
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
            padding: 15px 20px;
        }
        
        .modal-buttons-container {
            flex-direction: column;
        }
        
        .modal-buttons-container .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .modal-buttons-container .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .stats-summary {
            grid-template-columns: 1fr;
        }
        
        /* Mobile cookie details */
        .main-cookie-details-table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
        }
        
        .main-cookie-details-table td {
            white-space: normal;
        }
        
        .cookie-value-cell {
            min-width: 120px;
        }
    }






/* floating icon new setup ..................................................................................................................... */


/* Mobile-specific floating button */
@media (max-width: 767px) {
    #cookieFloatingButton.mobile-only {
        bottom: 20px;
        right: 20px;
       /* left: auto; */
    }
}

/* Desktop-specific floating button */
@media (min-width: 768px) {
    #cookieFloatingButton {
        ${config.behavior.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
    }
}







    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 15px;
            flex-direction: column;
            width: calc(100% - 30px);
            ${config.behavior.bannerPosition === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .main-cookie-consent-content h2 {
            font-size: 1.1rem;
        }
        
        .main-cookie-consent-content p {
            font-size: 0.85rem;
            margin-bottom: 15px;
        }
        
        .main-privacy-policy-link {
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
            ${config.behavior.floatingButtonPosition === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            ${config.behavior.adminButtonPosition === 'left' ? 
              'left: 15px; bottom: 80px;' : 
              'right: 15px; bottom: 80px;'}
        }
        
        .cookie-settings-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-admin-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-settings-header h2 {
            font-size: 1.2rem;
        }
        
        .toggle-container h3 {
            font-size: 1rem;
        }
        
        .main-cookie-details-table {
            font-size: 0.8rem;
        }
        
        .main-cookie-details-table th, 
        .main-cookie-details-table td {
            padding: 8px 10px;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

// Check if banner should be shown based on schedule
function shouldShowBanner() {
    if (!config.behavior.bannerSchedule.enabled) {
        return true;
    }

    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.getHours() * 100 + now.getMinutes();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Check if we're using duration-based settings
    if (config.behavior.bannerSchedule.durationDays) {
        const firstVisit = getCookie('first_visit_date');
        if (!firstVisit) {
            setCookie('first_visit_date', currentDate, config.behavior.bannerSchedule.durationDays);
            return true;
        }
        
        const firstVisitDate = new Date(firstVisit);
        const endDate = new Date(firstVisitDate);
        endDate.setDate(endDate.getDate() + config.behavior.bannerSchedule.durationDays);
        
        return now <= endDate;
    }

    if (config.behavior.bannerSchedule.durationMinutes) {
        const sessionStart = getCookie('session_start_time');
        if (!sessionStart) {
            setCookie('session_start_time', now.getTime().toString(), 0.5); // Expires in 30 minutes
            return true;
        }
        
        const sessionStartTime = parseInt(sessionStart);
        const endTime = sessionStartTime + (config.behavior.bannerSchedule.durationMinutes * 60 * 1000);
        
        return now.getTime() <= endTime;
    }

    // Check date range
    const startDate = new Date(config.behavior.bannerSchedule.startDate);
    const endDate = new Date(config.behavior.bannerSchedule.endDate);
    
    if (now < startDate || now > endDate) {
        return false;
    }

    // Check time range
    const startTime = parseInt(config.behavior.bannerSchedule.startTime.split(':')[0]) * 100 + 
                      parseInt(config.behavior.bannerSchedule.startTime.split(':')[1]);
    const endTime = parseInt(config.behavior.bannerSchedule.endTime.split(':')[0]) * 100 + 
                    parseInt(config.behavior.bannerSchedule.endTime.split(':')[1]);

    if (currentTime < startTime || currentTime > endTime) {
        return false;
    }

    // Check days of week
    if (config.behavior.bannerSchedule.daysOfWeek.length > 0 && 
        !config.behavior.bannerSchedule.daysOfWeek.includes(currentDay)) {
        return false;
    }

    return true;
}

// Main initialization function
function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    // Check if banner should be shown based on geo-targeting and schedule
    const geoAllowed = checkGeoTargeting(locationData);
    const bannerShouldBeShown = geoAllowed && shouldShowBanner();
    
    if (!consentGiven && config.behavior.autoShow && bannerShouldBeShown) {
        // Detect if mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Use mobile delay if mobile, otherwise use desktop delay
        const delay = isMobile ? config.behavior.bannerDelayMobile : config.behavior.bannerDelay;
        
        setTimeout(() => {
            showCookieBanner();
        }, delay * 1000);
    } else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    }
    // Explicitly apply the default language from config
    changeLanguage(config.languageConfig.defaultLanguage);
    
    // Set the dropdown to the default language
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.value = config.languageConfig.defaultLanguage;
        // Ensure the change event listener is correctly set up
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
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
    
    // Setup cookie value toggles for mobile
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-cookie-value')) {
            const cell = e.target.closest('.cookie-value-cell');
            const full = cell.querySelector('.cookie-value-full');
            const truncated = cell.querySelector('.cookie-value-truncated');
            
            if (e.target.dataset.state === 'truncated') {
                full.style.display = 'inline';
                truncated.style.display = 'none';
                e.target.textContent = 'Hide full';
                e.target.dataset.state = 'full';
            } else {
                full.style.display = 'none';
                truncated.style.display = 'inline';
                e.target.textContent = 'Show full';
                e.target.dataset.state = 'truncated';
            }
        }
    });
    
    // Setup admin button if enabled
    if (config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    // Setup password prompt events if needed
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
    
    // Setup "See Consent Analytics" link in the modal footer
    const seeAnalyticsLink = document.querySelector('.see-analytics-link');
    if (seeAnalyticsLink) {
        seeAnalyticsLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAnalyticsDashboard();
        });
    }
    
    // Setup timer for durationMinutes if enabled
    if (config.behavior.bannerSchedule.enabled && config.behavior.bannerSchedule.durationMinutes) {
        // Clear any existing timer
        if (bannerTimer) {
            clearTimeout(bannerTimer);
        }
        
        bannerTimer = setTimeout(() => {
            if (!getCookie('cookie_consent')) {
                hideCookieBanner();
            }
        }, config.behavior.bannerSchedule.durationMinutes * 60 * 1000);
    }
}

// Setup password prompt events
function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            const lang = document.getElementById('cookieLanguageSelect') ? 
                document.getElementById('cookieLanguageSelect').value : 'en';
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
                errorMessage.textContent = translations[lang].passwordIncorrect;
            }
        });
    }
}

// Setup all event listeners
function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.querySelector('.close-analytics-modal').addEventListener('click', function() {
        hideAnalyticsDashboard();
    });
    
    document.getElementById('cookieFloatingButton').addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
}

// Show/hide functions with animations
function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, 10);
    bannerShown = true;
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
    bannerShown = false;
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

function showAnalyticsDashboard() {
    const lang = document.getElementById('cookieLanguageSelect') ? 
        document.getElementById('cookieLanguageSelect').value : 'en';
    
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        const modal = document.getElementById('cookieAnalyticsModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        const modal = document.getElementById('cookieAnalyticsModal');
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
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

// Cookie consent functions
function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
        gcs: 'G111', // Explicit GCS signal for all granted
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    // Restore stored query parameters when accepting cookies
    addStoredParamsToURL();
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
    
    // Push dataLayer event for consent acceptance with location data and GCS
    window.dataLayer.push({
        'event': 'cookie_consent_accepted',
        'consent_mode': {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'personalization_storage': 'granted',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
        },
        'gcs': 'G111', // Explicit GCS signal
        'consent_status': 'accepted',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        gcs: 'G100', // Explicit GCS signal for all denied
        categories: {
            functional: false,
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
    
    if (config.analytics.enabled) {
        updateConsentStats('rejected');
    }
    
    // Push dataLayer event for consent rejection with location data and GCS
    window.dataLayer.push({
        'event': 'cookie_consent_rejected',
        'consent_mode': {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'denied',
            'security_storage': 'granted'
        },
        'gcs': 'G100', // Explicit GCS signal
        'consent_status': 'rejected',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}

function saveCustomSettings() {
    const analyticsChecked = document.querySelector('input[data-category="analytics"]').checked;
    const advertisingChecked = document.querySelector('input[data-category="advertising"]').checked;
    
    // Restore stored query parameters when saving custom settings
    addStoredParamsToURL();
    
    let gcsSignal;
    if (analyticsChecked && advertisingChecked) {
        gcsSignal = 'G111'; // Both granted
    } else if (!analyticsChecked && !advertisingChecked) {
        gcsSignal = 'G100'; // Both denied
    } else if (analyticsChecked && !advertisingChecked) {
        gcsSignal = 'G101'; // Analytics granted, ads denied
    } else if (!analyticsChecked && advertisingChecked) {
        gcsSignal = 'G110'; // Ads granted, analytics denied
    }

    const consentData = {
        status: 'custom',
        gcs: gcsSignal,
        categories: {
            functional: true,
            analytics: analyticsChecked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: advertisingChecked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
    
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };
    
    // Fire specific events based on consent choices with GCS signals
    if (analyticsChecked && !advertisingChecked) {
        window.dataLayer.push({
            'event': 'analytics_cookie_accepted',
            'consent_mode': {
                'analytics_storage': 'granted',
                'ad_storage': 'denied'
            },
            'gcs': 'G101', // Explicit GCS signal
            'consent_status': 'custom',
            'consent_categories': consentData.categories,
            'timestamp': new Date().toISOString(),
            'location_data': locationData
        });
    } else if (advertisingChecked && !analyticsChecked) {
        window.dataLayer.push({
            'event': 'marketing_cookie_accepted',
            'consent_mode': {
                'ad_storage': 'granted',
                'analytics_storage': 'denied'
            },
            'gcs': 'G110', // Explicit GCS signal
            'consent_status': 'custom',
            'consent_categories': consentData.categories,
            'timestamp': new Date().toISOString(),
            'location_data': locationData
        });
    } else {
        // For all other cases (both accepted or both rejected)
        window.dataLayer.push({
            'event': 'cookie_consent_custom',
            'consent_mode': consentStates,
            'gcs': gcsSignal, // Explicit GCS signal
            'consent_status': 'custom',
            'consent_categories': consentData.categories,
            'timestamp': new Date().toISOString(),
            'location_data': locationData
        });
    }
}
// Helper functions
function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        }
    });
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    });
}

function loadCookiesAccordingToConsent(consentData) {
   if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

// Update consent mode for both Google and Microsoft UET
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

    // Determine GCS signal based on consent status and categories
    let gcsSignal = 'G100'; // Default to all denied
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111'; // All granted
    } else if (consentData.status === 'custom') {
        if (consentData.categories.analytics && !consentData.categories.advertising) {
            gcsSignal = 'G101'; // Analytics granted, ads denied
        } else if (consentData.categories.advertising && !consentData.categories.analytics) {
            gcsSignal = 'G110'; // Ads granted, analytics denied
        } else if (consentData.categories.analytics && consentData.categories.advertising) {
            gcsSignal = 'G111'; // Both granted (same as accept all)
        } else {
            gcsSignal = 'G100'; // Both denied (same as reject all)
        }
    }

    // Update Google consent with explicit GCS parameter
    gtag('consent', 'update', {
        ...consentStates,
      
    });
    
    // Update Microsoft UET consent if enabled
    if (config.uetConfig.enabled) {
        const uetConsentState = consentData.categories.advertising ? 'granted' : 'denied';
        window.uetq.push('consent', 'update', {
            'ad_storage': uetConsentState
        });
        
        // Push UET consent event to dataLayer with the exact requested format
        window.dataLayer.push({
            'event': 'uet_consent_update',
            'uet_consent': {
                'ad_storage': uetConsentState,
                'status': consentData.status,
                'src': 'update',
                'asc': uetConsentState === 'granted' ? 'G' : 'D',
                'timestamp': new Date().toISOString()
            },
            'location_data': locationData
        });
    }
    
    // Push general consent update to dataLayer with GCS signal
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'location_data': locationData
    });
}

// Cookie management functions
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
// Sanitize URL parameter values to prevent XSS and limit length
function sanitizeParamValue(value) {
    if (typeof value !== 'string') return '';
    // Trim and limit length
    return value.trim().substring(0, config.queryParamsConfig.maxLength)
        .replace(/[<>"'`]/g, ''); // Basic XSS prevention
}

// Load analytics cookies function
function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    // This would typically load advertising scripts like Facebook Pixel, etc.
    // Implementation depends on your specific advertising setup
}

// Load performance cookies function
function loadPerformanceCookies() {
    console.log('Loading performance cookies');
    // This would typically load performance optimization scripts
}

// Main execution flow
document.addEventListener('DOMContentLoaded', async function() {
    // Ensure location data is loaded first
    try {
        if (!sessionStorage.getItem('locationData')) {
            console.log('Fetching fresh location data...');
            locationData = await fetchLocationData(); // This will now push to dataLayer
        } else {
            console.log('Using cached location data');
            locationData = JSON.parse(sessionStorage.getItem('locationData'));
            // Push cached data to dataLayer
            pushGeoDataToDataLayer(locationData);
        }
        
        console.log('Current location data:', locationData);
    } catch (e) {
        console.error('Failed to load location data:', e);






// 1. REPLACE YOUR autoBlockCookies() WITH THIS:
// =============================================
// COMPLETE TRACKING BLOCKING/UNBLOCKING SYSTEM
// =============================================




// ==================== COMPLETE AUTO-BLOCKING SYSTEM ====================
(function() {
    if (!config.autoBlocking.enabled) return;

    // Helper function to delete cookies
    function deleteCookie(name) {
        const hostParts = window.location.hostname.split('.');
        const domains = [
            window.location.hostname,
            '.' + window.location.hostname,
            ...Array.from({length: hostParts.length - 1}, (_, i) => 
                '.' + hostParts.slice(i).join('.'))
        ];
        
        domains.forEach(domain => {
            document.cookie = `${name}=; Path=/; Domain=${domain}; ` +
                             `Expires=Thu, 01 Jan 1970 00:00:01 GMT; ` +
                             `SameSite=Lax; Secure`;
        });
    }

    // Store original cookie functions before any scripts run
    const originalCookieGetter = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie').get;
    const originalCookieSetter = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie').set;
    
    // Block all tracking cookies by default
    Object.defineProperty(document, 'cookie', {
        get: function() {
            return originalCookieGetter.call(document);
        },
        set: function(value) {
            const cookieName = value.split('=')[0].trim();
            
            // Allow essential cookies and consent cookie
            if (cookieName === 'cookie_consent' || isEssentialCookie(cookieName)) {
                return originalCookieSetter.call(document, value);
            }
            
            // Specifically block Microsoft UET cookies
            if (cookieName.startsWith('_uet')) {
                console.log('Blocked UET cookie:', cookieName);
                return false;
            }
            
            console.log('Blocked pre-consent cookie:', cookieName);
            return false;
        }
    });

    function isEssentialCookie(name) {
        const essentialCookies = [
            'AWSALB', 'JSESSIONID', 'PHPSESSID', 
            'wordpress_test_cookie', '__cfduid'
        ];
        return essentialCookies.some(essential => name.startsWith(essential));
    }

    // Block all tracking scripts by default
    window._consentManager = {
        blocked: config.autoBlocking.blockUntilConsent,
        categories: config.autoBlocking.blockCategories,
        originalFunctions: {},
        deleteUetCookies: function() {
            deleteCookie('_uetsid');
            deleteCookie('_uetvid');
            deleteCookie('_uetmsclkid');
        }
    };

    // ========== PLATFORM-SPECIFIC BLOCKING ==========
    
    // Google Analytics/GA4
    if (config.autoBlocking.blockCategories.analytics) {
        window['ga-disable-G-XXXXXX'] = true; // Replace with your GA4 ID
        window['ga'] = window['ga'] || function() {
            console.log('GA blocked - consent not given');
        };
    }
    
    // Google Tag Manager
    if (config.autoBlocking.blockCategories.analytics) {
        window['dataLayer'] = window['dataLayer'] || [];
        _consentManager.originalFunctions.dataLayerPush = window['dataLayer'].push;
        window['dataLayer'].push = function() {
            console.log('GTM blocked - consent not given');
        };
    }
    
    // Facebook Pixel
    if (config.autoBlocking.blockCategories.advertising) {
        window['fbq'] = function() {
            console.log('FB Pixel blocked - consent not given');
        };
        _consentManager.originalFunctions.fbq = window['fbq'];
    }
    
    // Microsoft Clarity/UET - Enhanced blocking
    if (config.autoBlocking.blockCategories.advertising) {
        // Block Clarity
        window['clarity'] = function(){};
        
        // Block UET queue
        window['uetq'] = window['uetq'] || [];
        _consentManager.originalFunctions.uetqPush = window['uetq'].push;
        window['uetq'].push = function() {
            console.log('UET blocked - consent not given');
            return false; // Prevent actual execution
        };
        
        // Block UET script loading
        const originalCreateElement = document.createElement;
        document.createElement = function(tagName) {
            if (tagName.toLowerCase() === 'script') {
                const script = originalCreateElement.call(document, tagName);
                const originalSrcSetter = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src').set;
                
                Object.defineProperty(script, 'src', {
                    set: function(value) {
                        if (value.includes('bat.bing.com')) {
                            console.log('Blocked UET script load');
                            return false;
                        }
                        return originalSrcSetter.call(this, value);
                    }
                });
                return script;
            }
            return originalCreateElement.call(document, tagName);
        };
        
        // Delete any existing UET cookies
        _consentManager.deleteUetCookies();
    }
    
    // TikTok Pixel
    if (config.autoBlocking.blockCategories.advertising) {
        window['ttq'] = {
            track: function() {
                console.log('TikTok Pixel blocked - consent not given');
            }
        };
        _consentManager.originalFunctions.ttq = window['ttq'];
    }
    
    // LinkedIn Insight Tag
    if (config.autoBlocking.blockCategories.advertising) {
        window['lintrk'] = function() {
            return {
                track: function() {
                    console.log('LinkedIn Insight blocked - consent not given');
                }
            };
        };
        _consentManager.originalFunctions.lintrk = window['lintrk'];
    }
    
    // Pinterest Pixel
    if (config.autoBlocking.blockCategories.advertising) {
        window['pintrk'] = function() {
            console.log('Pinterest Pixel blocked - consent not given');
        };
        _consentManager.originalFunctions.pintrk = window['pintrk'];
    }
    
    // Hotjar
    if (config.autoBlocking.blockCategories.analytics) {
        window['hj'] = window['hj'] || function() {};
    }
    
    // ========== CONSENT MANAGEMENT ==========
    window._consentManager.unblock = function(category) {
        if (!this.blocked) return;
        
        // Unblock specific category
        this.categories[category] = false;
        
        // Analytics unblock
        if (category === 'analytics' && config.autoBlocking.blockCategories.analytics) {
            window['ga-disable-G-XXXXXX'] = false;
            window['dataLayer'].push = this.originalFunctions.dataLayerPush;
            
            // Initialize GA if it was attempted to load before consent
            if (window.ga && window.ga.loaded) {
                window.ga('create', 'G-XXXXXX', 'auto');
                window.ga('send', 'pageview');
            }
        }
        
        // Advertising unblock
        if (category === 'advertising' && config.autoBlocking.blockCategories.advertising) {
            window['fbq'] = this.originalFunctions.fbq;
            window['uetq'].push = this.originalFunctions.uetqPush;
            window['ttq'] = this.originalFunctions.ttq;
            window['lintrk'] = this.originalFunctions.lintrk;
            window['pintrk'] = this.originalFunctions.pintrk;
            
            // Initialize UET if configured
            if (config.uetConfig.enabled && config.uetConfig.defaultTagId) {
                const script = document.createElement('script');
                script.src = 'https://bat.bing.com/bat.js';
                script.async = true;
                script.onload = function() {
                    window.uetq.push('set', 'msd', config.uetConfig.msd || window.location.hostname);
                    window.uetq.push('set', 'tagId', config.uetConfig.defaultTagId);
                };
                document.head.appendChild(script);
            }
            
            // Initialize pixels if they were attempted to load
            if (window.fbq && !window.fbq.loaded) {
                window.fbq('init', 'YOUR_PIXEL_ID');
                window.fbq('track', 'PageView');
            }
        }
        
        // Performance unblock
        if (category === 'performance' && config.autoBlocking.blockCategories.performance) {
            // Unblock performance tracking scripts
        }
        
        console.log(`Unblocked ${category} tracking`);
    };
    
    window._consentManager.acceptAll = function() {
        this.blocked = false;
        if (config.autoBlocking.blockCategories.analytics) this.unblock('analytics');
        if (config.autoBlocking.blockCategories.advertising) this.unblock('advertising');
        if (config.autoBlocking.blockCategories.performance) this.unblock('performance');
    };
    
    // Periodically check for and delete UET cookies (in case they slip through)
    setInterval(() => {
        if (window._consentManager.blocked) {
            window._consentManager.deleteUetCookies();
        }
    }, 1000);
})();

// ==================== UPDATED CONSENT FUNCTIONS ====================
function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
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
    
    // Only unblock if configured to do so
    if (config.autoBlocking.enabled && config.autoBlocking.unblockOnAccept) {
        window._consentManager.acceptAll();
    }
    
    updateConsentMode(consentData);
    
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
}

function saveCustomSettings() {
    const analyticsChecked = document.querySelector('input[data-category="analytics"]').checked;
    const advertisingChecked = document.querySelector('input[data-category="advertising"]').checked;
    const performanceChecked = document.querySelector('input[data-category="performance"]').checked;

    const consentData = {
        status: 'custom',
        categories: {
            functional: true,
            analytics: analyticsChecked,
            performance: performanceChecked,
            advertising: advertisingChecked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    
    // Granular unblocking if configured
    if (config.autoBlocking.enabled && config.autoBlocking.unblockOnAccept) {
        if (analyticsChecked) window._consentManager.unblock('analytics');
        if (advertisingChecked) window._consentManager.unblock('advertising');
        if (performanceChecked) window._consentManager.unblock('performance');
    }
    
    updateConsentMode(consentData);
    
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Delete any UET cookies that might have been set before our blocker
    if (config.autoBlocking.enabled && config.autoBlocking.blockCategories.advertising) {
        window._consentManager.deleteUetCookies();
    }

    // Check existing consent
    const consentCookie = getCookie('cookie_consent');
    if (consentCookie && config.autoBlocking.enabled) {
        const consentData = JSON.parse(consentCookie);
        
        if (consentData.status === 'accepted') {
            if (config.autoBlocking.unblockOnAccept) {
                window._consentManager.acceptAll();
            }
        } else if (consentData.status === 'custom') {
            if (config.autoBlocking.unblockOnAccept) {
                if (consentData.categories.analytics) window._consentManager.unblock('analytics');
                if (consentData.categories.advertising) window._consentManager.unblock('advertising');
                if (consentData.categories.performance) window._consentManager.unblock('performance');
            }
        }
    }
});
      









      
    }
    // Store query parameters on page load
    storeQueryParams();
   

 // Check if domain is allowed
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner not shown - domain not allowed');
        return;
    }

    // Load analytics data from storage
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }

    // Set default UET consent
    setDefaultUetConsent();

    // Fetch location data asynchronously
    await fetchLocationData();
    
      // Check geo-targeting before proceeding
    const geoAllowed = checkGeoTargeting(locationData);
    if (!geoAllowed) {
        console.log('Cookie consent banner not shown - geo-targeting restriction');
        return;
    }

    // Scan and categorize existing cookies
    const detectedCookies = scanAndCategorizeCookies();

    // Detect user language
    const userLanguage = detectUserLanguage(locationData);

    // Inject HTML elements
    injectConsentHTML(detectedCookies, userLanguage);

    // Initialize cookie consent
    initializeCookieConsent(detectedCookies, userLanguage);

    // Handle scroll acceptance if enabled
    if (config.behavior.acceptOnScroll) {
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (!getCookie('cookie_consent') && bannerShown) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function() {
                    const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
                    if (scrollPercentage > 30) {
                        acceptAllCookies();
                        hideCookieBanner();
                        if (config.behavior.showFloatingButton) {
                            showFloatingButton();
                        }
                    }
                }, 200);
            }
        });
    }

    // Handle continue button acceptance if enabled
    if (config.behavior.acceptOnContinue) {
        document.addEventListener('click', function(e) {
            if (!getCookie('cookie_consent') && bannerShown && 
                !e.target.closest('#cookieConsentBanner') && 
                !e.target.closest('#cookieSettingsModal')) {
                acceptAllCookies();
                hideCookieBanner();
                if (config.behavior.showFloatingButton) {
                    showFloatingButton();
                }
            }
        });
    }
});

// Export functions for global access if needed
if (typeof window !== 'undefined') {
    window.cookieConsent = {
        showBanner: showCookieBanner,
        hideBanner: hideCookieBanner,
        showSettings: showCookieSettings,
        acceptAll: acceptAllCookies,
        rejectAll: rejectAllCookies,
        saveSettings: saveCustomSettings,
        changeLanguage: changeLanguage,
        showAnalytics: showAnalyticsDashboard,
        config: config
    };
}
