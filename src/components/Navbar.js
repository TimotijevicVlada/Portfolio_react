import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span className="content">
                    Port<span className="other_color">folio.</span>
                </span>
            </div>
            <div className="pages">
                <span><a href="#about">About</a></span>
                <span><a href="#projects">Projects</a></span>
                <span><a href="#tech">Technologies</a></span>
                <span><a href="#contact">Contact</a></span>
            </div>
        </div>
    )
}

export default Navbar;
