import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/Portifolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Portfolio Section */}
        <section className="portfolio-section">
          <h1 className="section-title">Portfolio.</h1>
          <div className="portfolio-grid">
            {/* Portfolio Items */}
            <div className="portfolio-item">
              <img
                src="/assets/images/portfolio1.jpg"
                alt="Corporate Branding"
              />
              <h3>Corporate Branding</h3>
              <p>Content</p>
            </div>
            <div className="portfolio-item">
              <img
                src="/assets/images/portfolio2.jpg"
                alt="Crypto App UI Design"
              />
              <h3>Crypto App UI Design</h3>
              <p>Vimeo Video</p>
            </div>
            <div className="portfolio-item">
              <img src="/assets/images/portfolio3.jpg" alt="City 3D View" />
              <h3>City 3D View</h3>
              <p>Gallery</p>
            </div>
            <div className="portfolio-item">
              <img
                src="/assets/images/portfolio4.jpg"
                alt="Food App Development"
              />
              <h3>Food App Development</h3>
              <p>YouTube Video</p>
            </div>
            <div className="portfolio-item">
              <img
                src="/assets/images/portfolio5.jpg"
                alt="Pocket FM Radio"
              />
              <h3>Pocket FM Radio</h3>
              <p>Sound Cloud</p>
            </div>
            <div className="portfolio-item">
              <img
                src="/assets/images/portfolio6.jpg"
                alt="Bank App Development"
              />
              <h3>Bank App Development</h3>
              <p>Content</p>
            </div>
          </div>

          {/* View All Button */}
          <div className="view-all-container">
            <button className="view-all-button">View All</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;