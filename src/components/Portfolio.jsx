import React from "react";
import './Portfolio.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faHtml5, faNode } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
    return (
        <div className="container">
            <div className="portfolio" id="portfolio">

                <div className="portfolio-title">
                    <h2>Portfólio</h2>
                </div>

                <div className="portfolio-content">
                    <div className="content-img"></div>
                    <div className="content-info">

                        <div className="part">
                            <span>NodeNotes</span>
                            <div>
                                <FontAwesomeIcon className="part-icons" icon={faCss3} size="lg" />
                                <FontAwesomeIcon className="part-icons" icon={faHtml5} size="lg" />
                                <FontAwesomeIcon className="part-icons" icon={faNode} size="lg" />
                                <FontAwesomeIcon className="part-icons" icon={faBootstrap} size="lg" />
                                <FontAwesomeIcon className="part-icons" icon={faDatabase} size="lg" />
                            </div>
                        </div>

                        <p>O NodeNotes é projeto web desenvolvido utilizando o motor de templates Handlebars e estilizada com CSS, com ênfase
                            no framework Bootstrap. A aplicação é construída em um ambiente Node.js, utilizando o Express.js para roteamento
                            no servidor e MongoDB com Mongoose para persistência de dados. <br />

                            -- Interface de administrador -- <br />
                            Email: admin@gmail.com / Senha: admin123 <br />
                            </p>
                        <a href="http://54.233.97.62:3333/home" target="blank"><button className="btn-project">Ver projeto</button></a>
                        <a href="https://github.com/GabrielWeidlich/NodeNotes.git" target="blank"><button className="btn-repository">- Repositório -</button></a>
                    </div>
                </div>



            </div>
        </div>
    )
}