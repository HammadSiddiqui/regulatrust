import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Activity, Monitor, Layers, Globe, Zap } from 'lucide-react';

const features = [
  { id: 'scanner', title: 'Scanner Results', icon: <Monitor size={20} />, description: 'Real-time detection of trackers, cookies, and fingerprinting scripts.' },
  { id: 'banner', title: 'Banner Settings', icon: <Layers size={20} />, description: 'Customizable, high-converting consent banners with deep branding control.' },
  { id: 'policy', title: 'Policy Generator', icon: <FileText size={20} />, description: 'AI-powered creation of dynamic privacy policies and TOS.' },
  { id: 'dsar', title: 'DSAR Queue', icon: <Globe size={20} />, description: 'Automated workflow for handling data subject access requests.' },
  { id: 'audit', title: 'Audit / Logs', icon: <Activity size={20} />, description: 'Immutable consent logs for regulatory proof and transparency.' },
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section id="features" className="section-padding bg-off-white">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need for <span className="text-lime">website privacy ops</span></h2>
          <p className="text-lg text-charcoal/60">A cohesive platform that handles the heavy lifting of compliance so your team can focus on growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Tabs List */}
          <div className="lg:col-span-4 space-y-2">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`w-full text-left p-6 rounded-xl transition-all flex items-center gap-4 group border
                  ${activeTab === feature.id 
                    ? 'bg-black border-black text-white shadow-xl translate-x-2' 
                    : 'bg-white border-grey text-charcoal hover:border-lime hover:bg-white'}`}
              >
                <div className={`p-2 rounded-lg transition-colors
                  ${activeTab === feature.id ? 'bg-lime text-black' : 'bg-off-white text-charcoal/40 group-hover:bg-lime/20 group-hover:text-black'}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-sm tracking-tight ${activeTab === feature.id ? 'text-white' : 'text-black'}`}>{feature.title}</h3>
                  {activeTab === feature.id && (
                    <motion.p 
                      layoutId="desc"
                      className="text-[11px] text-white/40 mt-1 leading-relaxed uppercase tracking-tighter"
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content Display (Mockup) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-charcoal rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[16/10] relative"
              >
                <div className="absolute top-0 left-0 w-full p-4 border-b border-white/5 flex items-center justify-between bg-black/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  </div>
                  <div className="text-[10px] text-white/20 uppercase font-black tracking-widest">{activeTab}.regulatrust.cloud</div>
                  <div className="w-4 h-4 text-lime opacity-30"><Zap size={16} /></div>
                </div>

                <div className="p-8 h-full flex items-center justify-center">
                  {/* Styled Mockup for each tab */}
                  <div className="w-full max-w-lg space-y-6">
                    {activeTab === 'scanner' && (
                      <div className="space-y-4">
                        <div className="text-lime font-black text-xs uppercase tracking-[0.2em] mb-4">Live Discovery Scan</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded bg-lime/20 flex items-center justify-center text-lime font-bold">T</div>
                              <div>
                                <div className="text-white text-sm font-bold">Tracker_{i}0{i}</div>
                                <div className="text-[10px] text-white/40 uppercase">Advertising / Analytics</div>
                              </div>
                            </div>
                            <div className="text-[10px] px-2 py-1 bg-white/10 rounded text-white/60">JS Script</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeTab === 'banner' && (
                      <div className="flex flex-col items-center">
                        <div className="w-full bg-white/5 rounded-xl p-6 border border-white/10 border-dashed mb-6">
                          <div className="flex justify-between mb-4">
                            <div className="w-24 h-4 bg-white/10 rounded"></div>
                            <div className="w-4 h-4 bg-lime rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-3 bg-white/10 rounded"></div>
                            <div className="w-4/5 h-3 bg-white/10 rounded"></div>
                          </div>
                          <div className="flex gap-2 mt-6">
                            <div className="flex-1 h-8 bg-lime rounded"></div>
                            <div className="flex-1 h-8 bg-white/10 rounded"></div>
                          </div>
                        </div>
                        <p className="text-white/40 text-xs text-center">Interactive Banner Preview Customizer</p>
                      </div>
                    )}
                    {/* Simplified others for brevity */}
                    {['policy', 'dsar', 'audit'].includes(activeTab) && (
                      <div className="space-y-4">
                        <div className="h-4 w-32 bg-white/10 rounded mb-8"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                          <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                          <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                          <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
