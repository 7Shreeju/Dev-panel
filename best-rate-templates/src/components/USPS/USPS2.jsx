import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";

const USPS2 = () => {
  return (
    <section className="usps section bg-light-alt">
      <div className="container">
        <div className="text-center mb-5">
          <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Benefits
          </span>
          <h2 className="display-5 fw-bold mb-3">Why Choose Us</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            We deliver exceptional service with industry-leading expertise
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-translate">
              <div className="card-body p-4">
                <div className="text-primary mb-4">
                  <FaAward size={42} />
                </div>
                <h3 className="h4 mb-3">Quality Service</h3>
                <p className="text-muted mb-0">
                  We pride ourselves on delivering exceptional quality in
                  everything we do, ensuring your complete satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-translate">
              <div className="card-body p-4">
                <div className="text-primary mb-4">
                  <FaClock size={42} />
                </div>
                <h3 className="h4 mb-3">Fast Delivery</h3>
                <p className="text-muted mb-0">
                  Quick turnaround times without compromising on quality. We
                  value your time as much as you do.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-translate">
              <div className="card-body p-4">
                <div className="text-primary mb-4">
                  <FaHeadset size={42} />
                </div>
                <h3 className="h4 mb-3">24/7 Support</h3>
                <p className="text-muted mb-0">
                  Our dedicated team is always here to help you succeed,
                  providing round-the-clock assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-translate {
          transition: transform 0.3s ease;
        }
        .hover-translate:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </section>
  );
};

export default USPS2;
