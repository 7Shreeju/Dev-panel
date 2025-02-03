import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header3 from "../layout/Header/Header3";
import Footer3 from "../layout/Footer/Footer3";
import About3 from "../components/About/About3";
import Contact3 from "../components/Contact/Contact3";
import Hero3 from "../components/Hero/Hero3";
import USPS3 from "../components/USPS/USPS3";
import Products3 from "../components/Products/Products3";
import Testimonials3 from "../components/Testimonials/Testimonials3";
import Gallery3 from "../components/Gallery/Gallery3";

const Template3 = () => {
  return (
    <div>
      <Header3 />
      <Hero3 />
      <USPS3 />
      <About3 />
      <Products3 />
      <Testimonials3 />
      <Gallery3 />
      <Contact3 />
      <Footer3 />
    </div>
  );
};

export default Template3;
