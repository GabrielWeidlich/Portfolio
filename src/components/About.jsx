import React from "react";
import './About.css'
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <div className="container">
            <div ref={ref} className={`about ${inView ? 'show' : ''}`} id="sobre">
                <div className="about-line"></div>
                <div className="about-text">
                    <h3>Sobre mim</h3>
                    <span>Sou um Desenvolvedor </span><br />
                    <span>Full Stack </span>
                    <p>Olá, sou Gabriel, de Anápolis, Goiás. Sou desenvolvedor Full Stack com foco principal no Backend, especialmente utilizando Node.js. Estou há mais de dois anos nessa jornada, cursando Engenharia de Software e me dedicando constantemente ao aprimoramento das minhas habilidades técnicas.
                        Atualmente, estou trabalhando no desenvolvimento de uma API robusta para um sistema de mercado, utilizando tecnologias como C#, .NET, e PostgreSQL. Também venho aplicando Docker para containerização das aplicações, garantindo ambientes mais estáveis e escaláveis.
                        Embora meu foco seja backend, também possuo conhecimento em Frontend, com experiência em HTML, CSS e JavaScript, e estou atualmente aprendendo React para ampliar ainda mais meu leque de competências.
                        Busco oportunidades para integrar uma equipe de desenvolvimento onde eu possa aplicar minhas habilidades técnicas, colaborar com projetos desafiadores e continuar crescendo como profissional. Valorizo boas práticas de desenvolvimento, design limpo e soluções que ofereçam experiências de usuário acessíveis e eficientes.</p>
                </div>
            </div>
        </div>
    )
}

export default About;