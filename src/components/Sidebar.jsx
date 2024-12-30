import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img
          src="/assets/images/profile.jpg"
          alt="Jessica Biogi"
          className="profile-pic"
        />
        <h2>Jessica Biogi</h2>
        <p className="subtitle">Freelancer</p>
      </div>

      {/* Navigation Menu */}
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Download CV */}
      <button className="download-cv">Download CV</button>
    </div>
  );
}

export default Sidebar;