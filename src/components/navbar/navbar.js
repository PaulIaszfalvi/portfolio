import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

function navbar() {
  return (
    <div className="navibar fixed-top">
      <Navbar expand="lg">
        <Navbar.Brand className="col-sm-2 col-xs-auto" href="/">
          Portfolio PI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="button-holder col-sm-10"
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
