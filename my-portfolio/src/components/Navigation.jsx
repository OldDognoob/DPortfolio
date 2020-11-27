import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

function Navigation() {
  const [navbar, setNavbar] = useState(false);

  function handleClick() {
    setNavbar(!navbar);
  }
  return (
    <div>
      <Navbar
        className={navbar ? "navbar active" : "navbar"}
        collapseOnSelect
        variant="light"
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand
          as={Link}
          className="pointer"
          to="landing"
          smooth={true}
          duration={1000}
        ></Navbar.Brand>
      </Navbar>
    </div>
  );
}
export default Navigation;
