import React from "react";

const projects = [
  {
    title: "Content title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    oppositeContent: "Opposite content",
  },
  {
    title: "Content title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    oppositeContent: "Opposite content",
  },
  {
    title: "Content title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    oppositeContent: "Opposite content",
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute w-1 bg-gray-700 left-1/2 transform -translate-x-1/2 h-full"></div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex items-center w-full my-8 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {index % 2 !== 0 && (
            <div className="w-1/2 text-right pr-8 text-white">
              {project.oppositeContent}
            </div>
          )}
          <div className="relative w-8 h-8 bg-gray-900 rounded-full border-4 border-white z-10"></div>
          <div
            className={`${
              index % 2 === 0 ? "ml-8" : "mr-8"
            } bg-gray-800 text-white p-6 rounded-lg shadow-lg w-1/2`}
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
          {index % 2 === 0 && (
            <div className="w-1/2 pl-8 text-white">{project.oppositeContent}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
