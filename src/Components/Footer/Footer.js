import React from "react";
import logo from "../../assets/Dinosaur.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      
      <div className="footer-cpyright">
        <p>© 2023 C Prithviraj. All rights reserved</p>
      </div>
     
      <ul className="footer-social-media">
        <li>
          <a href="https://www.linkedin.com/in/prithvi-raj-393434203/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a href="https://github.com/Prithviraj1217?tab=repositories">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
