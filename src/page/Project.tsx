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
      project: [
        {
          icon: "/satta.png",
          title: "Kokata Satta",
          url: "https://kolkatasattapro.in/",
          description:
            "Gali, Desawer, Gaziabad, Faridabad, India Bazar - In sabhi SATTA KING game ke liye apko leak number advance mein milega. App Us Number Ko Lagakar lakho rupey",
        },
        {
          icon: "/jyoti.png",
          title: "Designer Portfolio",
          url: "https://jyoti-iota.vercel.app/",
          description:
            "A clean and minimal designer portfolio should showcase your skills, projects, and case studies with a modern, user-friendly layout. Highlight  expertise with visual representations of tools, include detailed case studies ",
        },
        {
          icon: "/jyoti.png",
          title: "Designer Portfolio",
          url: "https://jyoti-iota.vercel.app/",
          description:
            "A clean and minimal designer portfolio should showcase your skills, projects, and case studies with a modern, user-friendly layout. Highlight  expertise with visual representations of tools, include detailed case studies ",
        },
        {
          icon: "/wappi.png",
          title: "Thewaapi",
          url: "https://app.thewaapi.com/",
          description:
            "(Client Part) For a clean front-end design resembling WhatsApp with vendor chat integration, create a chat interface with a simple layout. Include a sidebar with vendor details and a chat window displaying messages in a conversation format",
        },
        {
          icon: "/",
          title: "Nightteer (Moble App )",
          url: "",
          description: "Running Project",
        },
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
      ],
      project: [
        {
          icon: "/crm.png",
          title: "CRM",
          url: "https://crm.edureify.com/",
          description:
            "A CRM system where a Super Admin manages admins, users, and leads. Super Admin can upload and assign leads, with status options: calling (active follow-up) or normal (inactive). Admins assign tasks, while users update lead status and log calls. Dashboards show lead progress and performance analytics.",
        }
        
      ],
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
      project: [
        {
          icon: "/tap2hire.png",
          title: "Tap2Hire",
          url: "http://tap2hires.com/",
          description:
            "A job portal for IT roles with three user roles: Admin, Recruiter, and Job Seeker. Admin oversees site functions, Recruiters create and post jobs, and Job Seekers apply for listed positions. The portal facilitates job applications, profile management, and a streamlined hiring process tailored for the IT industry.",
        },
        {
          icon: "/easyForm.svg",
          title: "Easy Form",
          url: "https://forms.edureify.com/",
          description:
            "A dynamic form integration allows customizable form fields like text inputs, selects, and checkboxes. You can send the form data to any recipient via API or email, and receive responses. The fields are generated based on a configuration, making the form adaptable for different use cases and recipients. ",
        }
        
      ],
    },
    Siliconpin: {
      role: "Intern @ Siliconpin",
      duration: "jan 2021 – Oct 2022",
      description: [
        "Contributed to various UI design projects, implementing responsive and interactive designs using HTML, CSS, JavaScript, and Vue.js.",
        "Followed senior developers' guidance and specifications to ensure proper code structure and functionality.",
        "Collaborated closely with senior developers and designers to transform design prototypes into fully functional and user-friendly web interfaces.",
      ],
      project: [
       
        {
          icon: "/tenny.jpeg",
          title: "Teeny Beans",
          url: "https://teenybeans.in/",
          description:
            "A non franchise preschool model allows you to break free from the limitations of a play school franchise. With a non franchise pre school model, you can expect greater profitability, operational freedom, ",
        }
        
      ],
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
    <div className="bg-gray-900 text-white min-h-screen flex w-1/2 m-auto flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 w-full">Experience</h2>
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
    </div>
  );
};

export default Experience;
