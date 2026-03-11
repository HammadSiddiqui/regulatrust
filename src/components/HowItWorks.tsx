import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Add your website", desc: "Simply enter your domain and let our engine map your tech stack." },
  { number: "02", title: "Run a privacy scan", desc: "We identify every cookie, tracker, and pixel across your entire site." },
  { number: "03", title: "Review trackers", desc: "Categorize cookies automatically and review for any unexpected trackers." },
  { number: "04", title: "Publish your banner", desc: "Deploy a premium, brand-aligned consent banner in one click." },
  { number: "05", title: "Generate policy", desc: "Get a legally-vetted privacy policy tailored to your data processing." },
  { number: "06", title: "Manage logs & DSARs", desc: "Sit back as RegulaTrust logs consent and automates data requests." },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">From website scan to privacy compliance <span className="text-lime">in a few steps</span></h2>
          <p className="text-lg text-charcoal/60">We've automated the complex legal requirements into a simple, developer-friendly workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 border-grey group hover:bg-off-white transition-all cursor-default
                ${index % 3 !== 2 ? 'lg:border-r' : ''}
                ${index < 3 ? 'lg:border-b' : ''}
                ${index % 2 === 0 ? 'md:border-r lg:border-r' : ''}
                border-b md:border-b
              `}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-lime tracking-tighter group-hover:scale-110 transition-transform">{step.number}</span>
                  <div className="w-8 h-8 rounded-full border border-grey flex items-center justify-center group-hover:bg-black group-hover:text-lime transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-charcoal/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bolt Connector Line (Decorative) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-lime/20 -z-10 hidden lg:block rotate-1"></div>
      </div>
      
    </section>
  );
};

export default HowItWorks;
