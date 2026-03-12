import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Database, Share2 } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const workflowSteps = [
  { icon: <FileText size={24} />, label: "Security Policies" },
  { icon: <Database size={24} />, label: "Compliance Evidence" },
  { icon: <ShieldCheck size={24} />, label: "Trust Center" },
  { icon: <Share2 size={24} />, label: "Customer Confidence" },
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
            Trust Center and Compliance Workspace
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Turn Security, Privacy, and Compliance into a <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">Competitive Advantage</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl"
          >
            RegulaTrust helps modern SaaS teams launch a professional Trust Center, centralize compliance evidence, and handle customer due diligence without the usual spreadsheet chaos.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <WaitlistForm variant="light" />
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
                  className="flex flex-col items-center gap-4 p-6 bg-white border border-grey rounded-lg shadow-sm w-full sm:w-40 md:flex-1 hover:border-lime transition-colors group"
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
          <div className="bg-charcoal rounded-2xl p-4 md:p-8 shadow-2xl border border-white/10 overflow-hidden text-left">
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="ml-4 bg-white/5 rounded px-3 py-1 text-[10px] text-white/40 uppercase tracking-widest font-bold">regulatrust-trust-center_v1.2</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-lime/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Active Trust Portfolio</div>
                    <div className="px-2 py-0.5 bg-lime/10 text-lime text-[10px] font-bold uppercase rounded">Published</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Privacy Policy", status: "Approved" },
                      { label: "Subprocessor Register", status: "Approved" },
                      { label: "Data Processing Agreement", status: "In Review" },
                      { label: "AI Governance Disclosure", status: "Approved" }
                    ].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <FileText size={14} className="text-white/40" />
                          <span className="text-sm font-medium text-white/80">{doc.label}</span>
                        </div>
                        <span className={`text-[10px] font-bold ${doc.status === 'Approved' ? 'text-lime' : 'text-white/30'}`}>{doc.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-lime/30 transition-colors">
                  <div className="text-white/40 text-[10px] uppercase font-bold mb-4 tracking-wider">Due Diligence Activity</div>
                  <div className="space-y-4">
                    {[
                      { org: "Acme Enterprise", type: "Portal Access", time: "2m ago" },
                      { org: "Global Tech Inc", type: "Doc Download", time: "1h ago" },
                      { org: "Stripe", type: "Questionnaire", time: "3h ago" },
                    ].map((activity, i) => (
                      <div key={i} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <div className="text-xs font-bold text-white">{activity.org}</div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] text-white/40 uppercase font-black">{activity.type}</span>
                          <span className="text-[10px] text-white/20">{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-lime p-6 rounded-xl text-charcoal">
                   <div className="flex items-center gap-2 mb-2">
                     <ShieldCheck size={18} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Trust Store Score</span>
                   </div>
                   <div className="text-3xl font-black">98%</div>
                   <p className="text-[10px] mt-2 font-bold opacity-70">EXCELLENT EVIDENCE READINESS</p>
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
