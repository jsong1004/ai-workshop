
import React from 'react';

interface IconProps {
  className?: string;
}

export const LaptopIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M3.75 10.048V5.25A2.25 2.25 0 0 1 6 3h12a2.25 2.25 0 0 1 2.25 2.25v4.798M3.75 10.048h16.5M3.75 10.048 2.25 15.75h19.5L20.25 10.048M5.625 15.75 3 21h18l-2.625-5.25M9 15.75h6" 
    />
  </svg>
);
