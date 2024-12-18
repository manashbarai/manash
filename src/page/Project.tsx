import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState("Adopted_Brain");

  const experiences = [
    { title: "Adopted_Brain", company: "" },
    
    { title: "Toast Beat", company: "" },
    { title: "Siliconpin", company: "" },
  ];

  const experienceDetails = {
    Adopted_Brain: {
      role: "Full-Stack @ adopted brain ",
      duration: "May 2024 – Present",
      description: [
        "Developed admin dashboard for Sportz Point, enhancing content management efficiency.",
        "Developed sportzpoint web app for with nice mordern ui ux ",
        "Created robust lottery results tracking system with web and app interfaces for user engagement.",

        "Engineered high-performance platform for real-time publishing of lottery results.",
        
      ],
      
       
    },

   
    "Toast Beat": {
      role: "Full-Stack Developer @ Toast Beat (web)",
      duration: "Jul 2023 – Apr 2024",
      description: [
        "Developed a job portal for the IT field with separate sign-up forms for recruiters and job seekers.",
        "Implemented a black and white theme for a clean, professional design.",
        "Created an easy-to-integrate form, inspired by Google Forms, for use in any web application.",
        "Utilized React, Tailwind CSS, and Firebase to ensure smooth functionality and a streamlined user experience.",
      ],
     
    },
    Siliconpin: {
      role: "Intern @ Siliconpin",
      duration: "jan 2021 – Oct 2022",
      description: [
        "Contributed to various UI design projects, implementing responsive and interactive designs using HTML, CSS, JavaScript, and Vue.js.",
        "Followed senior developers' guidance and specifications to ensure proper code structure and functionality.",
        "Collaborated closely with senior developers and designers to transform design prototypes into fully functional and user-friendly web interfaces.",
      ]
     
    },
  };

  // Ref to hold the description list items
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    // Animation triggered on selectedExperience change
    console.log(selectedExperience);

    gsap.from(listItemsRef.current, {
      y: 50,
      ease: "power2.out",

      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    });
  }, [selectedExperience]);

  return (
    <div className=" text-zinc-500 min-h-screen pt-32 h-[100vh] lg:pt-0 md:pt-0 lg:flex md:flex lg:w-1/2 md:w-1/2 w-full  m-auto flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold mb-8 w-full">Experience</h2>
      <div className="flex w-full max-w-4xl">
        {/* Left Column */}
        <div className="w-1/3 border-l-2 border-[rgba(255,233,195,0.9)]">
          <ul className="space-y-4 pl-4">
            {experiences.map((exp, index) => (
              <li
                key={index}
                onClick={() => setSelectedExperience(exp.title)}
                className={`cursor-pointer ${
                  selectedExperience === exp.title
                    ? "text-[rgba(255,247,233,0.9)] font-semibold"
                    : "text-zinc-400"
                } hover:text-[rgba(250,214,152,0.9)]`}
              >
                {exp.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3 md:w-2/3 pl-1">
          <h3 className="text-xl font-semibold">
            {experienceDetails[selectedExperience].role}
          </h3>
          <p className="text-sm text-[rgba(255,223,167,0.9)]  capitalize mb-4">
            {experienceDetails[selectedExperience].duration}
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {experienceDetails[selectedExperience].description.map(
              (desc, index) => (
                <li
                  key={index}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  className="text-zinc-300"
                >
                  {desc}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-2 lg:bottom-1 md:bottom-1  w-full ">
            <p className="text-xs">Knowing that my work has a positive impact gives me a great sense of joy : 😊  </p>

      </div>
    </div>
  );
};

export default Experience;
