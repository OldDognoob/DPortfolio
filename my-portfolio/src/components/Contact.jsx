import React from "react";
import { Button } from "react-bootstrap";

function Contact() {
  const year = new Date().getFullYear();
  return (
    <section section id="contact">
      <h2>Contact Me</h2>
      <hr />
      <p></p>
      <div className="contact-me">
        <Button
          variant="outline-light"
          href="mailto:christidis.dimosthenis@gmail.com"
        >
          CONTACT ME
        </Button>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/dimoschristidis/"
        >
          LinkedIn
        </a>
        <a
          className="footer-link"
          href="https://twitter.com/DimosthenisChr1"
        >
         Twitter
        </a>
        <a className="footer-link" href="https://github.com/OldDognoob">
          Github
        </a>
        <p className="footer-p">&copy; Copyright {year} Dimos Christidis </p>
      </div>
    </section>
  );
}
export default Contact;
