import React from 'react';
import vscode from "../img/vs_code.png";
import jquery from "../img/jquery.png";
import mysql from "../img/my_sql.png";

const Technologies = () => {
    return (
        <div className="technologies" id="tech">
            <h1>Technologies</h1>
            <div className="tech_inner">
                <div><i className="fab fa-html5"></i>html</div>
                <div><i className="fab fa-css3-alt"></i>css</div>
                <div><i className="fab fa-sass"></i>scss</div>
                <div><i className="fab fa-js-square"></i>javascript</div>
                <div><i className="fab fa-react"></i>react</div>
                <div><i className="fab fa-bootstrap"></i>bootstrap</div>
                <div><i className="fab fa-node-js"></i>node.js</div>
                <div><img className="jquery" src={jquery} alt="jquery" />jquery</div>
                <div><img className="mysql" src={mysql} alt="my_sql" />mysql</div>
                <div><img className="vs_code" src={vscode} alt="vs_code" />vs code</div>
            </div>
        </div>
    )
}

export default Technologies;
