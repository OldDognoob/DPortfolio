import React from "react";
import profile from "../images/DC4.jpg";

function About() {
  return (
    <div id="about" className="about">
      <h2>A little about me!</h2>
      <img className="profile-img" src={profile} alt="profile-img" />
      <p>
        I recently completed the Full Stack Web Development and Computer Science
        program at Lambda School (and innovative, project-based software
        engineering academy based out of San Francisco, CA) Most of my projects
        are based in React-Redux management architecture, but mostly I'm
        inspired by creative and interesting web applications that are
        accessible and provide instant value to users.
        <br /> Driven by a passion for learning tools, I'm also trying to
        incorporate new features and technology, like animations, and I try to
        engage them in all my projects. I'd love to chat with you about possible
        collaborations or if you'd like to know more about my work.
        <br /> Check out my{" "}
        <a
          href="https://docs.google.com/document/d/1E1b4xoL2lrFTJAcwOz66sce2JHYscesE2f2Svfg2vV8/edit"
          target="_blank"
          rel="noreferrer noopener"
        >
          RESUME!
        </a>
      </p>
    </div>
  );
}
export default About;
