import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <h1 className="section-title">Get In Touch.</h1>
        <p className="subtitle">Take a coffee & chat with me</p>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3>Email</h3>
              <p>hello@biogi.com</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+1234 567 8899</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Your subject" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your text..."></textarea>
          </div>
          <button type="submit" className="submit-button">Submit Now</button>
        </form>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3972879903794!2d-76.1526969!3d43.048122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f9bc6ff4d8eb%3A0x4067f9325f3efb27!2sSyracuse%2C%20NY%2013203%2C%20USA!5e0!3m2!1sen!2s!4v1615679537166!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;