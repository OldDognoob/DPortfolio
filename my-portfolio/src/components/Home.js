import React from "react";
import Navigation from "./Navigation";
import Landing from "./Landing";
import About from "./About";
import MySkills from "./MySkills";
import Contact from "./Contact";
import Works from "./Works";

function Home() {
  return (
    <div className="home__components">
      <Navigation />
      <Landing />
      <About />
      <MySkills />
      <Works />
      <Contact />
    </div>
  );
}

export default Home;
