import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Trust Center", desc: "Customer-facing page displaying security posture, compliance status, subprocessors, policies, and reports." },
  { number: "02", title: "Compliance Workspace", desc: "Internal workspace for managing policies, controls, and compliance evidence." },
  { number: "03", title: "Due Diligence Hub", desc: "Structured place to respond to customer security and privacy reviews." },
  { number: "04", title: "Privacy Transparency", desc: "Centralized view of data practices, subprocessors, and privacy documentation." },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">One platform to <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">manage and present trust</span></h2>
          <p className="text-lg text-charcoal/60">We provide the centralized infrastructure your team needs to prove security, privacy, and compliance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 border-grey group hover:bg-off-white transition-all cursor-default
                ${index < steps.length - 1 ? 'lg:border-r' : ''}
                border-b lg:border-b-0
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
