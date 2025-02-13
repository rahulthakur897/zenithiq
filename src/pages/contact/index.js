import React from "react";
import { Footer, FormComponent, Header } from "../../components";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./style.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <Header />
      <section className="contact-banner-container">
        <img
          src={process.env.PUBLIC_URL + "assets/image/contact.png"}
          alt="banner img"
        />
        <div className="contact-banner-content">
          <h3>Contact Us</h3>
          {/* <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>/</li>
            <li>Contact</li>
          </ul> */}
        </div>
      </section>
      <section className="light-section">
        <div
          className="section-content"
          style={{ borderTop: "1px solid #d9d9d9" }}
        >
          <div className="contact-details">
            <div className="contact-line">
              <FaLocationDot className="icon" />
              <h4>Our Location</h4>
              <p>7320 Snapdragon Ct, Aubrey 76627</p>
            </div>
            <div className="telephone">
              <FaPhone className="icon" />
              <h4>Telephone</h4>
              <p>+1 (650) 861-8705</p>
            </div>
            <div className="contact-line">
              <MdOutlineMail className="icon" />
              <h4>Send Email</h4>
              <p>
                <a
                  style={{ textDecoration: "none", color: "#444444" }}
                  href="mailto:uday@zenithiq.net"
                >
                  uday@zenithiq.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="light-section">
        <div
          className="section-content get-in-touch"
          style={{ borderTop: "1px solid #d9d9d9" }}
        >
          <div className="title">
            <h3>Get in Touch</h3>
            <p>
              We value the connection with our community and are here to assist
              in any way we can. Feel free to reach out.
            </p>
          </div>
          <FormComponent />
        </div>
      </section>
      <section className="loaction">
        <iframe
          title="office address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.035625778371!2d-96.9167543242201!3d33.23937007347399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c38043ffb978d%3A0x2f754ee5f19c30b2!2s7320%20Snapdragon%20Ct%2C%20Little%20Elm%2C%20TX%2076227%2C%20USA!5e0!3m2!1sen!2sin!4v1735877604782!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </main>
  );
}
