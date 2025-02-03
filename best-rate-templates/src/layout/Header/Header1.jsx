import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          <span className="text-primary">Best</span> Rate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="#home" className="mx-2 nav-link">
              Home
            </Link>
            <Link to="#about" className="mx-2 nav-link">
              About
            </Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="mx-2"
            >
              <NavDropdown.Item href="#products">Products</NavDropdown.Item>
              <NavDropdown.Item href="#testimonials">
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item href="#gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
            <Link to="#contact" className="mx-2 nav-link">
              Contact
            </Link>
            {/* <Link to="/">Template</Link> */}
            <Link to="/" className="mx-2 nav-link">
              Template1
            </Link>
          </Nav>
          <div className="d-flex">
            {/* <button className="btn btn-primary rounded-pill px-4">
              Get Started
            </button> */}
            <button className="btn btn-primary rounded-pill px-3 hover-scale">
              Our Services
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header1;
