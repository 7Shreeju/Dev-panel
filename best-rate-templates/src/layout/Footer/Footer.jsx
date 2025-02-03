import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GiAngularSpider } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}

      <section className="p-4 border-bottom">
        <Container className="d-flex justify-content-center justify-content-lg-between">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <FaFacebookF />
            </a>
            <a href="" className="me-4 text-reset">
              <FaXTwitter />
            </a>
            <a href="" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="" className="me-4 text-reset">
              <FaLinkedinIn />
            </a>
          </div>
          {/* Right */}
        </Container>
      </section>

      {/* Section: Social media */}

      {/* Section: Links  */}
      <section>
        <div className="container text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                 Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome /> New York, NY 10012, US
              </p>
              <p>
                <IoMdMail /> info@example.com
              </p>
              <p>
                <IoCall />+ 01 234 567 88
              </p>
              <p>
                <IoCall />+ 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright:{" "}
        <a className="text-reset fw-bold" href="https://www.digihost.in/">
          Best Rate Website
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
