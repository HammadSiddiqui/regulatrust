import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding bg-black text-white relative overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-lime rounded-3xl flex items-center justify-center mb-10 rotate-6 shadow-[0_0_50px_rgba(193,255,114,0.3)]"
        >
          <ShieldCheck size={40} className="text-black" />
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white max-w-3xl leading-tight">
          Trust shouldn't slow down <span className="text-lime">your sales</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">
          Launch a professional trust center, centralize your compliance evidence, and move through customer due diligence faster.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="btn btn-primary px-10 py-5 text-base shadow-[0_10px_40px_rgba(193,255,114,0.3)]">Book a Demo</button>
          <button className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-black px-10 py-5 text-base flex items-center justify-center gap-2">
            View Trust Center
            <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="mt-16 flex items-center gap-6 opacity-30 grayscale pointer-events-none">
           <Zap size={24} className="text-lime" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Trust Center and Compliance Workspace</span>
           <Zap size={24} className="text-lime" />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-lime/10 blur-[150px] -z-10 rounded-full"></div>
    </section>
  );
};

export default FinalCTA;
