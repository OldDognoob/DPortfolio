import React, { useState } from "react";
import "bootstrap/dict/css/bootstrap.css";
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
        >
          <HomeIcon/>
        </Navbar.Brand>
        <Navbar.Toggle
        onClick={handleClick}
        ara-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as ={Link} to="about"smooth={true} duration={1000}>
              About
            </Nav.Link>
            <Nav.Link as ={Link} to="about"smooth={true} duration={1500}>
              Skills
            </Nav.Link>
            <Nav.Link as ={LinkRoute} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as ={Link} to="about"smooth={true} duration={2000}>
              Contact
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;
