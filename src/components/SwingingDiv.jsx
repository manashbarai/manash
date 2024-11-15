import React, { useRef, useState } from "react";

// Import the sound file (make sure the path is correct)
import clickSound from "/audio/click.wav"; // Adjust the path accordingly
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const SwingingDiv = () => {
  // State to manage the color of the valve
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the click event
  const handleClick = () => {
    const audio = new Audio(clickSound); // Create a new Audio object with the sound
    audio.play(); // Play the sound
    setIsClicked((prevState) => !prevState); // Toggle the clicked state
  };
  const light = useRef(null);

 

  
  return (
    <div  className=" topTo  lg:right-24 md:right-24 right-0   lg:h-[500px] md:h-[500px] lg:w-52 md:w-40 w-28 origin-top md:block swinging">
      <div className="relative left-[98px] h-[200px] w-1 bg-black"></div>
      <div className="relative left-[92px] h-[20px] w-4 bg-zinc-500">
        <div
          className="relative right-px h-[2px] w-[18px] bg-zinc-700 dark:bg-zinc-400"
          style={{ top: "4px" }}
        ></div>
        <div
          className="relative right-px h-[2px] w-[18px] bg-zinc-700 dark:bg-zinc-400"
          style={{ top: "7px" }}
        ></div>
        <div
          className="relative right-px h-[2px] w-[18px] bg-zinc-700 dark:bg-zinc-400"
          style={{ top: "10px" }}
        ></div>
      </div>
      <div
        tabIndex={0}
        role="button"
        onClick={handleClick} // Attach the click handler
        className={`relative bottom-[2px] left-[80px] z-[-1] size-[40px] cursor-pointer rounded-full 
          ${isClicked ? "bg-blue-500" : "bg-zinc-600"} 
          dark:${isClicked ? "bg-blue-700" : "bg-zinc-700"} `}
        style={{
          boxShadow: isClicked ? "rgb(235, 209, 164) 0px 0px 300px 77px" : "",
          backgroundColor: isClicked ? "rgba(226, 211, 161, 0.85)" : "",
        }}
      >
        <div
          style={{
            borderRadius: "5px / 2.5px",
            border: "black solid 1px",
            top: "0",
          }}
          className="relative left-[15px] h-[5px] w-[10px]"
        ></div>
        <div
          style={{
            borderRadius: "5px / 2.5px",
            border: "black solid 1px",
            top: "-3px",
          }}
          className="relative left-[15px] h-[5px] w-[10px]"
        ></div>
        <div
          style={{
            borderRadius: "5px / 2.5px",
            border: "black solid 1px",
            top: "-6px",
          }}
          className="relative left-[15px] h-[5px] w-[10px]"
        ></div>
        <div
          style={{
            borderRadius: "5px / 2.5px",
            border: "black solid 1px",
            top: "-9px",
          }}
          className="relative left-[15px] h-[5px] w-[10px]"
        ></div>
        <div
          style={{
            borderRadius: "5px / 2.5px",
            border: "black solid 1px",
            top: "-12px",
          }}
          className="relative left-[15px] h-[5px] w-[10px]"
        ></div>
      </div>
    </div>
  );
};

export default SwingingDiv;
