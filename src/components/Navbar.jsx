import React from "react"
import './Navbar.css'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"


export default (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleResize = () => {
        if (window.innerWidth >= 1200) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container">
            <div className="navbar">
                
                    <FontAwesomeIcon className="fire-icon" icon={faFire} size="2xl" style={{ color: '#74EBD5'}} />

                <div className="nav-content">
                    <nav className={`nav-options ${showMenu ? 'show' : ''}`}>

                        <ul className="ul-options">
                            <li><a className="aTag" href="#info">Home</a></li>
                            <li><a className="aTag" href="#about">Sobre</a></li>
                            <li><a className="aTag" href="#skills">Skills</a></li>
                            <li><a className="aTag" href="#portfolio">Portfólio</a></li>
                            <li><a className="aTag" href="#contact">Contato</a></li>
                        </ul>
                        
                    </nav>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
                    </button>
                </div>
            </div>
        </div>
    )
}