import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    tagline: "Launch your first Trust Center.",
    price: "£79",
    desc: "For early-stage SaaS companies that want to present a credible security and privacy posture to customers.",
    features: [
      "Public Trust Center page",
      "Security & privacy overview pages",
      "Subprocessor registry",
      "Basic document hosting",
      "Compliance framework alignment pages",
      "Contact form for security inquiries",
      "Standard support"
    ],
    cta: "Start Building Trust",
    highlight: false
  },
  {
    name: "Growth",
    tagline: "Pass due diligence faster.",
    price: "£249",
    desc: "For growing SaaS teams managing customer security reviews and compliance documentation.",
    features: [
      "Everything in Starter, plus:",
      "Gated document sharing",
      "Security package request workflows",
      "Due diligence workspace",
      "Document approval workflows",
      "Evidence repository",
      "Policy & compliance document management",
      "Expiry and review reminders",
      "Activity logging",
      "Multiple admins"
    ],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    name: "Scale",
    tagline: "Operationalize trust across your organization.",
    price: "£599",
    desc: "For companies selling to enterprise customers and handling frequent security reviews.",
    features: [
      "Everything in Growth, plus:",
      "Custom domain Trust Center",
      "Advanced access controls",
      "Customer-specific document sharing",
      "Advanced audit logs",
      "Compliance framework mapping",
      "Trust Center customization",
      "Priority support",
      "Integration support"
    ],
    cta: "Book a Demo",
    highlight: false
  },
  {
    name: "Enterprise",
    tagline: "Govern trust at scale.",
    price: "Custom",
    desc: "For organizations with complex compliance, security, and governance requirements.",
    features: [
      "SSO / SAML authentication",
      "SCIM provisioning",
      "Advanced permission management",
      "Multi-team governance workflows",
      "Implementation support",
      "Custom integrations",
      "Dedicated support"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Pricing</h2>
          <p className="text-lg text-charcoal/60 mb-2">Simple pricing for teams building trust with their customers.</p>
          <p className="text-base text-charcoal/40">Choose a plan that fits your stage — from launching your first Trust Center to managing enterprise security reviews.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border flex flex-col text-left transition-all relative
                ${plan.highlight 
                  ? 'bg-charcoal border-charcoal text-white shadow-2xl lg:scale-105 z-10' 
                  : 'bg-white border-grey text-charcoal shadow-sm hover:border-lime'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/40' : 'text-charcoal/40'}`}>/ month</span>}
                </div>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${plan.highlight ? 'text-lime' : 'text-charcoal'}`}>{plan.tagline}</p>
                <p className={`text-xs leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-charcoal/50'}`}>{plan.desc}</p>
              </div>
              
              <div className="flex-1 space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0
                      ${plan.highlight ? 'bg-lime text-black' : 'bg-off-white text-black border border-grey'}`}>
                      <Check size={10} />
                    </div>
                    <span className={`text-[11px] font-bold ${plan.highlight ? 'text-white/80' : 'text-charcoal/70'}`}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`btn w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all
                ${plan.highlight 
                  ? 'bg-lime text-black hover:bg-white' 
                  : 'bg-black text-white hover:bg-lime hover:text-black'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-12 text-center">Why teams invest in RegulaTrust</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Shorter security review cycles", desc: "Move through procurement faster with buyer-ready trust packs." },
                    { title: "Reduced manual questionnaire work", desc: "Centralize approved evidence to kill repetitive manual responses." },
                    { title: "Professional Trust Center", desc: "Showcase your security posture with a live, customer-facing portal." },
                    { title: "Centralized compliance documentation", desc: "Keep policies and evidence organized and audit-ready." },
                    { title: "Increased buyer confidence", desc: "Build immediate trust with sophisticated enterprise procurement teams." }
                ].map((outcome, i) => (
                    <div key={i} className="flex flex-col gap-3 p-6 bg-white border border-grey rounded-2xl">
                        <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime">
                            <Target size={16} />
                        </div>
                        <h4 className="font-bold text-sm">{outcome.title}</h4>
                        <p className="text-xs text-charcoal/50 leading-relaxed">{outcome.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
