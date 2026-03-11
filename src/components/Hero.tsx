import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, FileText, Activity, Users, Layout } from 'lucide-react';

const workflowSteps = [
  { icon: <Search size={24} />, label: "Scan Site" },
  { icon: <Shield size={24} />, label: "Detect Cookies" },
  { icon: <Layout size={24} />, label: "Deploy Banner" },
  { icon: <FileText size={24} />, label: "Generate Policy" },
  { icon: <Activity size={24} />, label: "Log Consent" },
  { icon: <Users size={24} />, label: "Handle DSARs" },
];

const Hero: React.FC = () => {
  return (
    <section id="product" className="section-padding overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest bg-black text-lime rounded-full border border-lime/20"
          >
            Compliance-as-Code for Startups
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Website privacy compliance, <span className="text-lime">without the legal chaos</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl"
          >
            RegulaTrust helps startups and agencies scan websites, deploy compliant cookie banners, Launch banners, policies, consent logs, and DSAR workflows from one clean platform. Built for the next generation of trust.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="btn btn-primary px-8 py-4 text-base">Get a Free Privacy Scan</button>
            <button className="btn btn-outline px-8 py-4 text-base">Book a Demo</button>
          </motion.div>
        </div>

        {/* Workflow Graphic */}
        <div className="relative mt-12 mb-24">
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:flex-nowrap items-center relative z-10">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-6 bg-white border border-grey rounded-lg shadow-sm w-full sm:w-40 md:w-full hover:border-lime transition-colors group"
                >
                  <div className="p-3 rounded-full bg-off-white group-hover:bg-lime transition-colors">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { className: "text-black" })}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 group-hover:text-black">{step.label}</span>
                </motion.div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block w-12 h-px bg-grey relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-lime">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200L100 0H300L250 150H450L350 400L400 250H200L300 100H100L0 200Z" fill="black" />
            </svg>
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-charcoal rounded-2xl p-4 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="ml-4 bg-white/5 rounded px-3 py-1 text-[10px] text-white/40 uppercase tracking-widest font-bold">regulatrust-dashboard_v1.0</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-lime/30 transition-colors">
                  <div className="text-white/40 text-[10px] uppercase font-bold mb-2 tracking-wider">Website Scan Score</div>
                  <div className="text-4xl font-bold text-lime">94<span className="text-lg text-white/40">/100</span></div>
                  <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '94%' }} transition={{ duration: 1 }} className="h-full bg-lime"></motion.div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-lime/30 transition-colors">
                  <div className="text-white/40 text-[10px] uppercase font-bold mb-2 tracking-wider">Cookies Detected</div>
                  <div className="text-4xl font-bold text-white">42</div>
                  <div className="text-xs text-lime mt-1 font-bold">+12 since last scan</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-lime/30 transition-colors">
                  <div className="text-white/40 text-[10px] uppercase font-bold mb-2 tracking-wider">Banners Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lime animate-pulse"></div>
                    <span className="text-white font-bold">Active & Compliant</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-lime/30 transition-colors">
                  <div className="text-white/40 text-[10px] uppercase font-bold mb-2 tracking-wider">Consent Logs</div>
                  <div className="text-4xl font-bold text-white">12.4k</div>
                  <div className="text-xs text-white/40 mt-1 uppercase font-bold tracking-widest">Real-time tracking</div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="text-white/40 text-[10px] uppercase font-bold mb-4 tracking-wider">DSAR Requests</div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div>
                        <div className="text-xs font-bold text-white">Request #00{i}</div>
                        <div className="text-[10px] text-white/40 uppercase">Pending Review</div>
                      </div>
                      <div className="px-2 py-0.5 rounded bg-lime/10 text-lime text-[8px] font-black uppercase">Action Required</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Accent */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime/20 blur-3xl -z-10 rounded-full"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-lime/10 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
