import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, CheckCircle, Share2 } from 'lucide-react';

const steps = [
  { 
    number: "01", 
    title: "Track Readiness", 
    icon: <Shield size={24} />,
    desc: "Manage ISO 27001 and GDPR readiness internally through a structured workspace." 
  },
  { 
    number: "02", 
    title: "Map Evidence", 
    icon: <Database size={24} />,
    desc: "Link policies, DPAs, registers, and records directly to framework requirements." 
  },
  { 
    number: "03", 
    title: "Approve Signals", 
    icon: <CheckCircle size={24} />,
    desc: "Review evidence internally and approve which claims are ready for external sharing." 
  },
  { 
    number: "04", 
    title: "Publish Trust", 
    icon: <Share2 size={24} />,
    desc: "Push approved snapshots into your buyer-facing Trust Center with one click." 
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Track. Map. Approve. <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">Publish.</span></h2>
          <p className="text-lg text-charcoal/60">One unified workflow to move from internal readiness to external trust.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-grey rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-black/5">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 group hover:bg-off-white transition-all cursor-default
                ${index < steps.length - 1 ? 'lg:border-r border-grey' : ''}
                ${index % 2 === 0 ? 'md:border-r lg:border-r-0' : ''}
                border-b lg:border-b-0 border-grey
              `}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-lime tracking-tighter group-hover:scale-110 transition-transform">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-off-white border border-grey flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-lime transition-all">
                    {step.icon}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-charcoal/50 leading-relaxed font-medium">{step.desc}</p>
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
