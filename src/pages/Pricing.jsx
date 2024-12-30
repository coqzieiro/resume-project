import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <h1 className="section-title">Pricing.</h1>

        <div className="pricing-grid">
          {/* Basic Plan */}
          <div className="pricing-card">
            <div className="card-header" style={{ backgroundColor: "#ff6bcb" }}>
              <i className="fa-solid fa-bolt"></i>
              <h3>Basic Plan</h3>
              <div className="price">
                <span>25$</span>
                <small>/mon</small>
              </div>
            </div>
            <ul className="features">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Advertising</li>
              <li>Graphic Design</li>
              <li>Project Management</li>
            </ul>
            <div className="card-footer">
              <button className="choose-plan">Choose Plan</button>
              <p>10% taxes will include after make price</p>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="pricing-card">
            <div className="card-header" style={{ backgroundColor: "#6366f1" }}>
              <i className="fa-solid fa-gem"></i>
              <h3>Standard Plan</h3>
              <div className="price">
                <span>75$</span>
                <small>/mon</small>
              </div>
            </div>
            <ul className="features">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Advertising</li>
              <li>Graphic Design</li>
              <li>Project Management</li>
            </ul>
            <div className="card-footer">
              <button className="choose-plan">Choose Plan</button>
              <p>10% taxes will include after make price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;