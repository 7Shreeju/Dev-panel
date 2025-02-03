import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel id="myCarousel" className="mb-6">
      <Carousel.Item>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <Carousel.Caption>
          <h1>Example headline.</h1>
          <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <Carousel.Caption>
          <h1>Another example headline.</h1>
          <p>Some representative placeholder content for the second slide of the carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <Carousel.Caption>
          <h1>One more for good measure.</h1>
          <p>Some representative placeholder content for the third slide of this carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;