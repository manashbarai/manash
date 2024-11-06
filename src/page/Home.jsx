import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ProfileSection = ({ sizeIncrese }) => {
  const titleref=useRef()
  const peraRef=useRef()

  useGSAP(()=>{
    gsap.from(titleref.current,{
      x:-300,
      opacity:0,
      duration:1,
    })
    gsap.from(peraRef.current,{
      x:300,
      opacity:0,
      duration:1,
      delay:1
    })
  })

  
  return (
    <div className="w-1/2 h-[100vh] mx-auto flex justify-center items-center ">
      <div className="flex flex-col gap-5">
        <h1
          ref={titleref}
          className="text-7xl clipmask font-semibold text-orange-100 tracking-tight "
          onMouseLeave={() => sizeIncrese(20,900)}
          onMouseEnter={() => sizeIncrese(1,100)}
        >
          {" "}
          Manash Barai
        </h1>
        <p
         ref={peraRef}
          className=" tracking-wider  text-orange-50 font-semibold"
          onMouseLeave={() => sizeIncrese(20,900)}
          onMouseEnter={() => sizeIncrese(1,100)}
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
          onMouseEnter={() => sizeIncrese(70, 100)}
        >
          <span>Designed with ❤️ and a lot of ☕️</span> <br />
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
    </div>
  );
};

export default ProfileSection;
