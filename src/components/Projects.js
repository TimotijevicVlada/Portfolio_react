import React from "react";
import Carousel from "react-elastic-carousel";
import { projects } from "../data";

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="projects_wrapper" id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <Carousel className="carousel" breakPoints={breakPoints}>
          {projects.map((item) => (
            <div className="project_item" key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={`products_img/${item.img}`} alt={item.id} />
              </a>
              <div className="hidden">
                <span className="name">{item.name}</span>
                <i className="fas fa-eye"></i>
              </div>
              

            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
