import React, { useRef, useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import SwingingDiv from "./components/SwingingDiv";
import NoiseBackground from "./components/NoiseBackground";
import LeftSocialMedia from "./components/LeftSocialMedia";
import ProfileSection from "./page/Home";
import RightMail from "./components/RightMail";

import "./index.css";

const App = () => {
  const [size, setSize] = useState(20);
  const [value, setValue] = useState(900);

  const sizeIncrese = (s, v) => {
    setValue(v);
    setSize(s);
  };

  // Define light ref for SwingingDiv
 

  return (
    <div className="h-[100vh] bg-zinc-800">
      <NoiseBackground />
      <ProfileSection sizeIncrese={sizeIncrese} />
      <LeftSocialMedia sizeIncrese={sizeIncrese} />
      <RightMail sizeIncrese={sizeIncrese} />

      {/* Correctly assign the ref here */}
     
        <SwingingDiv />
     

      <Cursor size={size} value={value} />
    </div>
  );
};

export default App;
