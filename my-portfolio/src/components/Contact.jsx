import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "react-bootstrap";

function Contact() {
  //the getFullYear method returns the year of the specified date according to local time.
  // eslint-disable-next-line no-unused-vars
  const year = new Date().getFullYear();
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <hr />

      <div className="contact-me">
        <p>Would love to get in touch with you and have a chat!</p>
        <a
          // variant="outline-light"
          href="mailto:christidis.dimosthenis@gmail.com"
          className="email social"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          {/* CONTACT ME */}
        </a>
        <a
          href="https://www.linkedin.com/in/dimoschristidis/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          {/* Linkedin */}
        </a>
        <a
          href="https://twitter.com/DimosthenisChr1"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          {/* Twitter */}
        </a>
        <a href="https://github.com/OldDognoob" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <p className="footer-p">Dimos Christidis {year}.</p>
      </div>
    </section>
  );
}
export default Contact;
