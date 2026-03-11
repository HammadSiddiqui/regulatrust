import React from 'react';

const TrustStrip: React.FC = () => {
  const badges = [
    "GDPR-ready workflows",
    "Consent logs",
    "DSAR automation",
    "Multi-site support",
    "Startup-friendly pricing",
  ];

  return (
    <div className="w-full bg-charcoal py-8 border-y border-white/5">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-lime rotate-45"></div>
              <span className="text-white text-xs font-bold uppercase tracking-widest">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
