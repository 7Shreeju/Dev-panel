import React from "react";
import { useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// Import required lightgallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  // useEffect(() => {
  //   fjGallery(document.querySelectorAll(".gallery"), {
  //     itemSelector: ".gallery__item",
  //     rowHeight: 180,
  //     lastRow: "start",
  //     gutter: 2,
  //     rowHeightTolerance: 0.1,
  //     calculateItemsHeight: false,
  //   });
  // }, []);

  return (
    <div className="section">
      <Container>
        <h2 className="text-center mb-4">Gallery</h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgZoom, lgVideo]}
          mode="lg-fade"
          pager={false}
          thumbnail={true}
          galleryId={"nature"}
          autoplayFirstVideo={false}
          elementClassNames={"gallery"}
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: false,
            rotate: false,
          }}
        >
          <Row className="g-2">
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it2"
                data-tweet-text="lightGallery slide  2"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img1"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it3"
                data-tweet-text="lightGallery slide  4"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img2"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it3"
                data-tweet-text="lightGallery slide  4"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img3"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it3"
                data-tweet-text="lightGallery slide  4"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a></p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img4"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it3"
                data-tweet-text="lightGallery slide  4"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img2"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it3"
                data-tweet-text="lightGallery slide  4"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img3"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it3"
                data-tweet-text="lightGallery slide  4"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a></p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img4"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                data-pinterest-text="Pin it2"
                data-tweet-text="lightGallery slide  2"
                className="gallery__item"
                data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
                style={{ display: "block", height: "100%" }}
              >
                <img
                  alt="img1"
                  className="img-responsive w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                />
              </a>
            </Col>
          </Row>
        </LightGallery>
      </Container>
    </div>
  );
};

export default Gallery;
