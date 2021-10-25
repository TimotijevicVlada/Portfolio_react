import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span className="content">
                    Port<span className="other_color">folio.</span>
                </span>
            </div>
            <div className="pages">
                <span>Home</span>
                <span>About</span>
                <span>Technologies</span>
                <span>Projects</span>
                <span>Contact</span>
            </div>
        </div>
    )
}

export default Navbar;
