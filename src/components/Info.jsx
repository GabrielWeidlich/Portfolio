import React from "react";
import './Info.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

export default (props) => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1
    })

    return (
        <div className="container">
            <div ref={ref} className={`info ${inView ? 'show' : ''}`} id="home">

                <div className="info-text">
                    <h3 >Olá, eu sou Gabriel Weidlich!</h3>
                    <div>
                        <span className="span1">Desenvolvedor</span><span className="span2">FullStack</span>
                    </div>

                </div>

                <div className="info-content">
                    <a href="#contato"><button className="contact-btn">Contate me</button></a><br />

                    <a href="https://github.com/GabrielWeidlich" target="blank"><FontAwesomeIcon className="icons" icon={faSquareGithub} size="lg" style={{ color: '#f2f2f2' }} /></a>
                    <a href="https://www.linkedin.com/in/gabriel-weidlich-/" target="blank"><FontAwesomeIcon className="icons" size="lg" icon={faLinkedin} style={{ color: '#f2f2f2' }} /></a>

                </div>

            </div>
        </div>
    )
}