import React, { useRef, useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import SwingingDiv from "./components/SwingingDiv";
import NoiseBackground from "./components/NoiseBackground";
import LeftSocialMedia from "./components/LeftSocialMedia";
import ProfileSection from "./page/Home";
import RightMail from "./components/RightMail";

import "./index.css";
import Navbar from "./components/Navbar";
import Experience from "./page/Project";
import AboutMe from "./page/About";
import ProjectList from "./page/Project2";
import ContactForm from "./page/Contact";

const App = () => {
  const [size, setSize] = useState(20);
  const [value, setValue] = useState(900);

  const sizeIncrese = (s, v) => {
    setValue(v);
    setSize(s);
  };

  // Define light ref for SwingingDiv
 

  return (
    <div className=" bg-zinc-900">
      <Navbar/>
      <NoiseBackground />
      <LeftSocialMedia sizeIncrese={sizeIncrese} />
      <RightMail sizeIncrese={sizeIncrese} />


      <section id="home"><ProfileSection sizeIncrese={sizeIncrese} /></section>
      <section id="about"> <AboutMe/> </section>
<section id="experience"> <Experience /> </section>
<section id="project"> <ProjectList /> </section>
<section id="contact"> <ContactForm/> </section>

      

      {/* Correctly assign the ref here */}
     
        <SwingingDiv />
     

      <Cursor size={size} value={value} />
    </div>
  );
};

export default App;
