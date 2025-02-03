import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Header4 = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary py-1">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none d-md-flex">
              <span className="text-white me-3">
                <small>Free shipping on orders over $50</small>
              </span>
            </div>
            <div className="d-flex text-white">
              <a href="#" className="text-white me-3">
                <small>Track Order</small>
              </a>
              <a href="#" className="text-white">
                <small>Help</small>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <Navbar
        expand="lg"
        className={`bg-light-alt py-3 ${
          isScrolled ? "fixed-top shadow-sm" : ""
        }`}
        style={{ transition: "all 0.3s ease" }}
      >
        <Container>
          <div className="d-flex align-items-center w-100">
            {/* Mobile Menu Toggle */}
            <div className="d-lg-none me-3">
              <FaBars
                className="fs-4"
                onClick={handleShow}
                style={{ cursor: "pointer" }}
              />
            </div>

            {/* Logo */}
            <Navbar.Brand href="#home" className="me-4">
              <span className="fw-bold fs-3">
                <span className="text-primary">Best</span>Rate
              </span>
            </Navbar.Brand>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex flex-grow-1">
              <Nav className="mx-auto">
                <Link to="#home" className="nav-link px-3 fw-medium">
                  Home
                </Link>
                <Link to="#about" className="nav-link px-3 fw-medium">
                  About
                </Link>
                <NavDropdown title="Shop" id="shop-dropdown" className="px-2">
                  <NavDropdown.Item href="#new-arrivals">
                    New Arrivals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#best-sellers">
                    Best Sellers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#sale">Sale</NavDropdown.Item>
                </NavDropdown>
                <Link to="#contact" className="nav-link px-3 fw-medium">
                  Contact
                </Link>
              </Nav>
            </div>

            {/* Header Icons */}
            <div className="d-flex align-items-center">
              <button className="btn btn-link text-dark me-3">
                <FaFacebookF />
              </button>
              <button className="btn btn-link text-dark me-3">
                <FaTwitter />
              </button>
              <button className="btn btn-link text-dark position-relative">
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton className="border-bottom">
              <Offcanvas.Title className="fw-bold">
                <span className="text-primary">Best</span>Rate
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Link
                  to="#home"
                  className="nav-link py-2"
                  onClick={handleClose}
                >
                  Home
                </Link>
                <Link
                  to="#about"
                  className="nav-link py-2"
                  onClick={handleClose}
                >
                  About
                </Link>
                <NavDropdown title="Shop" id="mobile-shop-dropdown">
                  <NavDropdown.Item href="#new-arrivals" onClick={handleClose}>
                    New Arrivals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#best-sellers" onClick={handleClose}>
                    Best Sellers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#sale" onClick={handleClose}>
                    Sale
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  to="#contact"
                  className="nav-link py-2"
                  onClick={handleClose}
                >
                  Contact
                </Link>
                <hr />
                <div className="mt-4">
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-dark">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-dark">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-dark">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header4;
