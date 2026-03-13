import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Database, Share2 } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const workflowSteps = [
  { icon: <FileText size={24} />, label: "Security Policies" },
  { icon: <Database size={24} />, label: "Compliance Evidence" },
  { icon: <ShieldCheck size={24} />, label: "Trust Center" },
  { icon: <Share2 size={24} />, label: "Customer Confidence" },
];

const Hero: React.FC = () => {
  return (
    <section id="product" className="section-padding overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest bg-black text-lime rounded-full border border-lime/20"
          >
            The Operating Layer for Enterprise Trust
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Track <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">readiness.</span> <br />
            Publish trust.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl"
          >
            RegulaTrust gives teams a private readiness workspace for ISO 27001 and GDPR, 
            plus a buyer-facing Trust Center to share approved security and compliance proof professionally.
            <span className="block mt-4 text-sm font-medium text-charcoal/50 italic border-l-4 border-lime pl-4">
              Internal readiness workspace → approved evidence → buyer-facing trust center.
            </span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex flex-col sm:flex-row justify-center gap-4"
          >
            <div className="flex-1 max-w-sm">
              <WaitlistForm />
            </div>
            <button className="h-16 px-8 border-2 border-charcoal/10 rounded-2xl flex items-center justify-center text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all whitespace-nowrap">
              Preview Workspace
            </button>
          </motion.div>
        </div>

        {/* Workflow Graphic */}
        <div className="relative mt-12 mb-24">
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:flex-nowrap items-center relative z-10">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-6 bg-white border border-grey rounded-lg shadow-sm w-full sm:w-40 md:flex-1 hover:border-lime transition-colors group"
                >
                  <div className="p-3 rounded-full bg-off-white group-hover:bg-lime transition-colors">
                    {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "text-black" })}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 group-hover:text-black">{step.label}</span>
                </motion.div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block w-12 h-px bg-grey relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-lime">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200L100 0H300L250 150H450L350 400L400 250H200L300 100H100L0 200Z" fill="black" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
