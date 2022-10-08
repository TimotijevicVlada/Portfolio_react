import React from 'react'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            Created by <span>Vladimir Timotijevic</span> | &copy; {year} All rights reserved.
        </div>
    )
}

export default Footer;
