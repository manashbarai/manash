// NoiseBackground.js
import React from 'react';

const NoiseBackground = () => (
  <svg
    className="pointer-events-none fixed left-0 top-0 z-[999] w-full opacity-15"
    style={{
      height: 'calc(100vh + 200px)',
      transform: 'translateY(0px)',
      filter: 'contrast(30%) brightness(70%)',
    }}
  >
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

export default NoiseBackground;
