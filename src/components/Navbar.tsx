import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" aria-label="Home">
            <Logo variant="black" className="h-8" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
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
              <button className="flex items-center gap-1 hover:text-lime transition-colors cursor-pointer py-2">
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
          <a href={isHome ? "#product" : "/#product"} className="btn btn-primary px-6 py-2.5 text-xs">Join Waitlist</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
