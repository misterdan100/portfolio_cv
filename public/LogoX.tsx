import React from 'react';

// Define props type to accept className and other SVG props
interface LogoXProps extends React.SVGProps<SVGSVGElement> {}

export const LogoX: React.FC<LogoXProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className} // Apply the className prop
      fill="currentColor" // Add fill="currentColor" so it inherits text color
      {...props} // Spread remaining props
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
};