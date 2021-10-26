import React from 'react';

const Projects = ({data}) => {
    return (
        <div className="projects">
            {data.map(item => (
                <div className="project_item" key={item.id}>
                    <img src={item.img} alt={item.id} />
                </div>
            ))}
        </div>
    )
}

export default Projects;
