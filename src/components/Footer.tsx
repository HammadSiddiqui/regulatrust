import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" className="mb-6" />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Trust Center and Compliance Workspace for the next generation of SaaS. Prove your security, privacy, and compliance posture to win enterprise deals.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-lime">Product</h4>
            <ul className="space-y-4 text-sm text-white/40 font-bold">
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#product" className="group-hover:text-white transition-colors">Trust Center</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#features" className="group-hover:text-white transition-colors">Compliance Workspace</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#features" className="group-hover:text-white transition-colors">Due Diligence Hub</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#features" className="group-hover:text-white transition-colors">Evidence Library</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-lime">Resources</h4>
            <ul className="space-y-4 text-sm text-white/40 font-bold">
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">Documentation</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">API Reference</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">Privacy Guide</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">GDPR Checklist</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-lime">Company</h4>
            <ul className="space-y-4 text-sm text-white/40 font-bold">
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">About Us</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">Careers</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">Blog</a>
              </li>
              <li className="flex items-center group">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-[0.05em] bg-lime text-black mr-2 bg-opacity-90 group-hover:bg-opacity-100 transition-all">Soon</span>
                <a href="#" className="group-hover:text-white transition-colors">Security</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.1em]">
            © 2026 RegulaTrust. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[10px] text-white/20 uppercase font-bold tracking-[0.1em]">
            <Link to="/privacy" className="hover:text-lime">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-lime">Cookie Policy</Link>
            <Link to="/terms" className="hover:text-lime">Terms of Service</Link>
            <Link to="/dpa" className="hover:text-lime">DPA</Link>
            <Link to="/acceptable-use" className="hover:text-lime">Acceptable Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
