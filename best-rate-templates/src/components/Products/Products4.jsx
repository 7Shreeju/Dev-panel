import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products4 = () => {
  const products = [
    {
      title: "Financial Planning",
      description:
        "Comprehensive financial planning tailored to your goals and future aspirations.",
      icon: "💰",
    },
    {
      title: "Investment Strategy",
      description:
        "Expert investment advice and portfolio management to maximize your returns.",
      icon: "📈",
    },
    {
      title: "Risk Management",
      description:
        "Protect your assets and minimize risks with proven strategies.",
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
    <section className="products-section section">
      <Container>
        <div className="text-center mb-5">
          {/* <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Services
          </span> */}
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future.
          </p>
        </div>

        <Slider {...settings} className="products-slider">
          {products.map((product, index) => (
            <div key={index} className="px-3">
              <div className="service-card">
                <div className="service-card-header">
                  <span className="service-icon">{product.icon}</span>
                  <h3 className="h5 fw-bold mt-3">{product.title}</h3>
                </div>
                <div className="service-card-body">
                  <p className="text-muted">{product.description}</p>
                  <a
                    href="#"
                    className="btn btn-primary w-100 rounded-pill d-inline-flex align-items-center justify-content-center"
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
        .products-section {
          // background: linear-gradient(135deg, #e3f2fd, #f1f8e9);
          padding: 60px 0;
        }
        .products-slider .slick-dots {
          bottom: -30px;
        }
        .products-slider .slick-dots li button:before {
          // color: var(--bs-primary);
          font-size: 10px;
        }
        .products-slider .slick-dots li.slick-active button:before {
          // color: var(--bs-primary);
        }
        .service-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .service-card-header .service-icon {
          font-size: 50px;
          color: var(--bs-primary);
        }
        .service-card-body {
          margin-top: 20px;
          flex: 1;
        }
        .btn {
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .btn:hover {
          background-color: var(--bs-primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .slick-initialized .slick-slide {
          padding: 10px;
        }
      `}</style>
    </section>
  );
};

export default Products4;
