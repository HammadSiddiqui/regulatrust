import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck } from 'lucide-react';

const audienceCards = [
  {
    icon: <Building2 className="text-black" />,
    title: "SaaS Startups",
    desc: "Speed up enterprise procurement by centralizing trust evidence and launching a professional Trust Center in minutes.",
    benefits: ["Enterprise Ready", "Sales Velocity", "Security Transparency"]
  },
  {
    icon: <ShieldCheck className="text-black" />,
    title: "Regulated Vendors",
    desc: "Built for Fintech, Healthtech, and HRtech teams who face deep security scrutiny from regulated enterprise buyers.",
    benefits: ["GDPR/HIPAA Ready", "Subprocessor Transparency", "Audit Records"]
  },
  {
    icon: <ShieldCheck className="text-black" />,
    title: "Audit Candidates",
    desc: "Perfect for companies preparing for SOC 2 or ISO 27001 who need to centralize their evidence and policy governance.",
    benefits: ["SOC 2 Prep", "ISO 27001 Readiness", "Evidence Repository"]
  }
];

const Audience: React.FC = () => {
  return (
    <section id="audience" className="section-padding bg-black text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Who <span className="text-lime">RegulaTrust</span> is for</h2>
          <p className="text-lg text-white/50">Purpose-built for organizations that need to prove their security, privacy, and compliance posture to win.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceCards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-charcoal border border-white/10 p-10 rounded-2xl group hover:border-lime transition-all text-left"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 group-hover:bg-lime transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-sm text-white/40 mb-8 leading-relaxed">{card.desc}</p>
              
              <ul className="space-y-3">
                {card.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-lime/80">
                    <div className="w-1.5 h-1.5 bg-lime rounded-full"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-left">
            <p className="text-xs text-white/30 font-bold uppercase tracking-widest">
                Note: RegulaTrust is built for B2B security and privacy operations. Not for personal blogs or basic brochure websites.
            </p>
        </div>
      </div>
      
      {/* Decorative Bolt Motif Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L200 100L400 0L600 100L800 0L1000 100M0 200L200 300L400 200L600 300L800 200L1000 300M0 400L200 500L400 400L600 500L800 400L1000 500" stroke="#C1FF72" strokeWidth="2" />
          <path d="M100 0L0 200L100 400M300 0L200 200L300 400M500 0L400 200L500 400M700 0L600 200L700 400" stroke="#C1FF72" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
};

export default Audience;
