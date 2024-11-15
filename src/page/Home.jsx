import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const ProfileSection = ({ sizeIncrese }) => {
  const titleref = useRef();
  const peraRef = useRef();
  const blur = useRef();

  useGSAP(() => {
    gsap.from(blur.current, {
      filter: "blur(5px)", // Start with 10px blur
      duration: 2,

      ease: "power2.out",
    });
    gsap.from(titleref.current, {
      x: -300,
      opacity: 0,
      duration: 1,
    });
    gsap.from(peraRef.current, {
      x: 300,
      opacity: 0,
      duration: 1,
    });
  });
  const openLinkSite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="lg:w-1/2 w-full md:w-1/2 h-[100vh]  mx-auto pt-48 lg:pt-0 md:pt-0 lg:flex md:flex justify-center items-center  relative">
      <div className="flex flex-col gap-5">
        <h1
          ref={titleref}
          className="text-7xl clipmask font-semibold text-orange-100 tracking-tight "
          onMouseLeave={() => sizeIncrese(20, 900)}
          onMouseEnter={() => sizeIncrese(1, 100)}
        >
          {" "}
          Manash Barai
        </h1>

        <div className="flex gap-2 sm:flex md:hidden lg:hidden ">
          <FaGithub
            onMouseEnter={() => props.sizeIncrese(1)}
            onMouseLeave={() => props.sizeIncrese(20)}
            size={30}
            onClick={() => openLinkSite("https://github.com/manashbarai")}
            className="text-zinc-300  text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          />
          <FaLinkedinIn
            onMouseEnter={() => props.sizeIncrese(1)}
            onMouseLeave={() => props.sizeIncrese(20)}
            size={30}
            onClick={() =>
              openLinkSite(
                "https://www.linkedin.com/in/manash-barai-077606209/"
              )
            }
            className="text-zinc-300   text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          />
          <FaTwitter
            onMouseEnter={() => props.sizeIncrese(1)}
            onMouseLeave={() => props.sizeIncrese(20)}
            size={30}
            onClick={() => openLinkSite("https://x.com/manashjbarai")}
            className="text-zinc-300  text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          />
          <MdOutgoingMail
            onMouseEnter={() => props.sizeIncrese(1)}
            onMouseLeave={() => props.sizeIncrese(20)}
            size={33}
            onClick={() => openLinkSite("mailto:manashjbarai@gmail.com")}
            className="text-zinc-300 text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          />
        </div>

        <p
          ref={blur}
          className=" tracking-wider  text-orange-50 font-semibold"
          onMouseLeave={() => sizeIncrese(20, 900)}
          onMouseEnter={() => sizeIncrese(50, 100)}
        >
          I’m a <span className="text-gradient-blue">Full Stack </span>{" "}
          <span className="text-gradient-red ">Developer </span> & I build
          pixel-perfect, engaging, and accessible digital experiences over{" "}
          <span className="text-gradient-yellow">3+</span> years, I have
          delivered <span className="text-gradient-blue">5+</span> projects to
          over <span className="text-gradient-green"> 4+ </span> clients .
        </p>
        <p
          ref={peraRef}
          className="text-orange-50"
          onMouseLeave={() => sizeIncrese(20, 900)}
          onMouseEnter={() => sizeIncrese(1, 100)}
        >
          Currently working with{" "}
          <span className="text-gradient-green font-semibold tracking-wide">
            {" "}
            @march
          </span>{" "}
          and{" "}
          <span className="text-gradient-purple font-semibold tracking-wide">
            {" "}
            @betaZen InfoTech
          </span>
        </p>
      </div>
      <div className="absolute bottom-1 start-0 text-gray-600 text-xs">
        Designed with ❤️ and a lot of ☕️
      </div>
    </div>
  );
};

export default ProfileSection;
