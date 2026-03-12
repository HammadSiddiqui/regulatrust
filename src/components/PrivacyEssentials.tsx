import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Globe, Search, ArrowRight } from 'lucide-react';

const supportingFeatures = [
  { icon: <Shield size={24} />, title: "Cookie Consent", desc: "Premium, brand-aligned consent banners with granular tracking control." },
  { icon: <FileText size={24} />, title: "Policy Generation", desc: "AI-powered creation of dynamic privacy policies and terms of service." },
  { icon: <Search size={24} />, title: "Cookie Scanning", desc: "Automated detection and categorization of active trackers and pixels." },
  { icon: <Globe size={24} />, title: "DSAR Intake", desc: "Unified workflow for handling data subject access and deletion requests." },
];

const PrivacyEssentials: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-charcoal">Also includes <span className="text-charcoal/40">privacy essentials</span></h2>
            <p className="text-base text-charcoal/60 leading-relaxed">Everything you need to maintain standard compliance on your primary marketing and product interfaces.</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal hover:text-lime transition-colors">
            Explore All Features
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {supportingFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-off-white border border-grey rounded-2xl hover:border-lime transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 border border-grey group-hover:bg-black group-hover:text-lime group-hover:border-black transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-charcoal">{feature.title}</h3>
              <p className="text-sm text-charcoal/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyEssentials;
