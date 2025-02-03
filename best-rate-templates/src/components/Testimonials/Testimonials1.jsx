import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Testimonials1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    {
      name: "John Smith",
      text: "Best-Rate has completely transformed how I manage my finances. Their expert guidance and personalized service made all the difference.",
      role: "Business Owner",
    },
    {
      name: "Sarah Johnson",
      text: "I'm extremely satisfied with the professional and thorough service provided by Best-Rate. They helped me achieve my financial goals.",
      role: "Entrepreneur",
    },
    {
      name: "Michael Brown",
      text: "The team at Best-Rate goes above and beyond. Their knowledge and dedication to client success is unmatched in the industry.",
      role: "Real Estate Investor",
    },
  ];

  return (
    <section className="testimonials bg-light-alt section">
      <Container>
        {/* <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <span className="subtitle">Testimonials</span>
            <h2 className="title">What Our Clients Say</h2>
            <p className="text-muted">
              Read what our valued clients have to say about their experience
              working with us
            </p>
          </Col>
        </Row> */}
        <div className="text-center mb-5">
          <span className="px-3 py-2 rounded-pill mb-2">Testimonials</span>
          <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Read what our valued clients have to say about their experience
            working with us
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <div className="testimonial-card text-center p-4 bg-white shadow-sm rounded">
                    <div className="testimonial-content">
                      <p className="mb-4">{testimonial.text}</p>
                      <h4 className="mb-1">{testimonial.name}</h4>
                      <p className="text-muted mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials1;
