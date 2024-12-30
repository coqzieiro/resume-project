import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/Services.css";

function Services() {
  return (
    <div className="services-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Services Section */}
        <section className="services-section">
          <h1 className="section-title">Services.</h1>
          <p className="services-subtitle">
            BUILDING DIGITAL PRODUCT WITH BETTER EXPERIENCE
          </p>
          <p className="services-description">
            Our vision is to be a trailblazing force in the world of web design
            and development, recognized for our unwavering commitment to
            excellence, integrity, and customer satisfaction.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="icon" style={{ backgroundColor: "#ff6bcb" }}>
                <i className="fa-solid fa-paintbrush"></i>
              </div>
              <h3>UI/UX DESIGN</h3>
              <p>
                Hendrerit molestie consectetur molestie id dui in eget. Lectus
                amet diam amet ultricies convallis ultricies enim.
              </p>
              <a href="#">→</a>
            </div>

            <div className="service-card">
              <div className="icon" style={{ backgroundColor: "#10b981" }}>
                <i className="fa-solid fa-pencil-ruler"></i>
              </div>
              <h3>VISUAL BRANDING</h3>
              <p>
                A aliquam hac quis habitant dolor nunc metus sed. Sed commodo
                mauris purus molestie fames.
              </p>
              <a href="#">→</a>
            </div>

            <div className="service-card">
              <div className="icon" style={{ backgroundColor: "#6366f1" }}>
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>WEB DEVELOPMENT</h3>
              <p>
                Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget
                ultricies turpis elit augue cras mauris lorem mauris.
              </p>
              <a href="#">→</a>
            </div>

            <div className="service-card">
              <div className="icon" style={{ backgroundColor: "#f59e0b" }}>
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <h3>APP DEVELOPMENT</h3>
              <p>
                Sed dolor urna amet sagittis in morbi ullamcorper duis. Tempus
                pulvinar amet sed eget id sem blandit.
              </p>
              <a href="#">→</a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <h1 className="section-title">Portfolio.</h1>
          <div className="portfolio-grid">
            <img src="/assets/images/portfolio1.png" alt="Portfolio 1" />
            <img src="/assets/images/portfolio2.png" alt="Portfolio 2" />
            <img src="/assets/images/portfolio3.png" alt="Portfolio 3" />
            <img src="/assets/images/portfolio4.png" alt="Portfolio 4" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;