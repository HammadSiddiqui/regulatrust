import React from 'react';
import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
