import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

function Hero1() {
  return (
    <section id="home" className="hero-section">
      <Carousel
        fade
        interval={2000}
        className="hero-carousel"
        indicators={false}
      >
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              height: "100vh",
              backgroundImage: `url('https://img.freepik.com/free-vector/artificial-intelligence-ai-destroying-blue-face_1017-21767.jpg?t=st=1737455626~exp=1737459226~hmac=fd23d4c553ecc2b468ee473329d1614eb35c84d03218f71a6f825ea048023e71&w=900')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <Container className="h-100 d-flex align-items-center justify-content-center text-center">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h1 className="display-4 fw-bold text-primary mb-4">
                  Welcome to Best Rate
                </h1>
                <p className="lead mb-4">
                  Providing the best financial solutions for your business
                  growth
                </p>
                <button className="btn btn-primary btn-lg rounded-pill px-5 hover-scale">
                  Get Started
                </button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              height: "100vh",
              backgroundImage: `url('https://img.freepik.com/free-photo/robot-handshake-human-background-artificial-intelligence-digital-transformation_53876-129769.jpg?t=st=1737455679~exp=1737459279~hmac=f8fe39367c4caefe60d481e9516c8827cbc129ee51fd0d20fcb60d4cc9fd6b8e&w=900')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <Container className="h-100 d-flex align-items-center justify-content-center text-center">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h1 className="display-4 fw-bold text-primary mb-4">
                  Professional Financial Services
                </h1>
                <p className="lead mb-4">
                  Expert guidance to help you achieve your financial goals
                </p>
                <button className="btn btn-primary btn-lg rounded-pill px-5 hover-scale">
                  Our Services
                </button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              height: "100vh",
              backgroundImage: `url('https://img.freepik.com/free-photo/robot-with-laptop-computer-mouse_1048-3560.jpg?t=st=1737455780~exp=1737459380~hmac=35e58813bdb446016c98b7ed47d739866bbb46de629d5dbd009504687b8de395&w=900')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <Container className="h-100 d-flex align-items-center justify-content-center text-center">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h1 className="display-4 fw-bold text-primary mb-4">
                  Trusted by Thousands
                </h1>
                <p className="lead mb-4">
                  Join our satisfied clients and experience excellence in
                  service
                </p>
                <button className="btn btn-primary btn-lg rounded-pill px-5 hover-scale">
                  Contact Us
                </button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <style jsx>{`
        .hero-section {
          height: 100vh;
        }
        .hero-carousel {
          height: 100vh;
        }
        .hero-carousel .carousel-image {
          position: relative;
        }
        .hero-carousel .carousel-inner {
          height: 100vh;
          position: relative;
        }

        .carousel-content {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.8s forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .carousel-indicators {
          bottom: 40px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(1);
        }
      `}</style>
    </section>
  );
}

export default Hero1;
