import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Education and Experience Section */}
        <div className="section-container">
          {/* Education Section */}
          <section className="education-section">
            <h1 className="section-title">Education.</h1>
            <div className="timeline">
              <div className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <h3>Master in Design</h3>
                  <span>Cambridge University / 2010 – 2014</span>
                  <p>
                    Eu nulla at mauris cursus consectetur posuere iaculis ipsum
                    neque. Morbi felis pellentesque ligula sed dictumst
                    imperdiet nunc vulputate.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <h3>Bachelor in Science</h3>
                  <span>Cambridge University / 2014 – 2016</span>
                  <p>
                    Porttitor euismod at semper ut massa. Lorem varius magna
                    volutpat nunc. Et faucibus scelerisque donec augue eleifend
                    morbi.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <h3>Diploma in Computer</h3>
                  <span>Cambridge University / 2016 – 2018</span>
                  <p>
                    Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque
                    lorem suscipit in. Hendrerit rhoncus quis tempor urna
                    pharetra ut erat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="experience-section">
            <h1 className="section-title">Experience.</h1>
            <div className="timeline">
              <div className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <h3>Lead Design & Development</h3>
                  <span>Envato / 2020 – Current</span>
                  <p>
                    Ipsum erat duis leo lectus tellus neque dictumst. Dignissim
                    tortor quis nisl mi lectus. Massa facilisis ac eget
                    fermentum vitae. Dictum rutrum sed.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <h3>Senior Design & Development</h3>
                  <span>Apple / 2019 – 2020</span>
                  <p>
                    Congue dolor gravida eu tristique netus posuere dolor.
                    Penatibus imperdiet egestas ut sit scelerisque sapien a lor
                    sjsa.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <h3>Junior Design & Development</h3>
                  <span>Twitter / 2018 – 2019</span>
                  <p>
                    Aliquet at interdum pellentesque non fringilla eget orci
                    suspendisse. A iaculis augue vitae ultricies fusce sit dolor
                    gravida.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Coding Skills Section */}
        <section className="skills-section">
          <h1 className="section-title">Coding Skills.</h1>
          <div className="skills">
            <div className="skill-item">
              <div className="circle" data-percent="79"></div>
              <p>79%</p>
            </div>
            <div className="skill-item">
              <div className="circle" data-percent="92"></div>
              <p>92%</p>
            </div>
            <div className="skill-item">
              <div className="circle" data-percent="85"></div>
              <p>85%</p>
            </div>
            <div className="skill-item">
              <div className="circle" data-percent="70"></div>
              <p>70%</p>
            </div>
            <div className="skill-item">
              <div className="circle" data-percent="76"></div>
              <p>76%</p>
            </div>
            <div className="skill-item">
              <div className="circle" data-percent="83"></div>
              <p>83%</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;