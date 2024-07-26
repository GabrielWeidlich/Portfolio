import React from "react";
import './About.css'
import { useInView } from "react-intersection-observer";

export default (props) => {
    const {ref , inView}=useInView({
        triggerOnce:false,
        threshold:0.1
    })

    return (
        <div className="container">
            <div ref={ref} className={`about ${inView ? 'show' : ''}`} id="sobre">
                <div className="about-line"></div>
                <div className="about-text">
                    <h3>Sobre mim</h3>
                    <span>Sou um Desenvolvedor </span><br />
                    <span>Full Stack </span>
                    <p>Olá, sou Gabriel, da cidade de Anápolis, Goiás. Sou desenvolvedor Full Stack com um foco maior no Backend utilizando Node.js. Estou em uma jornada de 1 ano e meio cursando Engenharia de Software e aprimorando minhas habilidades em programação. Além de me especializar em Node.js, também tenho conhecimento em Frontend, utilizando HTML, CSS e JavaScript. Atualmente, estou aprendendo React para expandir minhas competências. Busco me integrar a uma equipe de desenvolvimento onde possa aplicar minhas competências técnicas para criar soluções eficientes e acessíveis. Meu objetivo é continuar aprendendo e evoluindo como desenvolvedor, contribuindo para projetos desafiadores que valorizem boas práticas de design e proporcionem experiências de usuário envolventes.</p>
                </div>
            </div>
        </div>
    )
}