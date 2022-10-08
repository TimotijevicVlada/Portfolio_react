import React from 'react';
import vscode from "../img/vs_code.png";
import mysql from "../img/my_sql.png";
import ts from "../img/ts.png";

const Technologies = ({ nightMode }) => {

    const tech = [
        {
            class: "fab fa-html5",
            name: "html"
        },
        {
            class: "fab fa-css3-alt",
            name: "css"
        },
        {
            class: "fab fa-sass",
            name: "scss"
        },
        {
            class: "fab fa-js-square",
            name: "javascript"
        },
        {
            class: "fab fa-react",
            name: "react"
        },
        {
            class: "fab fa-bootstrap",
            name: "bootstrap"
        },
        {
            class: "fab fa-node-js",
            name: "node.js"
        }
    ]

    const techImg = [
        {
            class: "jquery",
            name: "type script",
            src: ts
        },
        {
            class: "mysql",
            name: "mysql",
            src: mysql
        },
        {
            class: "vs_code",
            name: "vs code",
            src: vscode
        },
    ]

    return (
        <div className="technologies" id="tech">
            <h1>Technologies</h1>
            <div className="tech_inner">
                {tech.map((item, index) => (
                    <div key={index} className={!nightMode ? "" : "night"}><i className={item.class}></i>{item.name}</div>
                ))}
                {techImg.map((item, index) => (
                    <div key={index} className={!nightMode ? "" : "night"}><img className={item.class} src={item.src} alt={item.name} />{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default Technologies;
