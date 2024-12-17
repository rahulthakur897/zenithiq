import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, FormComponent, Header } from "../../components";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import "./style.css";

function ContactOptions(props) {
  const { icon, title, desc } = props;
  return (
    <div className="contact-option">
      {icon}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    organization: "",
    recruitmentServices: false,
    directSourceCuration: false,
    ZenithiqManagedSolutions: false,
    recruitmentProcessOutsourcing: false,
    ZenithiqTalentSolutions: false,
    payrollServices: false,
    customizableNote: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <main className="contact-page">
      <Header />
      <section className="contact-banner-container">
        <img
          src={process.env.PUBLIC_URL + "assets/image/contact.png"}
          alt="banner img"
        />
        <div className="contact-banner-content">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>/</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
      <section className="light-section contact-options">
        <ContactOptions
          icon={<FaPhone className="icon" />}
          title="Phone number"
          desc="+1 289-236-9000"
        />
        <ContactOptions 
          icon={<MdOutlineMail className="icon" />}
          title="Email address"
          desc="contact@zenithiq.info"
        />
        <ContactOptions
          icon={<FaLocationDot className="icon" />}
          title="Office Location"
          desc="8140 westside blvd, Fulton, MD"
        />
      </section>
      <section className="light-section">
        <div className="section-content get-in-touch">
          <div className="title">
            <h3>Get in Touch</h3>
            <p>We value the connection with our community and are here to assist in any way we can. Feel free to reach out.</p>
          </div>
          <FormComponent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
      <section className="loaction">
        <iframe
          title="office address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.0668965146824!2d-76.91022592419698!3d39.15046007167111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7dc0527196dcb%3A0xfd25989993341bf3!2s8140%20Westside%20Blvd%2C%20Fulton%2C%20MD%2020759%2C%20USA!5e0!3m2!1sen!2sin!4v1732446864252!5m2!1sen!2sin" width="600"
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
