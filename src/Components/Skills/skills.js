import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="services-desc-container">
          <h1>
            My <span>skills</span>
          </h1>
          <p>
            
          </p>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p className="Text">
              I use HTML5, CSS3, and JavaScript to create visually stunning interfaces and interactive elements, while backend technologies like Node.js robust server-side functionalities.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>U/I and U/X Design</h3>
              <p className="Text">
              I work on the design to utilize a minimalist and intuitive approach, focusing on clean layouts, crisp typography, and engaging visuals to create visually pleasing interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
