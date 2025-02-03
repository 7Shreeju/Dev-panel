import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Container } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";

const Footer1 = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <div className="cta-3 bg-primary">
          <div className="row">
            <div className="col-lg-6">
              <h3>Contact To Get Updated</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="col-lg-6 input-box">
              <input type="text" name="" id="" placeholder="abc@gmail.com"/>
              <button type="button">Submit</button>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <h1 className="text-white mb-3"><span className="best text-primary">Best Rate</span><br /> Website</h1>
            <p className="text-white mb-4">
              Providing quality digital solutions and exceptional service to help your business grow online.
            </p>
            <div className="social-links">
              <a href="#" className="text-white me-3"><FaFacebookF /></a>
              <a href="#" className="text-white me-3"><FaXTwitter /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white me-3"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Contact Us</h5>
            <div className="d-flex align-items-center mb-3 text-white">
              <IoMdMail className="me-2" />
              <span>info@bestratewebsite.com</span>
            </div>
            <div className="d-flex align-items-center mb-3 text-white">
              <IoCall className="me-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <address className="text-white mb-0 d-flex">
            <IoLocationSharp className="me-2"  />
            <p className="text-white">123 Business Street<br />
              New York, NY 10001<br />
              United States</p>
            
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-4 mt-4 text-center">
          <p className="text-white mb-0">
            © {new Date().getFullYear()} Best Rate Website. All rights reserved.
          </p>
        </div>
      </Container>
      <style jsx>{`
        .cta-3{
            padding:25px;
            // background-color: #0077be;
            margin-bottom:45px;
            border-radius:20px
          }
          .cta-3 .row{
            gap:10px 0
          }
          .cta-3 h3{
            margin-bottom:10px;
            font-weight:700
          }
          .cta-3 p{
            color:#fff
          }
          .cta-3 .input-box{
            display:flex;
            gap:10px;
            align-items: center;
          }
          .cta-3 .input-box input{
            width:60%;
            padding:8px 10px;
            border-radius:10px;
            background-color:#fff !important;
            box-shadow:none;
            outline:none;
            border:none;
          }
          .cta-3 .input-box button{
            width:30%;
            padding:8px 5px;
            border-radius: 10px;
            background-color:#fff ;
            box-shadow:none;
            outline:none;
            border:1px solid #0077be;
            transition: all .3s linear
          }
            .cta-3 .input-box button:hover{
            background-color: #0077be !important;
            box-shadow:0px 0px 13px #fff;
            color:#fff;
          }
          .best{
            font-weight: 700;
          }
     `}</style>
    </footer>
  );
};

export default Footer1;
