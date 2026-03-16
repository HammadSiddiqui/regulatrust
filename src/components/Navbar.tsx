import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Who it\'s for', href: '#audience' },
    { label: 'FAQ', href: '#faq' },
  ];

  const resourceLinks = [
    { label: 'What Is a Trust Center', href: '/resources/what-is-a-trust-center' },
    { label: 'Trust Center for SaaS', href: '/resources/trust-center-for-saas' },
    { label: 'Sharing SOC 2 Reports', href: '/resources/share-soc2-with-customers' },
    { label: 'Security Questionnaires', href: '/resources/security-questionnaires' },
    { label: 'Subprocessor Transparency', href: '/resources/subprocessor-transparency' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-off-white/80 backdrop-blur-md border-b border-grey">
      <div className="container flex h-20 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" aria-label="Home" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo variant="black" className="h-8" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-black">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={isHome ? link.href : `/${link.href}`} 
                className="hover:text-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-lime transition-colors cursor-pointer py-2 font-medium">
                Resources
                <ChevronDown size={14} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-white border border-grey shadow-2xl rounded-sm py-4 transition-all duration-200 origin-top-left ${isResourcesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {resourceLinks.map((resource) => (
                  <Link
                    key={resource.href}
                    to={resource.href}
                    className="block px-6 py-2.5 text-sm hover:bg-off-white hover:text-black transition-colors font-bold"
                  >
                    {resource.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href={isHome ? "#product" : "/#product"} className="hidden sm:inline-flex btn btn-primary px-6 py-2.5 text-xs">Join Waitlist</a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-black hover:text-lime transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[60] transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-8 space-y-6 overflow-y-auto max-h-[calc(100vh-5rem)] bg-white relative">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={isHome ? link.href : `/${link.href}`} 
              className="text-2xl font-black uppercase tracking-tight text-black hover:text-lime transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-6 border-t border-grey">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-grey-dark mb-4">Resources</h3>
            <div className="space-y-4">
              {resourceLinks.map((resource) => (
                <Link
                  key={resource.href}
                  to={resource.href}
                  className="block text-lg font-bold text-charcoal hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <a 
              href={isHome ? "#product" : "/#product"} 
              className="btn btn-primary w-full py-4 text-center text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
