import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Users, HelpCircle, Key, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

const TrustMockup: React.FC = () => {
  const sections = [
    { icon: <Shield size={18} />, label: "Security Overview" },
    { icon: <CheckCircle2 size={18} />, label: "Compliance" },
    { icon: <FileText size={18} />, label: "Policies" },
    { icon: <Users size={18} />, label: "Subprocessors" },
    { icon: <HelpCircle size={18} />, label: "FAQs" },
    { icon: <Key size={18} />, label: "Request Access" },
  ];

  const documents = [
    { title: "SOC 2 Type II Report", type: "Gated", icon: <Lock size={14} />, status: "Verified" },
    { title: "Privacy Policy", type: "Public", icon: <Eye size={14} />, status: "Published" },
    { title: "Subprocessor List", type: "Public", icon: <Eye size={14} />, status: "Published" },
    { title: "Penetration Test Summary", type: "Request Access", icon: <EyeOff size={14} />, status: "Gated" },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            See your <span className="text-lime bg-black px-3 py-1 rounded-lg">Trust Center</span> in action
          </h2>
          <p className="text-lg text-charcoal/60">
            A single place for customers to review your security, privacy, and compliance posture.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Portal Container */}
          <div className="bg-off-white rounded-3xl border border-grey shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] md:h-[600px]">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-white border-r border-grey p-6 flex flex-col shrink-0">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Shield size={18} className="text-lime" />
                </div>
                <span className="font-bold tracking-tight">Trust Portal</span>
              </div>
              
              <nav className="space-y-1 flex-1">
                {sections.map((section, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer
                      ${i === 0 ? 'bg-lime text-black' : 'text-charcoal/40 hover:bg-off-white hover:text-black'}`}
                  >
                    {section.icon}
                    {section.label}
                  </div>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-black rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-lime">Live Status</span>
                </div>
                <div className="text-xs font-bold">All Systems Optimal</div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-off-white relative">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Security Overview</h3>
                  <p className="text-sm text-charcoal/40 font-medium">Last updated 2 days ago</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">SOC 2</div>
                  <div className="px-3 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">ISO 27001</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-5 rounded-2xl border border-grey shadow-sm hover:border-lime transition-all group cursor-default"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-off-white rounded-xl group-hover:bg-lime transition-colors">
                        <FileText size={20} />
                      </div>
                      <div className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest
                        ${doc.type === 'Public' ? 'bg-green-100 text-green-700' : 
                          doc.type === 'Gated' ? 'bg-amber-100 text-amber-700' : 
                          'bg-red-100 text-red-700'}`}
                      >
                        {doc.type}
                      </div>
                    </div>
                    <h4 className="font-bold text-sm mb-2">{doc.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-charcoal/30 uppercase tracking-widest">
                      {doc.icon}
                      {doc.status}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges Mockup */}
              <div className="mt-12 pt-8 border-t border-grey">
                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-6">Security Certifications</p>
                <div className="flex flex-wrap gap-8 opacity-40 grayscale pb-8">
                   {/* Mock Badges */}
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center font-black text-[8px]">SOC2</div>
                     <span className="text-[10px] font-bold">TYPE II</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center font-black text-[8px]">ISO</div>
                     <span className="text-[10px] font-bold">27001</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center font-black text-[8px]">HIPAA</div>
                     <span className="text-[10px] font-bold">COMPLIANT</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements for Depth - Cleanly Positioned */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-10 -right-4 hidden lg:block bg-lime p-4 rounded-2xl shadow-xl border border-black/5 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-lime">
                <Users size={20} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-black/50">Access Request</div>
                <div className="text-sm font-black text-black leading-none">Acme Corp Enterprise</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-8 -left-8 hidden lg:block bg-black text-white p-5 rounded-3xl shadow-2xl z-20 border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-lime rounded-xl flex items-center justify-center text-black">
                <Lock size={20} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest text-lime leading-none mb-1">Encrypted</div>
                <div className="text-sm font-bold leading-none">Secure Vault Enabled</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMockup;
