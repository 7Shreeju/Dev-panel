import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    dots: true,
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial bg-light-alt">
      <div className="heading">
        <Row className="justify-content-center">
          <Col lg={4}>
            <h2>Testimonial</h2>
          </Col>
        </Row>
      </div>
      <Slider {...settings}>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="testimonial-item">
            <div className="box">
              <figure className="image">
                <div className="img"></div>
              </figure>
              <div className="test-component">
                <h4>Efecha Omoware</h4>
                <p>
                  I now enjoy financial freedom like I’ve never known before
                  doing what I love.I now enjoy financial freedom like I’ve
                  never known before doing what I love.I now enjoy financial
                  freedom like I’ve never known before doing what I love.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
