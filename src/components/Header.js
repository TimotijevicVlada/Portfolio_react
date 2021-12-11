import React from "react";
import Me from "../img/image_me.png";
import Navbar from "./Navbar";

const Header = ({nightMode, setNightMode}) => {

  
  return (
    <div className={!nightMode ? "header" : "header night"} id="header">
      <Navbar nightMode={nightMode} setNightMode={setNightMode}/>
      <a href="#header"><i className="fas fa-chevron-up"></i></a>
      <div className="header_info">
        <div className="info_wrapper">
          <span className="first_line">Hello, my name is</span>
          <span className="name">Vladimir Timotijevic</span>
          <div className="scroll">
            <div className="scroll_wrapper">
              <div className="scroll_item">Front-End Developer</div>
              <div className="scroll_item">Web Designer</div>
              <div className="scroll_item">Content Creator</div>
            </div>
          </div>
          <p className="text">I am focused on creating functional and beautiful web applications</p>
          <div className="social_network">
            <a href="https://github.com/TimotijevicVlada" target="_blank"rel="noreferrer" ><i className={!nightMode ? "fab fa-github" : "fab fa-github night"}></i></a>
            <a href="https://www.linkedin.com/in/vladimir-timotijevic/" target="_blank" rel="noreferrer"><i className={!nightMode ? "fab fa-linkedin" : "fab fa-linkedin night"}></i></a>
          </div>
        </div>
      </div>
      <div className="header_image">
        <div className={!nightMode ? "background_shape" : "background_shape black"}></div>
        <img src={Me} alt="personal_image" />
      </div>
    </div>
  );
};

export default Header;
