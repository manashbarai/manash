import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const LeftSocialMedia = (props) => {
  const openLinkSite = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="fromBottom start-36 ">
      <div className="flex flex-col gap-4 justify-center items-center h-[250px] w-[50px] group">
        <FaGithub
          onMouseEnter={() => props.sizeIncrese(1)}
          onMouseLeave={() => props.sizeIncrese(20)}
          size={40}
          className="text-zinc-300 cursor-pointer text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          onClick={() => openLinkSite("https://github.com/manashbarai")}
        />
        <FaLinkedinIn
          onMouseEnter={() => props.sizeIncrese(1)}
          onMouseLeave={() => props.sizeIncrese(20)}
          size={40}
          className="text-zinc-300 cursor-pointer text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          onClick={() =>
            openLinkSite(
              "https://www.linkedin.com/in/manash-barai-077606209/"
            )
          }
        />
        <FaTwitter
          onMouseEnter={() => props.sizeIncrese(1)}
          onMouseLeave={() => props.sizeIncrese(20)}
          size={40}
          className="text-zinc-300 cursor-pointer text-2xl shadow-lg hover:scale-125 transition-all duration-300 rounded-full max-w-12 p-1 max-h-20"
          onClick={() => openLinkSite("https://x.com/manashjbarai")}
        />

        {/* Line div that changes on hover */}
        <div className="w-[1px] h-[150px] bg-zinc-300 transition-all duration-300 group-hover:bg-[rgb(235, 209, 164)] group-hover:shadow-[0_0_10px_2px_rgba(235,209,164,0.5)]"></div>
      </div>
    </div>
  );
};

export default LeftSocialMedia;
