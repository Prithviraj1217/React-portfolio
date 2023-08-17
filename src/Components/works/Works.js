import React from "react";
import "./Works.css";

import w2 from "../../assets/Dinosaur.png";
import w6 from "../../assets/Lighthouse.png";
import w7 from "../../assets/Battery.png";
import w8 from "../../assets/Tasks.png";
import w10 from "../../assets/geolocation API.png";
import w11 from "../../assets/GIF.gif";


//const video =document.createElement('video');
//video.src='Animation'


const Works = () => {
  return (
    <div className="works-container">


      <h1>My <span> Works </span></h1>


      <h3> Projects - <span><small>Click on the images below</small></span></h3>
      <br></br>


      <div className="works-list-container">

        <div className="works-item">
          <a href="https://prithviraj1217.github.io/battery-indicator.github.io/">
            <img src={w7} alt="work8" />
          </a>
        </div>

        <div className="works-item">
          <a href="https://prithviraj1217.github.io/location-api/">
            <img src={w10} alt="work7" />
          </a>
        </div>

        <div className="works-item">
          <a href="https://prithviraj1217.github.io/Tasks.github.io/">
            <img src={w8} alt="work10" />
          </a>
        </div>

      </div>
      <br></br>

      

      <h3 className="a"> <span> <small> My Hobbies include </small></span> 3D Animation <span><small> using Blender Software </small></span> </h3>
      <br></br>


      <div className="works-list-container">
        
        <div className="works-item-hwork">
          <img src={w11} alt="work11" />
        </div>
        <div className="works-item-hwork">
          <img src={w2} alt="work2" />
        </div>
        <div className="works-item-hwork">
          <img src={w6} alt="work6" />
        </div>

      </div>
      

    </div>
  );
};

export default Works;