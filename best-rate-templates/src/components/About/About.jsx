import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      <div className="about bg-light-alt">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="img-container">
                {/* <img src="" alt="" />      */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h2>About Best-Rate</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis molestiae perferendis facere
                  sit. Dignissimos laboriosam quam sunt modi est harum
                  reiciendis rem blanditiis necessitatibus reprehenderit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis molestiae perferendis facere
                  sit. Dignissimos laboriosam quam sunt modi est harum
                  reiciendis rem blanditiis necessitatibus reprehenderit?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
