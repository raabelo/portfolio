import React from "react";

const PagContatos = () => {
    const contacts = [
        {
            name: "E-mail",
            desc: "raabelo@hotmail.com",
            func: () => {window.open("https://www.google.com.br/");}
        },
        {
            name: "Telefone",
            desc: "+55 27 998100177",
            func: () => {window.open("https://api.whatsapp.com/send?phone=5527998100177");}
        },
        {
            name: "LinkedIn",
            desc: "Fabiano Rabelo",
            func: () => {window.open("https://www.linkedin.com/in/raabelo/");}
        },
        {
            name: "GitHub",
            desc: "raabelo",
            func: () => {window.open("https://github.com/raabelo/");}
        },
    ];

    return (
        <section id="section-contacts">
            <p>Contatos</p>
            <div>
                {contacts.map((element, i) => {
                    return <button key={"contato-"+element.name} onClick={element.func}>{element.name}</button>;
                })}
            </div>
        </section>
    );
};

export default PagContatos;
