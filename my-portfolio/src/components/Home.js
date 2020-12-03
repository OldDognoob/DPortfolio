import React from "react";
import Navigation from "./Navigation";
import Landing from "./Landing";
import About from "./About";
import MySkills from "./MySkills";
import Contact from "./Contact";
// import Map from "./Map";
import Works from "./Works";

// const location ={
//   address:'8 Chrysochooy Street, Larisa, Greece',
//   lat:39.6390,
//   lng:22.4191
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
      {/* <Map location={location} zoomLevel={17}/> */}
    </div>
  );
}

export default Home;
