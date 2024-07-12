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
            <div className="navbar defaultPadding">
                <FontAwesomeIcon className="fire-icon" icon={faFire} size="2xl" style={{ color: '#6609f1' }} />


                <nav className={`nav-options ${showMenu ? 'show' : ''}`}>

                    <a className="aTag" href="#">Home</a>
                    <a className="aTag" href="#">Sobre</a>
                    <a className="aTag" href="#">Skills</a>
                    <a className="aTag" href="#">Portfólio</a>
                    <a className="aTag" href="#">Contato</a>


                </nav>
                <button className="menu-btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
                </button>
            </div>
        </div>
    )
}