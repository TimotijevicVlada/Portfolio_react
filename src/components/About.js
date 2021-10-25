import React from "react";
import Me from "../img/about_img.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_image">
        <img src={Me} alt="about_me" />
      </div>
      <div className="about_text">
        <h2 className="title">About</h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          asperiores assumenda deserunt odit, vel quidem beatae in unde
          necessitatibus ab, eos rem exercitationem id eius. Consequuntur
          molestiae ducimus vitae neque.
        </p>
        <button onClick={() => alert("It's should be the CV download!")} className="btn">Download CV</button>
      </div>
    </div>
  );
};

export default About;
