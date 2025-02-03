import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";

const USPS1 = () => {
  return (
    <section className="usps py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">Why Choose Us</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="usps-item p-4 text-center">
              <div className="icon-wrapper mb-3">
                <FaAward size={48} />
              </div>
              <h3 className="h4 mb-3">Quality Service</h3>
              <p className="mb-0">
                We pride ourselves on delivering exceptional quality in
                everything we do.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="usps-item p-4 text-center">
              <div className="icon-wrapper mb-3">
                <FaClock size={48} />
              </div>
              <h3 className="h4 mb-3">Fast Delivery</h3>
              <p className="mb-0">
                Quick turnaround times without compromising on quality.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="usps-item p-4 text-center">
              <div className="icon-wrapper mb-3">
                <FaHeadset size={48} />
              </div>
              <h3 className="h4 mb-3">24/7 Support</h3>
              <p className="mb-0">
                Our dedicated team is always here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPS1;
