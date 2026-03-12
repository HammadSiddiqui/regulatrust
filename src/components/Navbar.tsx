import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-off-white/80 backdrop-blur-md border-b border-grey">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" aria-label="Home">
            <Logo variant="black" className="h-8" />
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#product" className="hover:text-lime transition-colors">Product</a>
            <a href="#features" className="hover:text-lime transition-colors">Features</a>
            <a href="#pricing" className="hover:text-lime transition-colors">Pricing</a>
            <a href="#audience" className="hover:text-lime transition-colors">Who it's for</a>
            <a href="#faq" className="hover:text-lime transition-colors">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-outline hidden sm:flex">Log In</button>
          <button className="btn btn-primary">Book a Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
