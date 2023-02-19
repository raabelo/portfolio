import React from "react";

import ButtonWord from "../../../components/ui/button-word";

const PagInicio = ({ theme = "dark", contatos }) => {
    return (
        <section id="section-home">
            <div>
                <div>
                    <p>Olá, eu sou o</p>
                    <p className="p-name">
                        Fabiano Rabelo<span className="pipe">{"|"}</span>
                    </p>
                    <p
                        style={{
                            color: "var(--color-lightblack)",
                            fontSize: "var(--font-size-xxx-large)",
                            marginTop: 5,
                        }}
                    >
                        Desenvolvedor Full-Stack
                    </p>
                </div>
                <div>
                    <div className="btn-wrapper-home">
                        <ButtonWord
                            click={() => {
                                window.open(
                                    "https://drive.google.com/uc?id=1j1qXWTBr54nWmZF_wH060jWchkkQ-J0A&export=download"
                                );
                            }}
                            pSize={"var(--font-size-large)"}
                            text="Download CV"
                            color={"var(--color-mediumwhite)"}
                            bgColor={"var(--gradient-primary)"}
                        ></ButtonWord>
                    </div>
                    <div className="btn-wrapper-home">
                        <ButtonWord
                            click={() => {
                                contatos.current?.scrollIntoView({ behavior: "smooth" });
                            }}
                            pSize={"var(--font-size-large)"}
                            color={
                                theme === "light"
                                    ? "var(--color-mediumblack)"
                                    : "var(--color-mediumwhite)"
                            }
                            text="Entrar em contato"
                            border={"0.1vw solid var(--color-primary)"}
                        ></ButtonWord>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default PagInicio;
