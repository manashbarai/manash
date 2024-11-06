import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const LeftSocialMedia = () => {
  return (
    <div className="fixed start-36 bottom-0">
      <div className="flex flex-col gap-4 justify-center items-center h-[250px] w-[50px] group">
        <FaGithub
          size={40}
          className="text-gray-300 text-2xl shadow-lg hover:scale-110  hover:shadow-[0_0_10px_7px_rgba(100,255,218,0.5)] transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
        />
        <FaLinkedinIn
          size={40}
          className="text-gray-300 text-2xl shadow-lg hover:scale-110  hover:shadow-[0_0_10px_7px_rgba(100,255,218,0.5)] transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
        />
        <FaTwitter
          size={40}
          className="text-gray-300 text-2xl shadow-lg hover:scale-110  hover:shadow-[0_0_10px_7px_rgba(100,255,218,0.5)] transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
        />

        {/* Line div that changes on hover */}
        <div className="w-[1px] h-[150px] bg-gray-300 transition-all duration-300 group-hover:bg-[#64ffda] group-hover:shadow-[0_0_10px_2px_rgba(100,255,218,0.5)]"></div>
      </div>
    </div>
  );
};

export default LeftSocialMedia;
