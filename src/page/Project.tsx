import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState("Freelance");

  const experiences = [
    { title: "Freelance", company: "" },
    { title: "Edureify", company: "" },
    { title: "Toast Beat", company: "" },
    { title: "Siliconpin", company: "" },
  ];

  const experienceDetails = {
    Freelance: {
      role: "Full-stack  Dveloper (mobile & web )",
      duration: "Jul 2024 – Currrent",
      description: [
        "Developed web and mobile applications, using React Native Expo for mobile and React for web applications.",
        "Consulted with clients to gather requirements, often clarifying vague or evolving needs to ensure project success.",

        "Collaborated with other developers as a freelancer, contributing to various projects and delivering quality solutions.",
        "Specialized in building responsive and accessible web interfaces, ensuring cross-platform compatibility and usability.",
      ],
      
       
    },

    Edureify: {
      role: "Full-Stack @ Edureify (web) ",
      duration: "Feb 2024 – may 2024",
      description: [
        "Developed a CRM system, collaborating with the project manager to define requirements and deliver a clear vision to the design team.",
        "Consulted with managers to gather business needs and translated them into actionable design and development tasks.",
        "Worked closely with designers to ensure that the user interface met business objectives and optimized user experience.",

        "Focused on performance optimization to ensure the system ran efficiently at scale, improving overall user experience.",
      ]
    },
    "Toast Beat": {
      role: "Full-Stack Developer @ Toast Beat (web)",
      duration: "Jul 2023 – Jan 2024",
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
    <div className=" text-gray-500 min-h-screen flex w-1/2 m-auto flex-col items-center justify-center relative">
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
                    : "text-gray-400"
                } hover:text-[rgba(250,214,152,0.9)]`}
              >
                {exp.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-2/3 pl-8">
          <h3 className="text-xl font-semibold">
            {experienceDetails[selectedExperience].role}
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {experienceDetails[selectedExperience].duration}
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {experienceDetails[selectedExperience].description.map(
              (desc, index) => (
                <li
                  key={index}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  className="text-gray-300"
                >
                  {desc}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0  w-full ">
            <p className="text-xs">Knowing that my work has a positive impact gives me a great sense of joy : 😊  </p>

      </div>
    </div>
  );
};

export default Experience;
