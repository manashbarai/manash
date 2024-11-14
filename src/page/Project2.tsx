import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Tap2Hire",
    description:
      "Developed a job portal for the IT field with separate sign-up forms for recruiters and users.",
    oppositeContent: "Jul 2023 To Sep 2023",
    skill: ["React JS", "Node JS", "Mongo DB", "Bootstrap"],
  },
  {
    title: "CRM",
    description:
      "Developed a CRM system, collaborating with the project manager to define requirements and deliver a clear vision to the design team.",
    oppositeContent: "Feb 2024 To May 2024",
    skill: ["React JS", "Node JS", "Mongo DB", "Bootstrap"],
  },
  {
    title: "Easy Form",
    description:
      "Created an easy-to-integrate form, inspired by Google Forms, for use in any web application.",
    oppositeContent: "Oct 2023 To Jan 2024",
    skill: ["React JS", "Node JS", "Mongo DB", "Bootstrap"],
  },
  {
    title: "Port Folio",
    description:
      "A neat and clean Designer Portfolio built with Next.js and Tailwind CSS.",
    oppositeContent: "Oct 2024 To Jan 2024",
    skill: ["Next JS", "Tailwind CSS"],
  },
  {
    title: "Lottery Result",
    description:
      "A lottery result publication from Kolkata with upload and render to home page and a unique search option.",
    skill: ["React JS", "Node JS", "Mongo DB", "Tailwind"],
    oppositeContent: "Aug 2024 To Aug 2024",
  },
  {
    title: "Result Auto",
    description:
      "A lottery result publication that auto-updates results using API and scraping from other sites.",
    skill: ["React JS", "Node JS", "Mongo DB", "Tailwind"],
    oppositeContent: "Sep 2024 To Running",
  },
];

const Timeline = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // Animation starts when the top of the item reaches 80% of the viewport
            end: "top 30%",
            scrub: true, // Smooth scrubbing for the animation
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto text-zinc-200 pt-16">
      <h1 className="text-3xl font-bold mb-8 w-full my-6 text-zinc-500">Projects</h1>
      <p className="capitalize">
        Some things which I built during my job and freelancing that helped my IT career growth:
      </p>
      <div className="relative">

      
      <div style={{ height: "calc(100%)" }} className="absolute w-1 top-0 bg-zinc-700 z-50 left-1/2 transform -translate-x-1/2"></div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`timeline-item flex items-center w-full my-8 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {index % 2 !== 0 && (
            <div className="w-1/2 text-right pr-8 text-zinc-500 text-sm tracking-wider">
              {project.oppositeContent}
            </div>
          )}
          <div
            className={`${
              index % 2 === 0
                ? "rounded-tl-2xl rounded-bl-2xl"
                : "rounded-br-2xl rounded-tr-2xl"
            } bg-zinc-800 text-white p-6 shadow-lg w-1/2`}
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{project.description}</p>
            <ul className="flex gap-2 mt-5 flex-wrap">
              {project.skill.map((s, i) => {
                return (
                  <li
                    key={i}
                    className="bg-[rgba(255,255,255,0.1)] border border-[rgba(235,209,164,0.5)] px-2 font-thin text-sm py-1 rounded"
                  >
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
          {index % 2 === 0 && (
            <div className="w-1/2 pl-8 text-zinc-500 text-sm tracking-wider">{project.oppositeContent}</div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Timeline;
