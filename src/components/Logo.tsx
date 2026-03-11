import React from 'react';
import logoBlack from '../assets/logos/logo-black.png';
import logoWhite from '../assets/logos/logo-white.png';

interface LogoProps {
  variant?: 'black' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'black', className = "" }) => {
  const src = variant === 'white' ? logoWhite : logoBlack;

  return (
    <img 
      src={src} 
      alt="RegulaTrust Logo" 
      className={`h-10 w-auto object-contain ${className}`} 
    />
  );
};

export default Logo;
