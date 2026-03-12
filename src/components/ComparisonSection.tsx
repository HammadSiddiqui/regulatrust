import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Mail, FileWarning, Paperclip, MessageSquare, Layout, Shield, UserCheck, Zap } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            From scattered security requests to <span className="bg-black text-lime px-3 py-1 rounded-lg inline-block">one structured portal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Decorative Divider Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-grey" />

          {/* Left Column: Without RegulaTrust */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <XCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Without RegulaTrust</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-grey shadow-sm opacity-60">
                <div className="flex items-center gap-3 mb-4 text-charcoal/40">
                  <Mail size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Incoming Email Thread</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-off-white rounded-lg text-xs font-medium text-charcoal/60 italic">
                    "Can you send your latest SOC 2 report?"
                  </div>
                  <div className="p-3 bg-off-white rounded-lg text-xs font-medium text-charcoal/60 italic">
                    "Who are your current subprocessors?"
                  </div>
                  <div className="p-3 bg-off-white rounded-lg text-xs font-medium text-charcoal/60 italic">
                    "Please complete this 200-item security review."
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-grey shadow-sm opacity-60">
                <div className="flex items-center gap-3 mb-4 text-charcoal/40">
                  <Paperclip size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Attachments</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-2 bg-off-white rounded-lg text-[10px] font-bold text-charcoal/40 flex items-center gap-2">
                    <FileWarning size={14} /> spreadsheet_v2_final.xlsx
                  </div>
                  <div className="px-3 py-2 bg-off-white rounded-lg text-[10px] font-bold text-charcoal/40 flex items-center gap-2">
                    <FileWarning size={14} /> dpa_unsigned.pdf
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-red-600/60 uppercase tracking-widest pl-2">
                <MessageSquare size={14} /> Scattered security requests
              </div>
            </div>
          </motion.div>

          {/* Right Column: With RegulaTrust */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-lime rounded-full flex items-center justify-center text-black">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">With RegulaTrust</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-black p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Accent Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-lime/10 blur-3xl rounded-full group-hover:bg-lime/20 transition-all" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-lime rounded-lg">
                    <Layout size={18} className="text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-lime leading-none mb-1">Central Portal</div>
                    <div className="text-white font-bold leading-none">Trust Center v1.0</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <Shield size={16} className="text-lime" />
                    <span className="text-xs font-semibold text-white/80">Self-serve SOC 2 access</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <UserCheck size={16} className="text-lime" />
                    <span className="text-xs font-semibold text-white/80">Automated subprocessor list</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <Zap size={16} className="text-lime" />
                    <span className="text-xs font-semibold text-white/80">90% fewer manual questionnaires</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-lime uppercase tracking-widest pl-2">
                <Layout size={14} /> One central structured home
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-charcoal/50 font-bold uppercase tracking-[0.2em] text-sm">
            Security reviews should not require endless emails and attachments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
