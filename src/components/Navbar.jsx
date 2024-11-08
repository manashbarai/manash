import React, { useState } from 'react';

const Navbar = () => {
  const [hoverPosition, setHoverPosition] = useState('start-home');

  const handleMouseEnter = (position) => {
    setHoverPosition(position);
  };

  return (
    <div className="flex shadow shadow-gray-700 justify-between w-1/2 mx-auto  rounded-b-2xl py-1 overflow-hidden items-center ">
      <div className="logo flex items-center text-gray-400 text-lg font-bold px-4">
        LOGO
      </div>

      <nav className="relative z-10  flex items-center gap-4 text-gray-400 font-semibold">
        <a
          href="#"
          className="text-center z-20  cursor-pointer py-1 w-[50px] inline-block"
          onMouseEnter={() => handleMouseEnter('about')}
        >
          About
        </a>
        <a
          href="#"
          className="text-center z-20  cursor-pointer py-1 w-[50px] inline-block"
          onMouseEnter={() => handleMouseEnter('blog')}
        >
          Project
        </a>
        <a
          href="#"
          className="text-center z-20  cursor-pointer py-1 w-[50px] inline-block"
          onMouseEnter={() => handleMouseEnter('portfolio')}
        >
          Contact
        </a>
        <a
          href="#"
          className="text-center z-20  cursor-pointer py-1 w-[100px] inline-block"
          onMouseEnter={() => handleMouseEnter('contact')}
        >
          Resume
        </a>

        {/* Animated background */}
        <div
          className={`absolute bottom-0 h-full bg-[rgba(46,44,44,0.4)] z-0  rounded transition-all duration-300  ${
            hoverPosition === 'about' ? '-left-2 w-[68px]' :
            hoverPosition === 'blog' ? 'left-[54px] w-[75px]' :
            hoverPosition === 'portfolio' ? 'left-[124px] w-[75px]' :
            hoverPosition === 'contact' ? 'left-[210px] w-[80px]' : ''
          }`}
        />
      </nav>
    </div>
  );
};

export default Navbar;
