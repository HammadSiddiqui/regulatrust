import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { title: "Rising Expectations", desc: "Users are more privacy-aware than ever. Transparent compliance builds defensive brand equity." },
  { title: "Standard of Care", desc: "Small teams are now expected to meet the same compliance standards as global enterprises." },
  { title: "Efficiency Gap", desc: "Manual compliance wastes hundreds of hours. Automation is the only way to scale safely." },
];

const WhyNow: React.FC = () => {
  return (
    <section className="section-padding bg-black text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter text-white">
              Privacy compliance is <span className="text-lime">no longer optional.</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-lg">
              The regulatory landscape is shifting. Don't let compliance be the bottleneck that slows down your next big deployment.
            </p>
            <div className="flex gap-4">
              <div className="w-16 h-[2px] bg-lime mt-4"></div>
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-lime">Editorial Perspective</div>
            </div>
          </motion.div>

          <div className="space-y-12 relative">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-default"
              >
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-lime transition-colors">{reason.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-md">{reason.desc}</p>
              </motion.div>
            ))}
            
            {/* Bolt background decoration */}
            <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
