import React from "react";
import solidworksLogo from "../assets/solidworks-logo.png";
import ansysLogo from "../assets/ansys-logo.png";
import mathworksLogo from "../assets/images.jpg";
import "./Sponsors.css";

const sponsors = [
  {
    name: "SolidWorks",
    role: "Design Partner",
    logo: solidworksLogo,
  },
  {
    name: "Ansys",
    role: "Engineering Simulation Partner",
    logo: ansysLogo,
  },
  {
    name: "MathWorks",
    role: "System Modelling Partner",
    logo: mathworksLogo,
  },
];

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      {/* Floating background blobs */}
      <div className="background-blobs">
        <div className="blob blob-left"></div>
        <div className="blob blob-right"></div>
      </div>

      <div className="sponsors-container">
        <div className="sponsors-header">
          <p className="sponsors-subtitle">
            Powered by SCIEnT and Designers' Consortium
          </p>
          <h2 className="sponsors-title">Our Sponsors & Partners</h2>
          <p className="sponsors-tagline">
            Supporting innovation and excellence
          </p>
        </div>

        {/* Auto-sliding carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div className="sponsor-card" key={index}>
                <div className="sponsor-logo-wrapper">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-info">
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                  <p className="sponsor-role">{sponsor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
