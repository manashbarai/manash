import React from "react";

const RightMail = (props) => {
  return (
    <div className="fromBottom start-24">
      <div className="flex flex-col gap-24 justify-center items-center h-[250px] w-[50px] group">
        <a
          href="mailto:manashjbarai@gmail.com"
          className="text-gray-300 -rotate-90 inline-block -ml-1  tracking-wide text-xm hover:scale-110 mb-2 transition-all duration-300"
        >
          <span 
          
          onMouseEnter={() => props.sizeIncrese(50,100)}
          onMouseLeave={() => props.sizeIncrese(20,900)}
          className="hover:text-[rgb(235, 209, 164)] ">
            manashjbarai@gmail.com
          </span>
        </a>

        {/* Line div that changes on hover */}
        <div className="w-[1px] h-[150px] bg-gray-300 group-hover:bg-[rgb(235, 209, 164)] group-hover:shadow-[0_0_10px_2px_rgba(235,209,164,0.5)] transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default RightMail;
