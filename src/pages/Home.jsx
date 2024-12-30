import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";

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
              Jessica <span className="highlight">Biogi</span>
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
          <div className="image-section">
            <img
              src="/assets/images/profile.jpg"
              alt="Jessica Biogi"
              className="profile-image"
            />
            <div className="badge">
              <p>Worked with more than 100 people</p>
              <div className="clients">
                <img src="/assets/images/client1.jpg" alt="Client 1" />
                <img src="/assets/images/client2.jpg" alt="Client 2" />
                <img src="/assets/images/client3.jpg" alt="Client 3" />
                <span>+100 Clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Section */}
        <section className="trusted-section">
          <h3 className="trusted-title">Trusted by World Leading Brands</h3>
          <div className="brands">
            <img src="/assets/images/proline.png" alt="Proline" />
            <img src="/assets/images/snowflake.png" alt="Snowflake" />
            <img src="/assets/images/airbnb.png" alt="Airbnb" />
            <img src="/assets/images/prito.png" alt="Prito" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;