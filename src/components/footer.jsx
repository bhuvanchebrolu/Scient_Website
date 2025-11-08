import React from "react";
import "./footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import logo from "../assets/logo_s.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo-footer">
            <img src={logo} alt="Logo" />
            <h2>SCIEnT, NIT Trichy</h2>
          </div>
          <p className="tagline">
            An innovation hub for research , prototyping and bringing bold ideas
            to life.
          </p>
        </div>

        <div className="footer-section">
          <h3>
            QUICK LINKS
          </h3>
          <div className="footer-links">
            <ul className="column1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i>
              <span>scient@nitt.edu</span>
            </p>
            <p className="collegeName">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                National Institute of 
                <br/>
                Technology
                <br />
                Tiruchirappalli, Tamil Nadu
              </span>
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/scient_nitt/?hl=en"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/scientnitt/mycompany/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="/contact" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/ScientNITT/"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <p >
            Connect with us in social media
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; 2025 SCIEnT NITT. All rights reserved.</p>
        <p>
          Made with <span className="heart">♥</span> by SCIEnT NITT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
