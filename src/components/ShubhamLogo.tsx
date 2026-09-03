import React from 'react';

interface ShubhamLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const ShubhamLogo: React.FC<ShubhamLogoProps> = ({
  className = 'h-10 sm:h-12',
  variant = 'auto'
}) => {
  // Use the high-resolution transparent logo
  const logoUrl = 'https://sarsglobal.io/assets/img/SCH.png';

  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={logoUrl}
        alt="Shubham Colour House"
        className={`object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
};

