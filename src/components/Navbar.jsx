import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clickAudio from "/audio/clickOption.wav";
import HamburgerMenu from "./HamburgerMenu";
import logo from '/logo.png'
const Navbar = () => {
  const [hoverPosition, setHoverPosition] = useState("start-home");
  const navbarRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef([]);

  // Audio reference
  const audioRef = useRef(new Audio(clickAudio));

  const handleMouseEnter = (position) => {
    setHoverPosition(position);
  };

  const handleClick = (e, section) => {
    e.preventDefault();

    // Play the click sound
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();

    // Smooth scroll to the target section
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
  
    // First, animate the logo
    tl.from(logoRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.3, // Reduced duration
      ease: "power2.out",
    });
  
    // Then, animate the navbar entrance from the top
    tl.from(navbarRef.current, {
      y: -100,
      filter: "blur(3px)",
      duration: 0.4, // Reduced duration
      ease: "power2.out",
    });
  
    // Finally, stagger the links with a fade-in effect
    tl.from(linksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.1, // Faster stagger interval
      ease: "power2.out",
      duration: 0.5, // Reduced duration
    });
  }, [mobileMenu]);
  

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  useEffect(() => {
    const handleBodyClick = () => {
      
      
      
      
    };

    // Add event listener to the body
    document.body.addEventListener('click', handleBodyClick);

    // Cleanup the event listener on unmount
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className="lg:flex md:flex hidden shadow shadow-[#111111] justify-between w-1/2 mx-auto sticky top-0 rounded-b-2xl overflow-hidden items-center bg-zinc-900/30 backdrop-blur-md z-50"
      >
        <div
          ref={logoRef}
          className="logo flex items-center text-gray-400 text-lg font-bold px-4 cursor-pointer"
          onClick={(e) => handleClick(e, "home")} // Scrolls to home section on logo click
        >
          <img src={logo} width={50} height={30}  className=" mix-blend-screen" />
        </div>

        <nav className="relative z-10 mr-2 mb-1 justify-end flex items-center gap-4 text-gray-400 font-semibold">
          {["About", "Experience", "Project", "Contact", "Resume"].map(
            (text, index) => (
              <a
                key={text}
                ref={(el) => (linksRef.current[index] = el)}
                href={`#${text.toLowerCase()}`} // Anchor for target section
                className="text-center z-20 cursor-pointer py-1 w-[70px] inline-block"
                onMouseEnter={() => handleMouseEnter(text.toLowerCase())}
                onClick={(e) => handleClick(e, text.toLowerCase())} // Smooth scroll for other links
              >
                {text}
              </a>
            )
          )}

          {/* Animated background */}
          <div
            className={`absolute bottom-0 h-full bg-[rgba(46,44,44,0.3)] z-0 ${
              hoverPosition === "resume"
                ? "rounded-b-lg rounded-br-2xl"
                : "rounded-b-lg"
            } transition-all duration-300 ${
              hoverPosition === "about"
                ? "-left-1 w-[75px]"
                : hoverPosition === "experience"
                ? "left-[76px] w-[95px]"
                : hoverPosition === "project"
                ? "left-[169px] w-[75px]"
                : hoverPosition === "contact"
                ? "left-[253px] w-[80px]"
                : hoverPosition === "resume"
                ? "left-[340px] w-[80px]"
                : ""
            }`}
          />
        </nav>
      </div>

      <div className="shadow fixed top-0 end-0  w-full lg:hidden md:hidden  shadow-[#111111]    bg-zinc-900/30 backdrop-blur-md z-50">
        <HamburgerMenu toggleMenu={toggleMenu} mobileMenu={mobileMenu} />

        {mobileMenu && (
          <div
            key={mobileMenu}
            ref={navbarRef}
            className="block   justify-between  mx-auto sticky top-0 rounded-b-2xl overflow-hidden items-center"
          >
            <div
              ref={logoRef}
              className="logo flex items-center text-gray-400 text-lg font-bold px-4 pt-4 cursor-pointer"
              onClick={(e) => {
                handleClick(e, "home"), toggleMenu();
              }} // Scrolls to home section on logo click
            >
                        <img src={logo} width={50} height={30}  className=" mix-blend-screen" />

            </div>

            <nav className="relative z-10 mr-2 mb-1 justify-end flex flex-col gap-4 px-4   text-gray-400 font-semibold">
              {["About", "Experience", "Project", "Contact", "Resume"].map(
                (text, index) => (
                  <a
                    key={text}
                    ref={(el) => (linksRef.current[index] = el)}
                    href={`#${text.toLowerCase()}`} // Anchor for target section
                    className="text-start z-20 cursor-pointer py-1 w-[70px] inline-block"
                    onMouseEnter={() => handleMouseEnter(text.toLowerCase())}
                    onClick={(e) => {
                      handleClick(e, text.toLowerCase());
                      toggleMenu();
                    }} // Smooth scroll for other links
                  >
                    {text}
                  </a>
                )
              )}

              {/* Animated background */}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
