import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profileNew.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
     
      <div className="header-content">
        <h1>My name is</h1>
        <h2 className="fullname">Prithvi</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Aspiring Fullstack developer",
              500,
              "Computer Science graduate",
              500,
              "MERN Stack Developer",
              500,
              "Tech Enthusiast",
              500,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <br></br>
        <p className="Text-header">
          I am 22 years old, I want to design and develop user friendly websites for Web Shops
        </p>
        <br></br>
        <h2>This site is made by me.</h2>
        <p></p>
       
          </div>

    
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
