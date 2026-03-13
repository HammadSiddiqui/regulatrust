import React, { useState, useEffect } from 'react';
import { Shield, X, Settings } from 'lucide-react';
import CookieManager, { type CookiePreferences, COOKIE_STORAGE_KEY } from '../lib/CookieManager';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!savedConsent) {
      // Delay visibility for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // Load scripts based on existing consent
      CookieManager.initializeCookies();
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = { essential: true, analytics: false, marketing: false };
    saveConsent(allRejected);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    
    // Trigger script loading after consent
    CookieManager.initializeCookies();
    
    console.log('Saved cookie preferences:', prefs);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white border border-black shadow-2xl rounded-sm p-6 md:p-8">
        {!showSettings ? (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-lime p-3 rounded-sm border border-black shrink-0">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight text-black">Cookie Consent</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed font-medium">
                  We use cookies for UK GDPR/PECR compliance and to improve your experience. Non-essential cookies are blocked by default until you provide explicit consent. Review our <a href="#" className="underline hover:text-black">Privacy Policy</a> for details.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleRejectAll}
                className="btn btn-primary w-full !py-3 !text-[10px]"
              >
                Reject All
              </button>
              <button 
                onClick={handleAcceptAll}
                className="btn btn-secondary w-full !py-3 !text-[10px]"
              >
                Accept All
              </button>
              <button 
                onClick={() => setShowSettings(true)}
                className="col-span-2 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-charcoal/40 hover:text-black transition-colors pt-2"
              >
                <Settings className="w-3 h-3" />
                Manage Settings
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-grey">
              <h3 className="text-sm font-black uppercase tracking-widest text-black">Manage Preferences</h3>
              <button onClick={() => setShowSettings(false)} className="text-charcoal/40 hover:text-black">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-black">Essential</span>
                    <span className="text-[8px] font-black uppercase bg-grey px-1.5 py-0.5 rounded-[2px]">Required</span>
                  </div>
                  <p className="text-[11px] text-charcoal/60 leading-tight">Necessary for the website to function and cannot be switched off.</p>
                </div>
                <div className="h-5 w-10 bg-black rounded-full relative p-1 opacity-50 cursor-not-allowed">
                  <div className="h-3 w-3 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-black">Analytics</span>
                  <p className="text-[11px] text-charcoal/60 leading-tight">Help us understand how visitors interact with the site by collecting anonymous information.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`h-5 w-10 rounded-full relative p-1 transition-colors duration-200 ${preferences.analytics ? 'bg-lime border border-black' : 'bg-grey border border-transparent'}`}
                >
                  <div className={`h-3 w-3 rounded-full absolute transition-all duration-200 ${preferences.analytics ? 'bg-black right-1' : 'bg-charcoal/40 left-1'}`}></div>
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-black">Marketing</span>
                  <p className="text-[11px] text-charcoal/60 leading-tight">Used to track visitors across websites to display relevant and engaging ads.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`h-5 w-10 rounded-full relative p-1 transition-colors duration-200 ${preferences.marketing ? 'bg-lime border border-black' : 'bg-grey border border-transparent'}`}
                >
                  <div className={`h-3 w-3 rounded-full absolute transition-all duration-200 ${preferences.marketing ? 'bg-black right-1' : 'bg-charcoal/40 left-1'}`}></div>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-grey grid grid-cols-2 gap-3">
              <button 
                onClick={() => setShowSettings(false)}
                className="btn btn-outline w-full !py-3 !text-[10px]"
              >
                Back
              </button>
              <button 
                onClick={handleSavePreferences}
                className="btn btn-secondary w-full !py-3 !text-[10px]"
              >
                Save Choice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
