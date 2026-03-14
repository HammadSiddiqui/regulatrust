import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck } from 'lucide-react';

const InternalWorkspaceMockup: React.FC = () => {
  return (
    <section className="section-padding bg-off-white overflow-hidden py-0 pb-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-charcoal rounded-2xl p-4 md:p-8 shadow-2xl border border-white/10 overflow-hidden text-left">
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

export default InternalWorkspaceMockup;
