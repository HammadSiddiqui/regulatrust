import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-off-white/80 backdrop-blur-md border-b border-grey">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo variant="black" className="h-8" />
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#product" className="hover:text-lime transition-colors">Product</a>
            <a href="#features" className="hover:text-lime transition-colors">Features</a>
            <a href="#pricing" className="hover:text-lime transition-colors">Pricing</a>
            <a href="#agencies" className="hover:text-lime transition-colors">For Agencies</a>
            <a href="#faq" className="hover:text-lime transition-colors">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-outline hidden sm:flex">Book Demo</button>
          <button className="btn btn-primary">Get Free Scan</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
