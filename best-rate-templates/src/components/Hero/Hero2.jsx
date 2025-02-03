import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hero2() {
  return (
    <section id="home" className="hero-section hero-3">
      <div className="hero-image">
        <div className="overlay"></div>
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg={6} className="text-white">
              <div className="hero-content animate__animated animate__fadeInLeft">
                <span className="text-primary text-uppercase fw-bold mb-3 d-block">
                  Welcome to Best Rate
                </span>
                <h1 className="display-3 fw-bold mb-4">
                  Professional Financial Services
                </h1>
                <p className="lead mb-5 text-light-alt">
                  Expert guidance to help you achieve your financial goals. Join
                  our satisfied clients and experience excellence in service.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg rounded-pill px-4 hover-scale">
                    Get Started
                  </button>
                  <button className="btn btn-outline-light btn-lg rounded-pill px-4 hover-scale">
                    Learn More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .hero-section {
          height: 100vh;
          position: relative;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-content {
          animation: fadeInLeft 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Hero2;
