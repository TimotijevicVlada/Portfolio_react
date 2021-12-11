import React, {useState} from 'react';

const Navbar = ({nightMode, setNightMode}) => {

    const [menu, setMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <span className="content">
                    Port<span className="other_color">folio.</span>
                </span>
            </div>
            <div className={menu ? "pages" : "pages unvisible"}>
                <div className="exit_menu"><i className="fas fa-times" onClick={() => setMenu(false)}></i></div>
                <span><a className={!nightMode ? "" : "black"} onClick={() => setMenu(false)} href="#header">Home</a></span>
                <span><a className={!nightMode ? "" : "black"} onClick={() => setMenu(false)} href="#about">About</a></span>
                <span><a className={!nightMode ? "" : "black"} onClick={() => setMenu(false)} href="#projects">Projects</a></span>
                <span><a className={!nightMode ? "" : "black"} onClick={() => setMenu(false)} href="#tech">Technologies</a></span>
                <span><a className={!nightMode ? "" : "black"} onClick={() => setMenu(false)} href="#contact">Contact</a></span>
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
