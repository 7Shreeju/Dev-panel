import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hero4() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <div className="hero-content">
                <span className="badge bg-warning text-dark px-3 py-2 mb-4">
                  Trusted Financial Partner
                </span>
                <h1 className="hero-title mb-4">
                  Building Your{" "}
                  <span className="text-primary">Financial Future</span>{" "}
                  Together
                </h1>
                <p className="hero-text mb-5">
                  Discover personalized financial strategies that help you
                  achieve your goals. Our expert team is here to guide you every
                  step of the way.
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-primary btn-lg me-3 rounded-pill">
                    Get Started Now
                  </button>
                  <button className="btn btn-link btn-lg text-dark">
                    <span className="me-2">Learn More</span> →
                  </button>
                </div>
                <div className="hero-stats mt-5">
                  <div className="stat-box">
                    <h3>10K+</h3>
                    <p>Happy Clients</p>
                  </div>
                  <div className="stat-box">
                    <h3>$2B+</h3>
                    <p>Assets Managed</p>
                  </div>
                  <div className="stat-box">
                    <h3>20+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-image-wrapper">
                <div className="image-card main-image">
                  <img
                    src="https://img.freepik.com/free-photo/environmental-pollution-factory-exterior_23-2149057714.jpg?t=st=1737633018~exp=1737636618~hmac=5166ab686caa670b9c24d9ed157100fccf8e498b31bca2c11eaf59d273f19207&w=740"
                    alt="Financial Planning"
                    className="img-fluid"
                  />
                </div>
                <div className="image-card card-1">
                  <div className="stat-highlight">
                    <span className="number">98%</span>
                    <span className="text">Success Rate</span>
                  </div>
                </div>
                <div className="image-card card-2">
                  <div className="trusted-badge">
                    <span className="icon">✓</span>
                    <span className="text">Trusted Advisor</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .hero-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: relative;
          padding: 60px 0;
        }

        .shape-1,
        .shape-2 {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          background: rgba(var(--bs-primary-rgb), 0.05);
          top: -250px;
          right: -100px;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: rgba(var(--bs-warning-rgb), 0.05);
          bottom: -150px;
          left: -150px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .hero-text {
          font-size: 1.2rem;
          color: #6c757d;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat-box {
          text-align: center;
        }

        .stat-box h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--bs-primary);
          margin-bottom: 0.5rem;
        }

        .stat-box p {
          color: #6c757d;
          margin: 0;
        }

        .hero-image-wrapper {
          position: relative;
          height: 500px;
        }

        .image-card {
          position: absolute;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .main-image {
          width: 80%;
          height: 400px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          overflow: hidden;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-1 {
          left: 0;
          top: 20%;
          padding: 20px;
          background: var(--bs-primary);
          color: white;
        }

        .card-2 {
          left: 10%;
          bottom: 10%;
          padding: 15px;
        }

        .stat-highlight .number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
        }

        .trusted-badge {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trusted-badge .icon {
          background: var(--bs-warning);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 991.98px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-image-wrapper {
            margin-top: 3rem;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero4;
