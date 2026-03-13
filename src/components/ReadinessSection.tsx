import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight, 
  Database, 
  Globe,
} from 'lucide-react';

const ReadinessSection: React.FC = () => {
  const sidebarItems = [
    { icon: <Shield size={16} />, label: "Overview", active: true },
    { icon: <CheckCircle2 size={16} />, label: "ISO 27001" },
    { icon: <LockIcon size={16} />, label: "GDPR" },
    { icon: <Database size={16} />, label: "Evidence Library" },
    { icon: <AlertTriangle size={16} />, label: "Gaps" },
    { icon: <Clock size={16} />, label: "Reviews" },
    { icon: <Zap size={16} />, label: "Publishing" },
  ];

  const stats = [
    { label: "Readiness Score", value: "68%", color: "text-lime" },
    { label: "Evidence Coverage", value: "42%", color: "text-white" },
    { label: "Critical Gaps", value: "12", color: "text-red-500" },
    { label: "Overdue Reviews", value: "5", color: "text-amber-500" },
  ];

  const features = [
    {
      title: "Framework Readiness",
      desc: "Track implementation progress for ISO 27001:2022 and GDPR in one unified workspace.",
      icon: <CheckCircle2 className="text-lime" size={20} />
    },
    {
      title: "Evidence Mapping",
      desc: "Attach policies, records, and proof to each requirement with central version control.",
      icon: <Database className="text-lime" size={20} />
    },
    {
      title: "Gap Assessment",
      desc: "Automated auditing to spot missing controls, stale evidence, or blockers before auditors do.",
      icon: <AlertTriangle className="text-lime" size={20} />
    },
    {
      title: "Publishing Bridge",
      desc: "Convert approved internal compliance work into credible, buyer-safe trust signals instantly.",
      icon: <Zap className="text-lime" size={20} />
    }
  ];

  return (
    <section id="readiness" className="section-padding bg-black text-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-lime/20"
          >
            <Shield size={10} />
            The Operating Layer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white leading-[0.9]"
          >
            The workspace behind <br />
            <span className="text-white/40">buyer-ready trust.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            Trust isn't static—it's operations. RegulaTrust provides the internal workspace where teams track ISO 27001 and GDPR readiness, manage evidence, and approve what flows to the trust center.
          </motion.p>
        </div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          <div className="bg-charcoal rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(193,255,114,0.05)] overflow-hidden flex flex-col md:flex-row h-[700px]">
            {/* Mock Sidebar */}
            <div className="w-64 border-r border-white/5 bg-black/40 p-6 flex flex-col shrink-0 hidden md:flex">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-lime rounded-lg flex items-center justify-center">
                  <Shield size={18} className="text-black" />
                </div>
                <span className="font-bold tracking-tight text-white">Readiness</span>
              </div>
              
              <nav className="space-y-1">
                {sidebarItems.map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all
                      ${item.active ? 'bg-lime text-black shadow-lg shadow-lime/20' : 'text-white/30 hover:text-white'}`}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-[9px] font-black uppercase tracking-widest text-lime">
                    <Zap size={10} /> Bridge Active
                  </div>
                  <div className="text-[10px] text-white/50 font-medium">Syncing to Trust Center</div>
                </div>
              </div>
            </div>

            {/* Mock Content */}
            <div className="flex-1 bg-charcoal p-8 md:p-12 overflow-y-auto relative custom-scrollbar">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h3 className="text-3xl font-bold mb-2 tracking-tight text-white">Workspace Overview</h3>
                  <div className="text-xs text-white/30 font-bold uppercase tracking-widest">Global Readiness Posture</div>
                </div>
                <button className="h-10 px-5 bg-lime text-black rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                   Scan for Gaps <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
                {stats.map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm">
                    <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Frameworks & Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                <div className="space-y-6">
                  <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-lime/30 transition-all">
                    <div className="flex justify-between items-start mb-10">
                       <div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-lime mb-2">Implementing</div>
                         <h4 className="text-xl font-bold text-white tracking-tight">ISO 27001:2022</h4>
                       </div>
                       <div className="text-2xl font-bold text-white">75%</div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-lime w-3/4 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-white/20">
                      <span>68 Controls Met</span>
                      <span>12 Gaps Found</span>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-6 font-bold">Critical Gaps</h5>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                          <div className="flex items-center gap-3">
                             <AlertTriangle size={14} className="text-red-500" />
                             <span className="text-[11px] font-bold text-white">Missing ROPA Artifact</span>
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-red-500">Blocker</span>
                       </div>
                       <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl opacity-50">
                          <div className="flex items-center gap-3">
                             <Clock size={14} className="text-amber-500" />
                             <span className="text-[11px] font-bold text-white">Asset Register Stale</span>
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-amber-500">Expiring</span>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] flex flex-col justify-between">
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-8 font-bold">Latest Evidence</h5>
                    <div className="space-y-3">
                       {[
                         { name: "Information Security Policy", status: "Approved" },
                         { name: "Network Diagram", status: "Review Required" },
                         { name: "Access Control Doc", status: "Approved" },
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                               <FileText size={16} className="text-lime" />
                               <span className="text-[11px] font-bold text-white">{item.name}</span>
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'Approved' ? 'text-lime' : 'text-white/20'}`}>
                               {item.status}
                            </span>
                         </div>
                       ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-lime rounded-3xl text-black">
                     <div className="flex justify-between items-center mb-4">
                        <h6 className="text-xs font-black uppercase tracking-widest">Publishing Bridge</h6>
                        <Zap size={16} strokeWidth={3} />
                     </div>
                     <p className="text-[10px] font-bold leading-tight mb-4">You have 4 internal approvals ready to push to your public Trust Center.</p>
                     <button className="w-full py-2 bg-black text-white rounded-xl text-[9px] font-black uppercase tracking-widest">Generate Snapshot</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block bg-lime text-black p-6 rounded-[2rem] shadow-2xl z-20 w-56 border border-black/10"
          >
            <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Internal Work</div>
            <div className="space-y-4">
               <div>
                  <div className="text-[11px] font-black leading-none mb-1">Mapping Done</div>
                  <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-black rounded-full" />
                  </div>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} strokeWidth={3} />
                  <span className="text-xs font-black">Ready to Prove</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute -right-12 bottom-20 hidden lg:block bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl z-20 w-64 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-lime ring-4 ring-lime/20">
                  <Globe size={18} />
               </div>
               <div className="text-left text-white">
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 opacity-40">Public Center</div>
                  <div className="text-sm font-black leading-none">Trust Center Live</div>
               </div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-[10px] font-bold text-white/60 leading-tight">
               Verified ISO 27001 readiness claims are now visible to your prospects.
            </div>
          </motion.div>
        </motion.div>

        {/* 3-Step Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { step: "01", title: "Map requirements", desc: "Track ISO 27001 and GDPR readiness by section with granular item tracking." },
            { step: "02", title: "Attach evidence", desc: "Link policies, DPAs, registers, and audits directly to specific controls." },
            { step: "03", title: "Publish trust", desc: "Turn approved internal work into buyer-friendly trust signals with one click." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-left group"
            >
              <div className="text-4xl font-bold font-serif text-lime/20 group-hover:text-lime/40 transition-colors mb-4 italic leading-none">{item.step}</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
           {features.map((feature, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-white/10 hover:bg-white/[0.07] transition-all text-left group"
             >
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime/20 transition-colors">
                  {feature.icon}
               </div>
               <h4 className="text-lg font-bold mb-3 tracking-tight text-white">{feature.title}</h4>
               <p className="text-[11px] text-white/40 leading-relaxed font-bold uppercase tracking-tight">{feature.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* CTA & Disclaimer */}
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-12 md:p-16 bg-lime rounded-[3rem] text-black relative overflow-hidden group shadow-2xl shadow-lime/20"
           >
              <div className="relative z-10">
                 <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter leading-none">Ready to automate <br /> your trust operations?</h3>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="h-16 px-8 bg-black text-lime rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform">
                       Join the Waitlist <ArrowUpRight size={18} />
                    </button>
                    <button className="h-16 px-8 border-2 border-black/10 text-black rounded-2xl flex items-center justify-center text-xs font-black uppercase tracking-[0.2em] hover:bg-black/5 transition-colors">
                       Preview Workspace
                    </button>
                 </div>
              </div>
              
              {/* Decorative Big Icon */}
              <div className="absolute -right-20 -bottom-20 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-1000 pointer-events-none">
                 <Shield size={320} strokeWidth={1} />
              </div>
           </motion.div>
           
           <p className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
              RegulaTrust supports readiness tracking and evidence organization. It does not replace formal legal, audit, or certification processes.
           </p>
        </div>
      </div>
    </section>
  );
};

const LockIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default ReadinessSection;
