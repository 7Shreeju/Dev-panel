import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products2 = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products-section section bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Services
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future
          </p>
        </div>

        <Slider {...settings} className="products-slider">
          {products.map((product, index) => (
            <div key={index} className="px-3">
              <div className="service-card bg-white rounded-4 h-100">
                <div className="service-card-header p-4 bg-primary text-white rounded-top-4">
                  <span className="service-icon display-4 mb-2 d-block">
                    {product.icon}
                  </span>
                  <h3 className="h4 mb-0">{product.title}</h3>
                </div>
                <div className="service-card-body p-4">
                  <p className="text-muted mb-4">{product.description}</p>
                  <div className="service-features mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2 text-primary">✓</span>
                      <span className="small">Personalized Approach</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2 text-primary">✓</span>
                      <span className="small">Expert Guidance</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span>
                      <span className="small">Regular Updates</span>
                    </div>
                  </div>
                  <a
                    href="!#"
                    className="btn btn-outline-primary w-100 rounded-pill d-inline-flex align-items-center justify-content-center"
                  >
                    Learn More <FaArrowRight className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
      <style jsx>{`
        .products-slider .slick-dots {
          bottom: -40px;
        }
        .products-slider .slick-dots li button:before {
          color: var(--bs-primary);
          font-size: 10px;
        }
        .products-slider .slick-dots li.slick-active button:before {
          color: var(--bs-primary);
        }
        .service-card {
          position: relative;
          overflow: hidden;
          min-height: 450px;
          display: flex;
          flex-direction: column;
          box-shadow: 2px 2px 32px rgb(0 0 0 / 14%);
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        .service-card-header {
          text-align: center;
        }
        .service-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .slick-initialized .slick-slide {
          padding: 20px 0;
        }
      `}</style>
    </section>
  );
};

export default Products2;
