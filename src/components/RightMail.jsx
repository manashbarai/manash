import React from "react";

const RightMail = () => {
  return (
    <div className="fixed start-24 bottom-0">
      <div className="flex flex-col gap-24 justify-center items-center h-[250px] w-[50px] group">
        <a
          href="mailto:manashjbarai@gmail.com"
          className="text-gray-300 -rotate-90 hover:scale-110 inline-block -ml-1 tracking-wide text-xm hover:text-[#64ffda] transition-all duration-300"
        >
          <span className="group-hover:text-shadow-[0px_0px_10px_rgba(100,255,218,0.5)] ">
            manashjbarai@gmail.com
          </span>
        </a>

        {/* Line div that changes on hover */}
        <div className="w-[1px] h-[150px] bg-gray-300 group-hover:bg-[#64ffda] group-hover:shadow-[0_0_10px_2px_rgba(100,255,218,0.5)] transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default RightMail;
