import React from "react";
import Navigation from "./Navigation";
import Landing from "./Landing";
import About from "./About";
import MySkills from "./MySkills";
import Contact from "./Contact";

import Works from "./Works";

// const location ={
//   address:'8 Chrysochooy Street, Larisa, Greece',
//   lat:39.643452,
//   lng:22.413208
// }

function Home() {
  return (
    <div className="home__components">
      <Navigation />
      <Landing />
      <About />
      {/* <MySkills /> */}
      {/* <Works /> */}
      <Contact />
    </div>
  );
}

export default Home;
