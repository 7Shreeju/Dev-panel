import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";

const USPS4 = () => {
  const benefits = [
    {
      icon: <FaAward size={48} />,
      title: "Quality Service",
      description: "We pride ourselves on delivering exceptional quality in everything we do, ensuring your complete satisfaction."
    },
    {
      icon: <FaClock size={48} />,
      title: "Fast Delivery", 
      description: "Quick turnaround times without compromising on quality. We value your time as much as you do."
    },
    {
      icon: <FaHeadset size={48} />,
      title: "24/7 Support",
      description: "Our dedicated team is always here to help you succeed, providing round-the-clock assistance."
    }
  ];

  return (
    <section className="benefits-section py-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="display-4 fw-bold mb-4">Why Choose Our Services?</h2>
            <div className="d-flex align-items-center">
              <div className="accent-line me-3"></div>
              <p className="lead mb-0">Experience excellence in every interaction</p>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="text-muted">We combine industry expertise with innovative solutions to deliver outstanding results for our clients. Our commitment to excellence sets us apart.</p>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="icon-wrapper">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefits-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .accent-line {
          width: 60px;
          height: 4px;
          background: var(--bs-primary);
          border-radius: 2px;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .benefit-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }
        
        .icon-wrapper {
          color: var(--bs-primary);
          margin-bottom: 1.5rem;
        }
        
        .benefit-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #2d3436;
        }
        
        .benefit-card p {
          color: #636e72;
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default USPS4;
