import posthog from 'posthog-js';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const COOKIE_STORAGE_KEY = 'regulatrust_cookie_consent';

/**
 * Utility to manage the loading of non-essential third-party scripts.
 * Ensures UK GDPR/PECR compliance by blocking scripts until explicit consent is given.
 */
class CookieManager {
  private static injectedScripts: Set<string> = new Set();
  private static isPostHogInitialized = false;

  /**
   * Initializes enabled cookie types based on stored preferences.
   * This should be called on app mount and whenever preferences are updated.
   */
  public static initializeCookies(): void {
    const savedConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!savedConsent) return;

    try {
      const prefs: CookiePreferences = JSON.parse(savedConsent);
      
      if (prefs.analytics) {
        this.loadAnalytics();
      }
      
      if (prefs.marketing) {
        this.loadMarketing();
      }
    } catch (e) {
      console.error('Failed to parse cookie preferences', e);
    }
  }

  /**
   * Loads Google Analytics and PostHog scripts dynamically.
   * Replaces the static script tag that would normally be in index.html.
   */
  private static loadAnalytics(): void {
    const scriptId = 'analytics-suite';
    if (this.injectedScripts.has(scriptId)) return;

    console.log('🍪 CookieManager: Loading Analytics (GA & PostHog)...');
    
    // 1. PostHog Initialization
    const phKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
    const phHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

    if (phKey && phHost && !this.isPostHogInitialized) {
      posthog.init(phKey, {
        api_host: phHost,
        person_profiles: 'always',
        capture_pageview: true,
      });
      this.isPostHogInitialized = true;
      console.log('🦔 CookieManager: PostHog initialized');
    }

    // 2. Google Analytics
    const gaId = 'G-MOCK-ID'; 
    
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(script2);

    this.injectedScripts.add(scriptId);
  }

  /**
   * Loads Marketing pixels/scripts dynamically.
   */
  private static loadMarketing(): void {
    const scriptId = 'marketing-pixel';
    if (this.injectedScripts.has(scriptId)) return;

    console.log('🍪 CookieManager: Loading Marketing...');
    
    // Example: Facebook Pixel or LinkedIn Insight
    const script = document.createElement('script');
    script.innerHTML = `
      console.log('Marketing pixel initialized');
    `;
    document.head.appendChild(script);

    this.injectedScripts.add(scriptId);
  }
}

export default CookieManager;
