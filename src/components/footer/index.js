import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/assets/image/logo.png"}
              alt="Zenithiq Logo"
              className="footer-logo"
            />
          </figure>
          <p></p>
        </div>
        <div className="footer-links">
          <ul className="footer-links">
          <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-address">
        <div className="footer-socials">
            {/* <Link to="#" className="footer-social-link">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="#" className="footer-social-link">
              <i className="fa-brands fa-twitter"></i>
            </Link> 
            <Link to="#" className="footer-social-link">
              <i className="fa-brands fa-instagram"></i>
            </Link>*/}
            <Link to="#" className="footer-social-link">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <p>&copy; 2024 Zenithiq Technology & Consultancy LLC. All rights reserved.</p>
        <div className="footer-container">
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
