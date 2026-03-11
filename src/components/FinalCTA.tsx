import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-off-white">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-charcoal rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Background Motif */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 500L250 0H750L500 1000H0V500Z" fill="#C1FF72" />
              <path d="M1000 500L750 1000H250L500 0H1000V500Z" fill="#C1FF72" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
              Get privacy compliant in <span className="text-lime">days — not months.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 mb-12 max-w-xl mx-auto">
              Launch banners, policies, consent logs, and DSAR workflows from one clean platform. Join 500+ startups building with trust.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn btn-primary px-10 py-5 text-base shadow-[0_0_30px_rgba(193,255,114,0.3)]">
                Get a Free Privacy Scan
              </button>
              <button className="btn btn-outline text-white border-white/20 hover:bg-white hover:text-black px-10 py-5 text-base">
                Book a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
