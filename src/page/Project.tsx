import React, { useState } from "react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState("IIT Bombay");

  const experiences = [
    { title: "GSoC – PEcAn Project", company: "" },
    { title: "IIIT Dharwad Website", company: "" },
    { title: "IIT Bombay", company: "Research Intern" },
    { title: "Quasarect Technologies LLP", company: "" },
    { title: "Arthlex Research Private Limited", company: "" },
    { title: "Indian Knowledge Systems, IIIT Dharwad", company: "" },
  ];

  const experienceDetails = {
    "IIT Bombay": {
      role: "Research Intern @ IIT Bombay",
      duration: "July 2023 – Current",
      description: [
        "Developed an advanced learning system utilizing video bots for enhanced student engagement.",
        "Implemented an adaptive feedback platform using React & ExpressJS, a Flask server running the deep learning model, and improved learning outcomes.",
        "Built a software that can be executed locally using Docker or through an Electron installation.",
        "Working on GeoGuru, a Learning Assistant for students studying geography.",
      ],
    },
    // Add details for other experiences as needed
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-8">
      <h2 className="text-purple-400 text-3xl font-bold mb-8">02. Experience</h2>
      <div className="flex w-full max-w-4xl">
        {/* Left Column */}
        <div className="w-1/3 border-l-2 border-purple-500">
          <ul className="space-y-4 pl-4">
            {experiences.map((exp, index) => (
              <li
                key={index}
                onClick={() => setSelectedExperience(exp.title)}
                className={`cursor-pointer ${
                  selectedExperience === exp.title
                    ? "text-purple-500 font-semibold"
                    : "text-gray-400"
                } hover:text-purple-500`}
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
            {experienceDetails[selectedExperience].description.map((desc, index) => (
              <li key={index} className="text-gray-300">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
