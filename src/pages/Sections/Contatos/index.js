import React from "react";
import "./styles.css";

import { FaGithub, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";

const PagContatos = () => {
    const contacts = [
        {
            name: "E-mail",
            icon: <FaEnvelope></FaEnvelope>,
            desc: "raabelo@hotmail.com",
            func: () => {
                window.open("https://www.google.com.br/");
            },
        },
        {
            name: "Telefone",
            icon: <FaPhone></FaPhone>,
            desc: "+55 27 998100177",
            func: () => {
                window.open("https://api.whatsapp.com/send?phone=5527998100177");
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
            <p>Contatos</p>
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
