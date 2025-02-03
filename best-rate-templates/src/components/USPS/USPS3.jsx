import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";

const USPS3 = () => {
  return (
    <section className="usps-section py-6 bg-gradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="pe-lg-5">
              <span className="badge bg-white text-primary px-3 py-2 rounded-pill mb-3">
                Why Best Rate
              </span>
              <h2 className="display-4 fw-bold text-dark mb-4">
                Experience Excellence in Financial Services
              </h2>
              <p className="lead text-muted mb-5">
                We combine industry expertise with personalized attention to
                deliver outstanding results for our clients.
              </p>
              <button className="btn btn-light btn-lg px-4">Learn More</button>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="feature-card bg-white p-4 rounded-4 mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                      <FaAward className="text-primary" size={24} />
                    </div>
                    <h4 className="h5 mb-0">Award-Winning Service</h4>
                  </div>
                  <p className="text-muted mb-0">
                    Recognized excellence in financial consulting and wealth
                    management solutions.
                  </p>
                </div>

                <div className="feature-card bg-white p-4 rounded-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                      <FaClock className="text-primary" size={24} />
                    </div>
                    <h4 className="h5 mb-0">Quick Response Time</h4>
                  </div>
                  <p className="text-muted mb-0">
                    Swift and efficient service delivery without compromising
                    quality.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mt-md-5">
                <div className="feature-card bg-white p-4 rounded-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                      <FaHeadset className="text-primary" size={24} />
                    </div>
                    <h4 className="h5 mb-0">24/7 Expert Support</h4>
                  </div>
                  <p className="text-muted mb-0">
                    Round-the-clock assistance from our dedicated financial
                    experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .usps-section {
          background: linear-gradient(
            135deg,
            var(--bs-primary) 0%,
            #2c3e50 100%
          );
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .feature-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .icon-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default USPS3;
