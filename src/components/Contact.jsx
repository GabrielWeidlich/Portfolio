import React from "react";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

export default (props) => {
    const {ref, inView}= useInView({
        triggerOnce: false,
        threshold:0.1
    })

    return (
        <div className="container" >
            <div ref={ref} className={`contact ${inView ? 'show' : ''}`} id="contato">
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
                    <a href="https://github.com/GabrielWeidlich" target="blank"><FontAwesomeIcon icon={faGithubSquare} size="lg" style={{color: '#f2f2f2'}}/></a>
                    <a href="https://www.linkedin.com/in/gabriel-weidlich-/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: '#f2f2f2'}}/></a>
                </div>

            </div>
        </div>
    )
}
