import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, AlertCircle, Clock, Mail, MessageSquare } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Winning enterprise customers requires <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block transform -rotate-1">proof, not promises</span></h2>
          <p className="text-lg text-charcoal/60">Security, privacy, and compliance documentation shouldn't be a bottleneck. Stop the spreadsheet chaos and start proving trust.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before: Messy & Risky */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-grey shadow-sm relative overflow-hidden group text-left"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-400/30"></div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="text-red-500"><XCircle size={20} /></span>
              The "Status Quo" Friction
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: <MessageSquare size={18} />, text: "Sales teams constantly answer repetitive security questionnaires" },
                { icon: <Mail size={18} />, text: "Security and compliance documents are scattered across tools and inboxes" },
                { icon: <Clock size={18} />, text: "Prospective customers request deep due diligence before every purchase" },
                { icon: <AlertCircle size={18} />, text: "Lack of security transparency slows down enterprise procurement cycles" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-charcoal/50">
                  <span className="mt-0.5 text-red-400">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-grey/50">
              <div className="text-[10px] uppercase font-bold text-red-400 tracking-widest mb-2">Deal Velocity Risk</div>
              <div className="w-full h-2 bg-red-100 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-red-400"></div>
              </div>
            </div>
            
            {/* Visual Chaos */}
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <XCircle size={150} />
            </div>
          </motion.div>

          {/* After: Clean & Compliant */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group text-left"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-lime"></div>
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-2">
              <span className="text-lime"><CheckCircle size={20} /></span>
              The RegulaTrust Workflow
            </h3>
            
            <div className="space-y-6">
              {[
                { text: "Automated Trust Center", sub: "A public or gated page to show your security posture" },
                { text: "Compliance Evidence Hub", sub: "Centralize policies and audit artifacts for ISO & SOC2" },
                { text: "Due Diligence Workspace", sub: "Accelerate customer reviews with a unified truth" },
                { text: "Assistive Compliance AI", sub: "AI helps organize evidence and accelerate workflows" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-lime"><CheckCircle size={14} /></span>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{item.text}</p>
                    <p className="text-[11px] text-white/40 uppercase tracking-tighter">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="text-[10px] uppercase font-bold text-lime tracking-widest mb-2">Enterprise Credibility</div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-lime"
                ></motion.div>
              </div>
            </div>

            {/* Bolt Motif */}
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity text-lime">
              <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
