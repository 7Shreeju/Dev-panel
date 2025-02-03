// import React from "react";
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero/Hero";
import USPS from "../components/USPS/USPS";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

import { useParams} from 'react-router-dom';


const BaseTemplate = () => {

  // const { tempname } = useParams();
  // localStorage.setItem('tempname',tempname);

//   const fetchData = async () => {
        
//     // const id= localStorage.getItem("tempname");
//     try {
//       const response = await fetch(`http://localhost:5000/api/custom/gettemplatedata/${tempname}`,{
//         method:"GET",
//       }); 
//       // const data = await response.json();
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

// useEffect(() => {
//     fetchData();
// },[]);
  // useEffect(() => {
  //   if(tempname != localStorage.getItem("tempname")){

  //     window.location.reload();
  //   }
  // }, []);
  

  return (
    <div >
      <Header />
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default BaseTemplate;
