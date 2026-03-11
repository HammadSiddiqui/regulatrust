import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" className="mb-6" />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Privacy operations for the next generation of startups. Compliance done properly, without the chaos.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-lime">Product</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Scanner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DSAR Ops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-lime">Resources</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR Checklist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-lime">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.1em]">
            © 2026 RegulaTrust Industries. All rights reserved. Built with lightning speed.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase font-bold tracking-[0.1em]">
            <a href="#" className="hover:text-lime">Privacy Policy</a>
            <a href="#" className="hover:text-lime">Terms of Service</a>
            <a href="#" className="hover:text-lime">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
