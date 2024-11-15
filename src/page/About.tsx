import React from "react";
import { FaChess } from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section className="  lg:w-1/2 w-full md:w-1/2 m-auto h-[97vh] pt-20  lg:pt-0 md:pt-0 lg:flex flex-col justify-center text-white relative">
      {/* Text Content */}
      <div className=" m-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 md:mr-8">
          <h2 className="text-xl text-purple-400 font-bold mb-4">
           <span className="text-zinc-500 text-3xl">About Me</span>
          </h2>

          

          <p className="text-zinc-300 mb-4">
            I am a full-stack web developer with a passion for problem-solving
            and a love for coding that started during my civil engineering
            studies. My expertise lies in <span className="text-[rgba(255,223,167,0.9)]"> JavaScript, React,React Native Expo, Node.js, Express,
            Next.js, and TypeScript </span> , enabling me to build robust web
            applications and scalable APIs. I particularly enjoy solving
            algorithmic challenges, focusing on array and string manipulation
            problems on platforms like GeeksforGeeks.When I am not coding, I
            unwind by playing chess, which sharpens my strategic thinking and
            mirrors my approach to overcoming coding challenges.
          </p>

          <p className="text-zinc-300 mb-4">
            Here's my most recent{" "}
            <a
              href="https://resume.com"
              className="text-[rgba(250,214,152,0.9)] hover:underline"
            >
              Resume
            </a>
            , reflecting my latest experiences and skills.
          </p>

          <p className="text-zinc-300 mb-4">
            Here are a few technologies I’ve been working with :
          </p>

          {/* Technologies List */}
          <div className="grid grid-cols-2 gap-2 text-zinc-400">
             <p>• Html</p>
            <p>• Css</p>
           
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> JavaScript (ES6+)</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> TypeScript</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> Reac Js</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> Next Js</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> React Native</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> Node js</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> Docker</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> GSAP</p>
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> Framer Motion</p>   
            <p> <span className="text-[rgba(250,214,152,0.9)]"> •</span> GitHub Actions</p>
          </div>
        </div>

        {/* Image */}
      </div>
      <div className="absolute font-semibold flex items-center gap-2 bottom-2 lg:bottom-0 md:bottom-0 start-0 text-zinc-600 text-xs tracking-wider">Playing <FaChess className="text-[rgba(235,209,164,0.5)]" size={13} /> at <a href="https://lichess.org/@/mbarai" target="_blank" rel="noopener noreferrer">Lichess</a>

      </div>    </section>
  );
};

export default AboutMe;
