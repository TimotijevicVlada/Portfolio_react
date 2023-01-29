import React, {useState} from "react";
import Me from "../img/about_image.jpg";

const About = ({nightMode}) => {

  return (
    <div className="about" id="about">
      <div className="about_image">
        <img className={!nightMode ? "" : "night"} src={Me} alt="about_me" />
      </div>
      <div className="about_text">
        <h2 className="title">About</h2>
        <p className="text">
        I am expirienced Front End Developer who enjoys to make interactive websites.
        I spend my free time studying new technologies as well as perfecting existing ones.
        The technology in which I feel most comfortable is the React.JS. 
        When I'm not at the computer, I usually spend time in the gym or with my friends.
        </p>
        <p className="text">
        I like to work in the dynamic environments with new challenges where I can keep on improving my skills. 
        The great team and the pleasant atmosphere is the motivation to give my best on the work.  
        Creativity, responsibility, perseverance are something I could contribute to the company I work for.
        </p>
        <p className="text">
        In the future I have the ambition to become a complete Front End Developer with knowledge of few frameworks as well as to learn some of the Back End technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
