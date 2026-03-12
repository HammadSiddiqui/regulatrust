import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Target } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    desc: "For lean teams getting ready for their first enterprise deals.",
    features: [
      "Trust Evidence Vault",
      "Core Policy Library",
      "Public Trust Center",
      "Cookie Consent Essentials"
    ],
    cta: "Talk to Us",
    highlight: false
  },
  {
    name: "Growth",
    desc: "For scaling B2B SaaS teams under regular buyer scrutiny.",
    features: [
      "Questionnaire Copilot",
      "Subprocessor Register",
      "DPA Vault & Mapping",
      "AI Governance Summaries",
      "Continuous Monitoring"
    ],
    cta: "Book a Demo",
    highlight: true
  },
  {
    name: "Scale",
    desc: "For mature organizations managing high-volume enterprise due diligence.",
    features: [
      "Privacy Ops Workspace",
      "Advanced Assessment Flows",
      "Custom Approval Chains",
      "Full API Access",
      "Dedicated Trust Partner"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-off-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Enterprise readiness that <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block transform rotate-1">scales with you</span></h2>
          <p className="text-lg text-charcoal/60">No hidden tiers or complex per-seat pricing. Just the trust-readiness your team needs to close deals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-3xl border flex flex-col text-left transition-all
                ${plan.highlight 
                  ? 'bg-charcoal border-charcoal text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white border-grey text-charcoal shadow-sm hover:border-lime'}`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/40' : 'text-charcoal/50'}`}>{plan.desc}</p>
              </div>
              
              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center
                      ${plan.highlight ? 'bg-lime/20 text-lime' : 'bg-off-white text-black border border-grey'}`}>
                      <Check size={12} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${plan.highlight ? 'text-white/80' : 'text-charcoal/70'}`}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`btn w-full py-4 text-sm font-black uppercase tracking-[0.2em] transition-all
                ${plan.highlight 
                  ? 'bg-lime text-black hover:bg-white' 
                  : 'bg-black text-white hover:bg-lime hover:text-black'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal/30 mb-4">Trusted by modern B2B teams</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-[0.15] grayscale">
                 <div className="flex items-center gap-2 font-black text-xl italic"><Shield size={20} /> TRUSTED</div>
                 <div className="flex items-center gap-2 font-black text-xl italic"><Zap size={20} /> GROWTECH</div>
                 <div className="flex items-center gap-2 font-black text-xl italic"><Target size={20} /> PRECISE</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
