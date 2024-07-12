import React from "react";
import './Info.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default (props) => {
    return (
        <div className="container-info">
            <div className="info">
                <section className="info-titles">
                    <h3>Olá, eu sou Gabriel Weidlich!</h3>
                    <span className="dev-fullstack">Desenvolvedor Full Stack</span>
                    <div className="sepair-btn">
                        <button className="contact-btn">Contate me</button>
                    </div>
                    <div className="sepair-icons">
                        <a href="https://github.com/GabrielWeidlich" target="blank"><FontAwesomeIcon className="icons" icon={faSquareGithub} style={{ color: '#f2f2f2' }} /></a>
                        <a href="https://www.linkedin.com/in/gabriel-weidlich-/" target="blank"><FontAwesomeIcon className="icons" icon={faLinkedin} style={{ color: '#f2f2f2' }} /></a>
                    </div>
                </section>

            </div>
        </div>
    )
}