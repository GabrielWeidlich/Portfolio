import React from "react"
import './Navbar.css'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { useInView } from "react-intersection-observer"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)

    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <div className="container">
            <div ref={ref} className={`navbar ${inView ? 'show' : ''}`}>



                <div className="nav-content">
                    <FontAwesomeIcon className="laptop-icon" icon={faLaptopCode} size="2xl" style={{ color: '#74EBD5' }} />

                    <div className="nav">
                        <nav className={`nav-options ${showMenu ? 'show' : ''}`}>

                            <ul>
                                <li><a className="aTag" href="#home">Home</a></li>
                                <li><a className="aTag" href="#sobre">Sobre</a></li>
                                <li><a className="aTag" href="#skills">Skills</a></li>
                                <li><a className="aTag" href="#portfolio">Portfólio</a></li>
                                <li><a className="aTag" href="#contato">Contato</a></li>
                            </ul>

                        </nav>
                    </div>
                    <div>
                        <button className="menu-btn" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;