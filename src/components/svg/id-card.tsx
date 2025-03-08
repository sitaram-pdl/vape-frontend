import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const IdCardIcon: React.FC<IconProps> = ({
  size = 24,

  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" // Allow Tailwind to control stroke color
      style={{ marginTop: '-3px' }}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className} // Pass Tailwind classes here
    >
      <path d="M16 10h2" />
      <path d="M16 14h2" />
      <path d="M6.17 15a3 3 0 0 1 5.66 0" />
      <circle cx="9" cy="11" r="2" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  );
};

export default IdCardIcon;
