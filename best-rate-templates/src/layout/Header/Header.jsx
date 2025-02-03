import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Best Rate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="#home" className="mx-2 nav-link">
              Home
            </Link>
            {/* <Nav.Link href="#home">USPS</Nav.Link> */}
            <Link to="#home" className="mx-2 nav-link">
              About
            </Link>
            <Link to="#home" className="mx-2 nav-link">
              Products
            </Link>
            <Link to="#home" className="mx-2 nav-link">
              Testimonials
            </Link>
            <Link to="#home" className="mx-2 nav-link">
              Gallery
            </Link>
            <Link to="#home" className="mx-2 nav-link">
              Contact Us
            </Link>
            {/* <Link to="base-template-2">Template2</Link> */}
            <Link to="base-template-1" className="mx-2 nav-link">
              Template1
            </Link>
            <Link to="base-template-2" className="mx-2 nav-link">
              Template2
            </Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
