import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";

// Importando imagens que são usada
import profileImage from "../images/profile.jpeg";
import client1Image from "../images/cliente1.jpeg";
import client2Image from "../images/cliente2.jpeg";
import client3Image from "../images/cliente3.jpeg";
import prolineImage from "../images/proline.png";
import snowflakeImage from "../images/snow.png";
import airbnbImage from "../images/airbnb.png";
import pritoImage from "../images/pritom.png";

function Home() {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Introdução */}
        <section className="intro">
          <div className="text-section">
            <h1 className="name">
              Felipe <span className="highlight">Coqueiro</span>
            </h1>
            <h2 className="role">Full Stack Developer</h2>
            <p className="description">
              We appreciate your trust greatly; our clients choose us & our
              products because they know we are the best.
            </p>
            <div className="buttons">
              <button className="btn btn-green">View Work</button>
              <button className="btn btn-yellow">Contact Me</button>
            </div>
          </div>
          
        </section>

        {/* Trusted Section */}
        <section className="trusted-section">
          <h3 className="trusted-title">Trusted by World Leading Brands</h3>
          <div className="brands">
            <img src={prolineImage} alt="Proline" />
            <img src={snowflakeImage} alt="Snowflake" />
            <img src={airbnbImage} alt="Airbnb" />
            <img src={pritoImage} alt="Prito" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
