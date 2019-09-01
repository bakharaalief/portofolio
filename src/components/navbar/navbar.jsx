import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.scss";

export default function navbar() {
  return (
    <div className="navbar">
      <Navbar bg="" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="#home">Bakhara Alief</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
