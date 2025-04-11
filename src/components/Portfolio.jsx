import React from "react";
import './Portfolio.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faHtml5, faNode, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer"

const Portfolio = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    })


    return (
        <div className="container">
            <div ref={ref} className={`portfolio ${inView ? 'show' : ''}`} id="portfolio">

                <div className="portfolio-title">
                    <h2>Portfólio</h2>
                </div>

                <div className="portfolio-content">
                    <div className="content-img"></div>
                    <div className="content-info">

                        <div className="part">
                            <span>NodeNotes</span>
                            <div>
                                <FontAwesomeIcon className="part-icons" icon={faHtml5} size="lg" style={{ color: '#74EBD5' }} />
                                <FontAwesomeIcon className="part-icons" icon={faCss3} size="lg" style={{ color: '#96F6F2' }} />
                                <FontAwesomeIcon className="part-icons" icon={faJs} size="lg" style={{ color: '#A2F9FA' }} />
                                <FontAwesomeIcon className="part-icons" icon={faNode} size="lg" style={{ color: '#8AF2E9' }} />
                                <FontAwesomeIcon className="part-icons" icon={faGithub} size="lg" style={{ color: '#9FCAD9' }} />
                                <FontAwesomeIcon className="part-icons" icon={faBootstrap} size="lg" style={{ color: '#9FACC8' }} />
                                <FontAwesomeIcon className="part-icons" icon={faDatabase} size="lg" style={{ color: '#9FACD9' }} />

                            </div>
                        </div>

                        <p>O NodeNotes é projeto web desenvolvido utilizando o motor de templates Handlebars e estilizada com CSS, com ênfase
                            no framework Bootstrap. A aplicação é construída em um ambiente Node.js, utilizando o Express.js para roteamento
                            no servidor e MongoDB com Mongoose para persistência de dados. </p>
                        <a href="https://github.com/GabrielWeidlich/NodeNotes.git" target="blank"><button className="btn-repository">- Repositório -</button></a>
                        <a href="http://54.233.97.62:3333/home" target="blank"><button className="btn-project">Ver projeto</button></a>
                    </div>
                </div><br />

                <div className="portfolio-content">
                    <div className="content-portfolio-img"></div>
                    <div className="content-info">

                        <div className="part">
                            <span>Portfólio</span>
                            <div>
                                <FontAwesomeIcon className="part-icons" icon={faHtml5} size="lg" style={{ color: '#74EBD5' }} />
                                <FontAwesomeIcon className="part-icons" icon={faCss3} size="lg" style={{ color: '#96F6F2' }} />
                                <FontAwesomeIcon className="part-icons" icon={faJs} size="lg" style={{ color: '#8AF2E9' }} />
                                <FontAwesomeIcon className="part-icons" icon={faReact} size="lg" style={{ color: '#9FCAD9' }} />
                                <FontAwesomeIcon className="part-icons" icon={faGithub} size="lg" style={{ color: '#9FACD9' }} />

                            </div>
                        </div>

                        <p>Meu Portfólio Pessoal é uma aplicação web desenvolvida com React, utilizando HTML, CSS e JavaScript para criar uma
                            interface moderna, responsiva e interativa. O projeto tem como objetivo apresentar minhas habilidades como desenvolvedor,
                            destacando projetos e tecnologias que domino. </p>
                        <a href="https://github.com/GabrielWeidlich/Portfolio.git" target="blank"><button className="btn-repository">- Repositório -</button></a>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default Portfolio;