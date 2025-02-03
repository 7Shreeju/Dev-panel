import React from "react";

// Import required lightgallery CSS

import { Container, Row, Col } from "react-bootstrap";
import Masonry, {
  ResponsiveMasonry,
} from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";

const Gallery2 = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/15/22/08/person-5747420_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
  ];
  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

  return (
    <section className="gallery section">
      <Container>
        <div className="text-center mb-5">
          <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Gallery
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future
          </p>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter={4}>
            {images.map((image) => (
              <img src={image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </section>
  );
};

export default Gallery2;
