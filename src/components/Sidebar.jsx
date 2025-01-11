import React from "react";
import "../styles/Sidebar.css";

// Importando a imagem do perfil
import profileImage from "../images/profile.jpeg";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img
          src={profileImage}
          alt="Felipe Coqueiro"
          className="profile-pic"
        />
        <h2>Felipe Coqueiro</h2>
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
