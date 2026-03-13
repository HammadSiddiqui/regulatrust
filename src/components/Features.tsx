import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ClipboardCheck, ArrowUpRight, Zap, Target, Shield } from 'lucide-react';

const strategicPillars = [
  { 
    id: 'readiness', 
    title: 'Readiness Ops', 
    icon: <Shield size={20} />, 
    description: 'The internal workspace where your team manages readiness, maps evidence, and prepares for audits.',
    points: ['ISO 27001 readiness', 'GDPR maturity tracking', 'Evidence mapping', 'Gap identification']
  },
  { 
    id: 'records', 
    title: 'Trust Records', 
    icon: <Database size={20} />, 
    description: 'Maintain live registries of your subprocessors and security FAQs to demonstrate ongoing maturity.',
    points: ['Live subprocessor list', 'Security & Privacy FAQs', 'Vendor risk records', 'Audit breadcrumbs']
  },
  { 
    id: 'sharing', 
    title: 'Secure Sharing', 
    icon: <ClipboardCheck size={20} />, 
    description: 'Professional external interface to share approved trust signals and gated documents with buyers.',
    points: ['Gated document access', 'NDA workflows', 'Buyer download logs', 'Review cycle tracking']
  },
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(strategicPillars[0].id);

  return (
    <section id="features" className="section-padding bg-off-white">
      <div className="container">
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything customers ask for. <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">In one place.</span></h2>
          <p className="text-lg text-charcoal/60">RegulaTrust centralizes your trust posture so you can respond to requests faster and close deals with confidence.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-lime text-[10px] font-bold uppercase tracking-widest border border-lime/20">
             <Shield size={10} />
             Sensitive documents can be gated and shared securely
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Pillar List */}
          <div className="lg:col-span-4 space-y-2">
            {strategicPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`w-full text-left p-6 rounded-xl transition-all flex items-center gap-4 group border
                  ${activeTab === pillar.id 
                    ? 'bg-black border-black text-white shadow-xl translate-x-2' 
                    : 'bg-white border-grey text-charcoal hover:border-lime hover:bg-white'}`}
              >
                <div className={`p-2 rounded-lg transition-colors
                  ${activeTab === pillar.id ? 'bg-lime text-black' : 'bg-off-white text-charcoal/40 group-hover:bg-lime/20 group-hover:text-black'}`}>
                  {pillar.icon}
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-sm tracking-tight ${activeTab === pillar.id ? 'text-white' : 'text-black'}`}>{pillar.title}</h3>
                  {activeTab === pillar.id && (
                    <motion.p 
                      layoutId="desc-pillar"
                      className="text-[11px] text-white/40 mt-1 leading-relaxed uppercase tracking-tighter font-bold"
                    >
                      {pillar.description}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Pillar Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-charcoal rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[16/10] relative text-left"
              >
                <div className="absolute top-0 left-0 w-full p-4 border-b border-white/5 flex items-center justify-between bg-black/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  </div>
                  <div className="text-[10px] text-white/20 uppercase font-black tracking-widest">{activeTab}.regulatrust.cloud</div>
                  <div className="w-4 h-4 text-lime opacity-30"><ArrowUpRight size={16} /></div>
                </div>

                <div className="p-12 h-full flex flex-col justify-center">
                  <div className="max-w-md space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-[10px] font-bold uppercase tracking-widest mb-4 border border-lime/20">
                           <Zap size={10} />
                           Core Pillar
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                           {strategicPillars.find(p => p.id === activeTab)?.title}
                        </h3>
                        <p className="text-white/60 text-base leading-relaxed">
                           {strategicPillars.find(p => p.id === activeTab)?.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {strategicPillars.find(p => p.id === activeTab)?.points.map((point, idx) => (
                         <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                               <Target size={10} className="text-lime" />
                            </div>
                            <span className="text-xs text-white/80 font-medium">{point}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-lime/5 blur-3xl rounded-full"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
