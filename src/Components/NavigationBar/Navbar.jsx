import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import Logo from "../assests/Logo.png";

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="./home" className="px-5">
        <img src={Logo} alt="" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-menu" />
      <Navbar.Collapse id="navbar-menu" className="text-white navbar-menu">
        <Nav className="ms-auto pe-0 pe-md-5">
          <Nav.Link href="./home" className="text-white">
            SERVICES
          </Nav.Link>
          <Nav.Link href="./about" className="text-white">
            ABOUT US
          </Nav.Link>
          <Nav.Link href="./contact" className="text-white">
            CONTACT US
          </Nav.Link>
          <Nav.Link href="./career" className="text-white">
            CAREERS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
