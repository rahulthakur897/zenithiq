import React, { useState } from "react";
import "./style.css";

export function FormComponent({ formData, handleChange, handleSubmit }) {

  return (
    <div className="form-content">
      <div className="contactform">
        <div className="form-container">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              cols="50"
            />
          </div>
        </div>
      </div>
      <button className="button" type="button" onClick={handleSubmit}>
        Connect today
      </button>
    </div>
  );
}
