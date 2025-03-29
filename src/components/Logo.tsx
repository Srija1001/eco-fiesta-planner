
import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <div className={`flex items-center gap-2 font-bold ${sizes[size]}`}>
      <div className="relative">
        <Leaf 
          size={iconSizes[size]} 
          className="text-eco-leaf animate-leaf-sway" 
        />
        <div className="absolute inset-0 text-eco-sunset opacity-75 translate-x-0.5 translate-y-0.5">
          <Leaf size={iconSizes[size]} />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-eco-moss tracking-tight">eco</span>
          <span className="text-eco-sunset tracking-wide">fiesta</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
