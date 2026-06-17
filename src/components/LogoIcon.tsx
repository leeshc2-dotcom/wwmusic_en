import React from "react";

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Left angled block */}
      <polygon points="10,15 32,15 48,85 28,85" fill="#2A6F9E" />
      {/* Left inner shadow */}
      <polygon points="10,65 28,85 48,85" fill="#195480" />
      
      {/* Middle angled block (going up) */}
      <polygon points="28,85 48,85 62,40 46,15" fill="#16456A" />

      {/* Right angled block (going down) */}
      <polygon points="46,15 68,15 60,45" fill="#2A6F9E" />
      <polygon points="56,40 68,15 90,15 68,85 54,85" fill="#2A6F9E" />

      {/* Right inner shadow */}
      <polygon points="68,15 90,15 68,55" fill="#195480" />
      
      {/* Gold right corner */}
      <polygon points="64,85 90,85 90,30" fill="#D49A36" />
      <polygon points="64,85 90,85 78,70" fill="#A87522" />
    </svg>
  );
}
