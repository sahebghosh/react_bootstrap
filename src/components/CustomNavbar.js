import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Image
          src={require("./baby.jpg")}
          width="30"
          height="30"
          roundedCircle
        />
        {" CHILDREN "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav class="navbar-nav ml-auto">
          <Nav.Link eventKey={1} href="/">
            HOME
          </Nav.Link>
          <Nav.Link eventKey={2} href="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link eventKey={3} href="/news">
            STORY
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
