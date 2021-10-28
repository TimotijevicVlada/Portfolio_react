import React from "react";
import Me from "../img/image_me.png";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header_info">
        <div className="info_wrapper">
          <span className="first_line">Hello, my name is</span>
          <span className="name">Vladimir Timotijevic</span>
          <div className="scroll">
            <div className="scroll_wrapper">
              <div className="scroll_item">Web Developer</div>
              <div className="scroll_item">Designer</div>
              <div className="scroll_item">Content Creator</div>
            </div>
          </div>
          <p className="text">Some text about what I am doing...</p>
          <div className="social_network">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="header_image">
        <div className="background_shape"></div>
        <img src={Me} alt="personal_image" />
      </div>
    </div>
  );
};

export default Header;
