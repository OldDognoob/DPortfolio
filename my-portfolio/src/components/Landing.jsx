import React from "react";
import Buttons from "./Buttons";

function Landing() {
  return (
    <section id="landing">
      <div className="landing-container">
        <h1>Hello, my name is Dimos Christidis</h1>
        <p>a Front-end Developer</p>
        <Buttons
          text="See More"
          link="About"
          smoothScroll="true"
          variant="outline-dark"
          size="lg"
        />
      </div>
    </section>
  );
}
export default Landing;
