import React from "react";
import { useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Import required lightgallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import { Container, Row, Col } from "react-bootstrap";

const Gallery1 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const galleryImages = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Massimiliano Morosinotto",
      photographerLink: "https://unsplash.com/@therawhunter",
      location: "Tre Cime di Lavaredo, Italia",
      locationLink:
        "https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia",
      caption: "This is the Way",
      description:
        "Stunning mountain landscape captured at sunrise, showcasing nature's raw beauty.",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Sascha Bosshard",
      photographerLink: "https://unsplash.com/@thesaboo",
      location: "Pizol, Mels, Schweiz",
      locationLink: "https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz",
      description:
        "Majestic Swiss Alps vista showing the pristine snow-covered peaks.",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Yusuf Evli",
      photographerLink: "https://unsplash.com/@yusufevli",
      caption: "Foggy Road",
      description:
        "Mysterious foggy road creating an atmospheric and moody scene.",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      photographer: "fynn",
      photographerLink: "https://unsplash.com/@fynn_it",
      location: "Big Sur, United States",
      locationLink: "https://unsplash.com/s/photos/big-sur%2C-united-states",
      description:
        "Breathtaking coastal view of Big Sur's dramatic cliffs and ocean.",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Yusuf Evli",
      photographerLink: "https://unsplash.com/@yusufevli",
      caption: "Foggy Road",
      description:
        "Mysterious foggy road creating an atmospheric and moody scene.",
    },
    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      photographer: "fynn",
      photographerLink: "https://unsplash.com/@fynn_it",
      location: "Big Sur, United States",
      locationLink: "https://unsplash.com/s/photos/big-sur%2C-united-states",
      description:
        "Breathtaking coastal view of Big Sur's dramatic cliffs and ocean.",
    },
  ];

  return (
    <section className="gallery section">
      <Container>
        <div className="text-center mb-5">
          <span className="px-3 py-2 rounded-pill mb-2">Our Portfolio</span>
          <h2 className="display-5 fw-bold mb-3">Capturing Moments</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Explore our collection of stunning photographs that tell compelling
            stories
          </p>
        </div>

        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgZoom, lgVideo, lgThumbnail]}
          mode="lg-fade"
          download={false}
          counter={true}
          elementClassNames="gallery-container row g-4"
        >
          {galleryImages.map((image) => (
            <Col
              lg={4}
              key={image.id}
              className="gallery-item"
              data-src={image.fullSize}
            >
              <div className="gallery-card position-relative overflow-hidden shadow-lg rounded">
                <img
                  src={image.thumbnail}
                  alt={`Gallery image ${image.id}`}
                  className="img-fluid w-100"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div
                  className="gallery-overlay position-absolute start-0 top-0 w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <h3 className="h4 mb-2">
                    {image.caption || `Beautiful Scene ${image.id}`}
                  </h3>
                  <p className="mb-0 text-light-alt">{image.description}</p>
                  <small className="mt-2">Click to view full size</small>
                </div>
              </div>
            </Col>
          ))}
        </LightGallery>
      </Container>
    </section>
  );
};

export default Gallery1;
