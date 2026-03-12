import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Centralize your trust evidence", desc: "Keep policies, subprocessors, DPAs, and SOC2 evidence in one secure vault." },
  { number: "02", title: "Reuse approved answers", desc: "Respond faster to buyer privacy and security reviews using your library of verified responses." },
  { number: "03", title: "Share clear proof faster", desc: "Deliver everything buyers expect in a clean, professional Trust Pack that closes deals." },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">From trust chaos to <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">buyer-ready</span></h2>
          <p className="text-lg text-charcoal/60">We've automated the complex due-diligence workflow into a simple, operational process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 border-grey group hover:bg-off-white transition-all cursor-default
                ${index < 2 ? 'md:border-r' : ''}
                border-b md:border-b-0
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
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-charcoal/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bolt Connector Line (Decorative) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-lime/20 -z-10 hidden md:block rotate-1"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
