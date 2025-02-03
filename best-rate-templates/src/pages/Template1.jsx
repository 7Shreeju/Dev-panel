import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header1 from "../layout/Header/Header1";
import Footer1 from "../layout/Footer/Footer1";
import About1 from "../components/About/About1";
import Contact1 from "../components/Contact/Contact1";
import Hero1 from "../components/Hero/Hero1";
import USPS1 from "../components/USPS/USPS1";
import Products1 from "../components/Products/Products1";
import Testimonials1 from "../components/Testimonials/Testimonials1";
import Gallery1 from "../components/Gallery/Gallery1";

const Template1 = () => {
  return (
    <div>
      <Header1 />
      <Hero1 />
      <USPS1 />
      <About1 />
      <Products1 />
      <Testimonials1 />
      <Gallery1 />
      <Contact1 />
      <Footer1 />
    </div>
  );
};

export default Template1;
