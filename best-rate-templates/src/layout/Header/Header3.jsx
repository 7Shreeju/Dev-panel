import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaSearch, FaUserCircle } from "react-icons/fa";

const Header3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
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
    <header className={`header-3 ${isScrolled ? "scrolled" : ""}`}>
      {/* Contact Bar */}
      <div className="bg-primary py-1">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="contact-info d-flex">
              <a href="tel:+1234567890" className="text-white me-4">
                <FaPhoneAlt className="me-2" size={12} />
                <small>+1 234 567 890</small>
              </a>
              <a href="mailto:info@bestrate.com" className="text-white">
                <FaEnvelope className="me-2" size={12} />
                <small>info@bestrate.com</small>
              </a>
            </div>
            <div className="user-actions">
              <a href="#login" className="text-white me-3">
                <small>Login</small>
              </a>
              <a href="#register" className="text-white">
                <small>Register</small>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar expand="lg" className="bg-white py-3">
        <Container>
          <Navbar.Brand href="#home" className="me-5">
            <span className="h3 mb-0 fw-bold">
              <span className="text-primary">Best</span>Rate
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />

          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto">
              <Link to="#home" className="nav-link px-3">
                Home
              </Link>
              <Link to="#about" className="nav-link px-3">
                About Us
              </Link>
              <Link to="#services" className="nav-link px-3">
                Services
              </Link>
              <Link to="#products" className="nav-link px-3">
                Products
              </Link>
              <Link to="#contact" className="nav-link px-3">
                Contact
              </Link>
            </Nav>

            <div className="header-actions d-flex align-items-center">
              <button className="btn text-muted me-3">
                <FaSearch size={18} />
              </button>
              <button className="btn text-muted me-3">
                <FaUserCircle size={20} />
              </button>
              <button className="btn btn-primary rounded-pill px-4">
                Get Quote
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header3;
