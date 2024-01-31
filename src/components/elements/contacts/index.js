import React from "react";
import "./styles.css";

import { FaGithub, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";

const Contatos = () => {
    const contacts = [
        {
            name: "E-mail",
            icon: <FaEnvelope style={{fontSize: 20}}></FaEnvelope>,
            desc: "rabelo.fv@gmail.com",
            func: () => {
                window.open("mailto:rabelo.fv@gmail.com");
            },
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn style={{fontSize: 20}}></FaLinkedinIn>,
            desc: "Fabiano Rabelo",
            func: () => {
                window.open("https://www.linkedin.com/in/raabelo/");
            },
        },
        {
            name: "GitHub",
            icon: <FaGithub style={{fontSize: 20}}></FaGithub>,
            desc: "raabelo",
            func: () => {
                window.open("https://github.com/raabelo/");
            },
        },
    ];

    return (
        <div id={"contato-header"}>
            {contacts.map((element, i) => {
                return (
                    <button key={"contato-" + element.name} onClick={element.func}>
                        <div>{element.icon}</div>
                    </button>
                );
            })}
        </div>
    );
};

export default Contatos;
