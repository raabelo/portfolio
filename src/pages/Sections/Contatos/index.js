import React from "react";
import "./styles.css";

import { FaGithub, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";

const PagContatos = () => {
    const contacts = [
        {
            name: "E-mail",
            icon: <FaEnvelope></FaEnvelope>,
            desc: "rabelo.fv@gmail.com",
            func: () => {
                window.location.href("mailto:rabelo.fv@gmail.com");
            },
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn></FaLinkedinIn>,
            desc: "Fabiano Rabelo",
            func: () => {
                window.open("https://www.linkedin.com/in/raabelo/");
            },
        },
        {
            name: "GitHub",
            icon: <FaGithub></FaGithub>,
            desc: "raabelo",
            func: () => {
                window.open("https://github.com/raabelo/");
            },
        },
    ];

    return (
        <section id="section-contacts">
            <p>Contacts</p>
            <div>
                {contacts.map((element, i) => {
                    return (
                        <button key={"contato-" + element.name} onClick={element.func}>
                            <div>{element.icon}</div>
                            <p>{element.name}</p>
                            <p>{element.desc}</p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default PagContatos;
