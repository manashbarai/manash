import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [hoverPosition, setHoverPosition] = useState('start-home');
  
  const navbarRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef([]);

  const handleMouseEnter = (position) => {
    setHoverPosition(position);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // First, animate the logo
    tl.from(logoRef.current, {
      opacity: 0,
      y: -50,
      duration: 2,
      ease: "power2.out",
    });

    // Then, animate the navbar entrance from the top
    tl.from(navbarRef.current, {
      y: -100,
      filter: "blur(3px)",
      duration: 1.5,
      ease: "power2.out",
    });

    // Finally, stagger the links with a fade-in effect
    tl.from(linksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      ease: "power2.out",
      duration: 0.8,
    });
  });

  return (
    <div ref={navbarRef} className="flex shadow shadow-[#2b2b2b] justify-between w-1/2 mx-auto sticky top-0 rounded-b-2xl overflow-hidden items-center">
      <div ref={logoRef} className="logo flex items-center text-gray-400 text-lg font-bold px-4">
        LOGO
      </div>

      <nav className="relative z-10 mr-2 mb-1  justify-end flex items-center gap-4 text-gray-400 font-semibold">
        {["About", "Project", "Contact", "Resume"].map((text, index) => (
          <a
            key={text}
            ref={(el) => (linksRef.current[index] = el)}
            href="#"
            className="text-center z-20 cursor-pointer py-1 w-[70px] inline-block"
            onMouseEnter={() => handleMouseEnter(text.toLowerCase())}
          >
            {text}
          </a>
        ))}

        {/* Animated background */}
        <div
          className={`absolute bottom-0 h-full bg-[rgba(46,44,44,0.3)] z-0 ${
            hoverPosition === 'resume' ? 'rounded-b-lg rounded-br-2xl' : 'rounded-b-lg'
          } transition-all duration-300 ${
            hoverPosition === 'about' ? '-left-1 w-[75px]' :
            hoverPosition === 'project' ? 'left-[84px] w-[75px]' :
            hoverPosition === 'contact' ? 'left-[169px] w-[75px]' :
            hoverPosition === 'resume' ? 'left-[250px] w-[80px]' : ''
          }`}
        />
      </nav>
    </div>
  );
};

export default Navbar;
