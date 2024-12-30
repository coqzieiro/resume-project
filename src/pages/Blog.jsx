import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/Blog.css";

function Blog() {
  return (
    <div className="blog-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <h1 className="section-title">Blogs.</h1>

        <div className="blog-list">
          {/* Blog Post 1 */}
          <div className="blog-item">
            <div className="blog-image">
              <img src="/assets/images/blog1.jpg" alt="Frontend Development" />
              <div className="date-badge">
                <span>20</span>
                <small>APR</small>
              </div>
            </div>
            <div className="blog-content">
              <p className="blog-meta">20 APRIL 2025 | WEB DEVELOPMENT</p>
              <h3>Become a Frontend Developer in 5 Simple Steps</h3>
              <p>
                Est a quis ipsum et arcu. Sit eros leo enim sed vivamus. Nulla
                et eget commodo mus suspendisse imperdiet...
              </p>
              <button className="read-more">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-item">
            <div className="blog-image">
              <img src="/assets/images/blog2.jpg" alt="Logo Design" />
              <div className="date-badge">
                <span>15</span>
                <small>APR</small>
              </div>
            </div>
            <div className="blog-content">
              <p className="blog-meta">15 APRIL 2025 | GRAPHIC DESIGN</p>
              <h3>11 Best Logo Design Online & Offline Courses</h3>
              <p>
                Lectus neque aliquet faucibus diam neque sapien rhoncus morbi
                viverra. Sed lorem a eget nisi porttitor augue...
              </p>
              <button className="read-more">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="blog-item">
            <div className="blog-image">
              <img src="/assets/images/blog3.jpg" alt="Content Proofreading" />
              <div className="date-badge">
                <span>10</span>
                <small>APR</small>
              </div>
            </div>
            <div className="blog-content">
              <p className="blog-meta">10 APRIL 2025 | SEO</p>
              <h3>10 Content Proofreading Tips to Catch More</h3>
              <p>
                Habitasse gravida vestibulum egestas duis mauris ut nulla quam.
                Ultrices ac tincidunt mattis odio...
              </p>
              <button className="read-more">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;