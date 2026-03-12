import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Shield, Share2 } from 'lucide-react';

const steps = [
  { 
    number: "01", 
    title: "Publish", 
    icon: <Upload size={24} />,
    desc: "Upload policies, certifications, subprocessors, and security documentation in one central repository." 
  },
  { 
    number: "02", 
    title: "Control", 
    icon: <Shield size={24} />,
    desc: "Choose what is public and what requires security approval or a signed NDA before access is granted." 
  },
  { 
    number: "03", 
    title: "Share", 
    icon: <Share2 size={24} />,
    desc: "Customers access the information they need through your Trust Center instead of long email threads." 
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Publish. Control. <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">Share.</span></h2>
          <p className="text-lg text-charcoal/60">RegulaTrust simplifies how you prove your security and compliance posture to the world.</p>
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
                ${index < steps.length - 1 ? 'md:border-r' : ''}
                border-b md:border-b-0
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
