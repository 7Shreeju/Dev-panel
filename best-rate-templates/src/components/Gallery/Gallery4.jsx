import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { Container } from "react-bootstrap";
const Gallery4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For devices with width < 768px
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          centerMode: false, // Disable center mode on mobile
          focusOnSelect: false, // Disable focus on select on mobile
        },
      },
      {
        breakpoint: 1024, // For devices with width < 1024px
        settings: {
          slidesToShow: 3, // Show 2 slides on tablet
        },
      },
    ],
  };

  const images = [
    "https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
  ];
  return (
    <section className="gallery section">
      <Container>
        <div className="text-center mb-5">
          {/* <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
          Our Gallery
        </span> */}
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future.
          </p>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-3">
              <div className="text-center  bg-white shadow-sm rounded gallery-img">
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="img-fluid rounded "
                />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
      <style jsx>{`
        .gallery-img {
          overflow: hidden;
        }
        .gallery-img img {
          transition: all 0.3s linear;
        }
        .gallery-img:hover img {
          scale: 1.1;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Gallery4;
