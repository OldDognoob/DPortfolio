import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";

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
