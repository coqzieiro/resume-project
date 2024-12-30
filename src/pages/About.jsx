import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* About Section */}
        <section className="about-section">
          <h1 className="section-title">About Me.</h1>
          <p className="about-description">
            Hi, my name is <span className="highlight">Jessica Biogi</span> and I began
            using WordPress when first began. I’ve spent most of my waking hours
            for the last ten years designing, programming, and operating
            WordPress sites beyond with exclusive design. Apart from this, I
            love to travel, mentor designers, review design portfolios, and
            read books on everything related to design. I have also given design
            talks in various educational institutions. So I love creating
            creative content, and you can find most of my works here.
          </p>
        </section>

        {/* Personal Information */}
        <section className="personal-info">
          <ul>
            <li>
              <span className="info-label">Name:</span>
              <span className="info-value">Jessica Biogi</span>
            </li>
            <li>
              <span className="info-label">Nationality:</span>
              <span className="info-value">USA</span>
            </li>
            <li>
              <span className="info-label">Phone:</span>
              <span className="info-value">(+1) 234 567 8899</span>
            </li>
            <li>
              <span className="info-label">Email:</span>
              <span className="info-value">hello@biogi.com</span>
            </li>
            <li>
              <span className="info-label">Experience:</span>
              <span className="info-value">6+ years</span>
            </li>
            <li>
              <span className="info-label">Freelance:</span>
              <span className="info-value">Available</span>
            </li>
            <li>
              <span className="info-label">Skype:</span>
              <span className="info-value">hello.biogi</span>
            </li>
            <li>
              <span className="info-label">Language:</span>
              <span className="info-value">English</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;