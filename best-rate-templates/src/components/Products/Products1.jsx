import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Products1 = () => {
  const products = [
    {
      title: "Financial Planning",
      description:
        "Comprehensive financial planning tailored to your goals and future aspirations",
      icon: "💰",
    },
    {
      title: "Investment Strategy",
      description:
        "Expert investment advice and portfolio management to maximize your returns",
      icon: "📈",
    },
    {
      title: "Risk Management",
      description:
        "Protect your assets and minimize risks with our proven strategies",
      icon: "🛡️",
    },
  ];

  return (
    <section className="products-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="px-3 py-2 rounded-pill mb-2">Our Services</span>
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future
          </p>
        </div>

        <Row className="g-4">
          {products.map((product, index) => (
            <Col lg={4} key={index}>
              <div className="service-card bg-light-alt p-4 rounded-4 h-100 position-relative overflow-hidden">
                <span className="service-icon display-4 mb-3 d-block">
                  {product.icon}
                </span>
                <h3 className="h4 mb-3">{product.title}</h3>
                <p className="text-muted mb-4">{product.description}</p>
                <a
                  href="!#"
                  className="text-primary text-decoration-none d-flex align-items-center"
                >
                  Learn More <FaArrowRight className="ms-2" />
                </a>
                <div
                  className="service-card-shape position-absolute"
                  style={{
                    background:
                      "linear-gradient(45deg, #f8f9fa 25%, transparent 25%)",
                    width: "150px",
                    height: "150px",
                    bottom: "-75px",
                    right: "-75px",
                    transform: "rotate(45deg)",
                    opacity: "0.1",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products1;
