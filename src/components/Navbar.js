import React, { useState } from 'react';

const Navbar = ({ nightMode, setNightMode }) => {

    const [menu, setMenu] = useState(false);

    const navList = [
        {
            name: "Home",
            href: "#header"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Technologies",
            href: "#tech"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ]

    return (
        <div className="navbar">
            <div className="logo">
                <span className="content">
                    Port<span className="other_color">folio.</span>
                </span>
            </div>
            <div className={menu ? "pages" : "pages unvisible"}>
                <div className="exit_menu"><i className="fas fa-times" onClick={() => setMenu(false)}></i></div>
                {navList.map((item, index) => (
                    <span key={index}><a className={!nightMode ? "" : "black"} onClick={() => setMenu(false)} href={item.href}>{item.name}</a></span>
                ))}
            </div>
            <div className="menu_bars">
                <i onClick={() => setMenu(true)} className="fas fa-bars"></i>
            </div>
            <div onClick={() => setNightMode(!nightMode)} className={nightMode ? 'night_mode' : 'night_mode day'}>
                <span>{nightMode ? <i className='fas fa-moon'></i> : <i className='fas fa-sun'></i>}</span>
            </div>
        </div>
    )
}

export default Navbar;
