import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for personal projects and early explorations.",
    features: ["1 Website scan / mo", "Basic cookie banner", "Generic privacy policy", "100 Consent logs / mo"],
    cta: "Start Free",
    featured: false,
    dark: false,
  },
  {
    name: "Standard",
    price: "$49",
    desc: "The go-to plan for growing startups and SaaS teams.",
    features: ["Unlimited website scans", "Custom branded banner", "AI-Powered dynamic policy", "10k Consent logs / mo", "DSAR automation tools"],
    cta: "Get Started",
    featured: true,
    dark: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Advanced power for agencies and large organizations.",
    features: ["Multi-site management", "White-label options", "Unlimited consent logs", "Dedicated legal support", "SLA & SSO integration"],
    cta: "Contact Sales",
    featured: false,
    dark: true,
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-off-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Transparent, <span className="text-lime">startup-friendly pricing</span></h2>
          <p className="text-lg text-charcoal/60">Choose the plan that fits your current stage. Scale as you grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-2xl border transition-all flex flex-col items-start
                ${plan.dark ? 'bg-charcoal border-white/10 text-white' : 'bg-white border-grey text-charcoal shadow-sm'}
                ${plan.featured ? 'border-lime shadow-2xl scale-105 z-10' : ''}
              `}
            >
              {plan.featured && (
                <div className="bg-lime text-black text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">Most Popular</div>
              )}
              <h3 className={`text-xl font-black uppercase tracking-widest mb-2 ${plan.dark ? 'text-lime' : ''}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className={`text-sm ${plan.dark ? 'text-white/40' : 'text-charcoal/40'}`}>/month</span>}
              </div>
              <p className={`text-sm mb-10 leading-relaxed ${plan.dark ? 'text-white/40' : 'text-charcoal/40'}`}>{plan.desc}</p>
              
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-wider">
                    <Check size={14} className={plan.dark ? 'text-lime' : 'text-muted-lime'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`btn w-full py-4 text-xs font-black uppercase tracking-[0.2em]
                ${plan.featured ? 'btn-primary' : plan.dark ? 'bg-white text-black hover:bg-lime' : 'btn-outline'}
              `}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
