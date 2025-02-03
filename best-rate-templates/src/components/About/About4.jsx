import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About4 = () => {
  return (
    <section className="about section position-relative py-5">
      <div className="decorative-shape"></div>
      <Container>
        <Row className="g-5 align-items-center">
          {/* Image with Overlayed Content */}
          <Col lg={6}>
            <div className="image-container position-relative rounded-3 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
                alt="Office team meeting"
                className="img-fluid w-100"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div className="image-overlay position-absolute p-4">
                <div className="stats-icon bg-primary text-white rounded-circle p-3 mb-2">
                  <h3 className="mb-0">15+</h3>
                </div>
                <p className="fw-bold text-dark">Years of Excellence</p>
              </div>
            </div>
          </Col>

          {/* Text Content */}
          <Col lg={6}>
            <div className="text-content">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="text-muted lead mb-4">
                Over 15 years of creating innovative financial solutions, our
                journey reflects trust, collaboration, and proven success.
              </p>
              <ul className="list-unstyled text-muted mb-4">
                <li className="d-flex align-items-start mb-3">
                  <span className="icon-box text-primary me-3">✓</span>
                  <p>Unmatched expertise and guidance.</p>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="icon-box text-primary me-3">✓</span>
                  <p>Tailored strategies for unique challenges.</p>
                </li>
                <li className="d-flex align-items-start">
                  <span className="icon-box text-primary me-3">✓</span>
                  <p>Results that deliver long-term impact.</p>
                </li>
              </ul>
              <button className="btn btn-primary-outline px-4 py-2 rounded-pill">
                Learn More
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .decorative-shape {
          position: absolute;
          top: 0;
          left: -50px;
          width: 200px;
          height: 200px;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          z-index: -1;
        }
        .image-container {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        .image-overlay {
          top: 20px;
          left: 20px;
          max-width: 150px;
        }
        .stats-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
        }
        .btn-primary-outline {
          border: 2px solid #007bff;
          color: #007bff;
          transition: background-color 0.3s, color 0.3s;
        }
        .btn-primary-outline:hover {
          background-color: #007bff;
          color: #fff;
        }
        .icon-box {
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default About4;
