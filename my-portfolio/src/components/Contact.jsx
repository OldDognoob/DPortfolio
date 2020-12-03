/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

function Contact() {
    const year = new Date().getFullYear();
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <hr />
      <div className="contact-me">
        <p>Would love to get in touch with you and have a chat!</p>
        <Button
          variant="outline-light"
          href="mailtop:christidis.dimosthenis@gmai.com"
        >
          CONTACT ME
        </Button>
        <a
          href="https://www.linkedin.com/in/dimoschristidis/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
          Linkedin
        </a>
        <a
          href="https://twitter.com/DimosthenisChr1"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
          Twitter
        </a>
        <a href="https://github.com/OldDognoob" className="github social">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
      </div>
    </section>
  );
}
export default Contact;
