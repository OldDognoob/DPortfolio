import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";

function Buttons(props) {
  return (
    <Button
      as={Link}
      to={props.link}
      smooth={props.smoothScroll}
      duration={500}
      variant={props.variant}
      size={props.size}
    >
      {props.text}
    </Button>
  );
}

export default Buttons;
