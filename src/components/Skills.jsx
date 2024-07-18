import React from "react";
import './Skills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faNode,faReact, faGithub, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer"

export default (props)=>{
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    })

    return (
        <div className="container">
            <div ref={ref} className={`skills ${inView ? 'show' : ''}`} id="skills">
                <h2>Skills</h2>
                <div className="icons-skills">
                    <div><FontAwesomeIcon icon={faHtml5} style={{fontSize: '4rem', color:'#74EBD5'}}/><span>HTML5</span></div>
                    <div><FontAwesomeIcon icon={faCss3Alt} style={{fontSize: '4rem', color:'#7EEFE0'}}/><span>CSS3</span></div>
                    <div><FontAwesomeIcon icon={faJs} style={{fontSize: '4rem', color:'#8AF2E9'}}/><span>JAVASCRIPT</span></div>
                    <div><FontAwesomeIcon icon={faNode} style={{fontSize: '4rem', color:'#96F6F2'}}/><span>NODEJS</span></div>
                    <div><FontAwesomeIcon icon={faReact} style={{fontSize: '4rem', color:'#A2F9FA'}}/><span>REACTJS</span></div>
                    <div><FontAwesomeIcon icon={faGithub} style={{fontSize: '4rem', color:'#9FCAD9'}}/><span>GITHUB</span></div>
                    <div><FontAwesomeIcon icon={faBootstrap} style={{fontSize: '4rem', color:'#9FACC8'}}/><span>BOOTSTRAP</span></div>
                    <div><FontAwesomeIcon icon={faDatabase} style={{fontSize: '4rem', color:'#9FACD9'}}/><span>MONGODB </span></div>
                </div>
            </div>
        </div>
    )
}