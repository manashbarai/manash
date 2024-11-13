import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className=" bg-gray-900 text-white ">
      {/* Text Content */}
      <div className=" w-1/2 m-auto flex flex-col md:flex-row items-center">

     
      <div className="flex-1 md:mr-8">
        <h2 className="text-xl text-purple-400 font-bold mb-4">
          01. <span className="text-white">About Me</span>
        </h2>
        
        <p className="text-gray-300 mb-4">
          Hi! My name is Pratik, I started goofing around with programming when I was 14 years old. Since then I have been working on various projects and learning new technologies.
        </p>
        
        <p className="text-gray-300 mb-4">
          I am Co-Founder and CEO of <a href="https://devforces.com" className="text-purple-400 hover:underline">DevForces</a> under Quasarect Technologies LLP. I was the President of Club <a href="https://velocity.com" className="text-purple-400 hover:underline">Velocity</a> at my institute and one of the few <a href="https://postman.com" className="text-purple-400 hover:underline">Postman</a> Student Leaders across the globe.
        </p>
        
        <p className="text-gray-300 mb-4">
          Here's my most recent <a href="https://resume.com" className="text-purple-400 hover:underline">resume</a>, reflecting my latest experiences and skills.
        </p>
        
        <p className="text-gray-300 mb-4">
          Here are a few technologies I’ve been working with recently:
        </p>

        {/* Technologies List */}
        <div className="grid grid-cols-2 gap-2 text-gray-400">
          <p>• JavaScript (ES6+)</p>
          <p>• TypeScript</p>
          <p>• React/Next</p>
          <p>• Java</p>
          <p>• R</p>
          <p>• Node.js</p>
          <p>• Python</p>
          <p>• C</p>
          <p>• C++</p>
          <p>• Docker</p>
          <p>• GitHub Actions</p>
          <p>• DevOps</p>
        </div>
      </div>

      {/* Image */}
      
      </div>
    </section>
  );
};

export default AboutMe;
