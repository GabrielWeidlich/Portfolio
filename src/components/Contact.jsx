import React from "react";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default (props) => {
    return (
        <div className="container" id="contact">
            <div className="contact">
                <h2>Contato</h2>
                <div className="contact-info">

                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} style={{ color: '#000000' }} size="xl" /><span>(62)9 8482-4811</span>
                    </div>
                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#000000' }} size="xl" /><span>gabrielweidlichanaps@gmail.com</span>
                    </div>
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#000000' }} size="xl" /><span>Anápolis - GO</span>
                    </div>

                </div>

                <div className="contact-sub-info">
                    <a href="https://www.instagram.com/gabriel_dlich/" target="blank"><FontAwesomeIcon icon={faInstagram} size="lg" style={{color: '#f2f2f2'}}/></a>
                    <a href="https://github.com/GabrielWeidlich" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" style={{color: '#f2f2f2'}}/></a>
                    <a href="https://www.linkedin.com/in/gabriel-weidlich-/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: '#f2f2f2'}}/></a>
                </div>

            </div>
        </div>
    )
}
