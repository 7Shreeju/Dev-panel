import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
  return (
    <div className="product">
      <div className="heading">
        <Row  className="justify-content-center">
          <Col lg={4}>
          <h2>Product/Services</h2>
          </Col>
        </Row>
      </div>
      <Container >
        <Row>
          <Col lg={4}>
            <div className="product-cont">
              <a href="!#">
                <div className="product-img">
                
                </div>
               <div className="product-dicription">
               <h3>fugiat porro quas ducimus</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat porro quas ducimus quis</p>
               </div>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="product-cont">
              <a href="!#">
                <div className="product-img">
                
                </div>
               <div className="product-dicription">
               <h3>fugiat porro quas ducimus</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat porro quas ducimus quis</p>
               </div>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="product-cont">
              <a href="!#">
                <div className="product-img">
                
                </div>
               <div className="product-dicription">
               <h3>fugiat porro quas ducimus</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat porro quas ducimus quis</p>
               </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
