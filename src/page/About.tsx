import React from "react";
import { FaChess } from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section className="  w-1/2 m-auto h-[100vh] flex flex-col justify-center text-white relative">
      {/* Text Content */}
      <div className=" m-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 md:mr-8">
          <h2 className="text-xl text-purple-400 font-bold mb-4">
           <span className="text-white text-3xl">About Me</span>
          </h2>

          

          <p className="text-gray-300 mb-4">
            I am a full-stack web developer with a passion for problem-solving
            and a love for coding that started during my civil engineering
            studies. My expertise lies in <span className="text-purple-400"> JavaScript, React,React Native Expo, Node.js, Express,
            Next.js, and TypeScript </span> , enabling me to build robust web
            applications and scalable APIs. I particularly enjoy solving
            algorithmic challenges, focusing on array and string manipulation
            problems on platforms like GeeksforGeeks.When I am not coding, I
            unwind by playing chess, which sharpens my strategic thinking and
            mirrors my approach to overcoming coding challenges.
          </p>

          <p className="text-gray-300 mb-4">
            Here's my most recent{" "}
            <a
              href="https://resume.com"
              className="text-purple-400 hover:underline"
            >
              resume
            </a>
            , reflecting my latest experiences and skills.
          </p>

          <p className="text-gray-300 mb-4">
            Here are a few technologies I’ve been working with :
          </p>

          {/* Technologies List */}
          <div className="grid grid-cols-2 gap-2 text-gray-400">
             <p>• Html</p>
            <p>• Css</p>
           
            <p>• JavaScript (ES6+)</p>
            <p>• TypeScript</p>
            <p>• Reac Js</p>
            <p>• Next Js</p>
            <p>• React Native</p>
            <p>• Node js</p>
            <p>• Docker</p>
            <p>• GSAP</p>
            <p>• Framer Motion</p>   
            <p>• GitHub Actions</p>
          </div>
        </div>

        {/* Image */}
      </div>
      <div className="absolute font-semibold flex items-center gap-2 bottom-0 start-0 text-gray-600 text-xs tracking-wider">Playing <FaChess className="text-purple-400" size={13} /> at <a href="https://lichess.org/@/mbarai" target="_blank" rel="noopener noreferrer">Lichess</a>

      </div>    </section>
  );
};

export default AboutMe;
