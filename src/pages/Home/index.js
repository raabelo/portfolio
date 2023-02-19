// --------------------- HOME ---------------------

// imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

// assets
import lightLogo from "../../assets/logos/light.png";
import darkLogo from "../../assets/logos/dark.png";
import skills from "../../assets/docs/skills";

// components
import SwitchIcon from "../../components/ui/switch-icon";
import ButtonWord from "../../components/ui/button-word";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = ({ theme = "dark", setTheme }) => {
    const [switchTheme, setSwitchTheme] = useState(true);

    useEffect(() => {
        if (switchTheme) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [switchTheme]);

    return (
        <div className={"body-wrapper theme-" + theme}>
            <button id="btn-backtotop">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <div>
                <header className={"header-menu"}>
                    <img width={150} src={theme === "dark" ? lightLogo : darkLogo}></img>
                    <div className={"div-wrapper-menu"}>
                        <button className={"theme-" + theme}>Início</button>
                        <button className={"theme-" + theme}>Sobre mim</button>
                        <button className={"theme-" + theme}>Habilidades</button>
                        <button className={"theme-" + theme}>Projetos</button>
                        <button className={"theme-" + theme}>Contatos</button>
                    </div>
                    <div className={"div-wrapper-switch"}>
                        <SwitchIcon check={switchTheme} setCheck={setSwitchTheme}></SwitchIcon>
                    </div>
                </header>
                <main>
                    <section id="section-home">
                        <div>
                            <div>
                                <p>Olá, eu sou o</p>
                                <p style={{ color: "var(--color-primary)" }}>Fabiano Rabelo {""}</p>
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
                                        pSize={"var(--font-size-large)"}
                                        text="Download CV"
                                        color={"var(--color-mediumwhite)"}
                                        bgColor={"var(--gradient-primary)"}
                                    ></ButtonWord>
                                </div>
                                <div className="btn-wrapper-home">
                                    <ButtonWord
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
                    <section id="section-about">
                        <p>Sobre mim</p>
                        <p>
                            {/* Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
                            JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs
                            REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis.
                            Também possui experiência em projetos gerenciados por Metodologias
                            Ágeis. Formado em Sistemas de Informação e cursando Especialização em
                            Front-End na Digital House Brasil. */}
                        </p>
                    </section>
                    <section id="section-skills">
                        <p>Habilidades</p>
                        <div>
                            {skills.map((element, i) => {
                                return (
                                    <div key={"skills-" + i}>
                                        <p>{element.name}</p>
                                        <img src={element.icon} width={50}></img>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </main>
                <footer></footer>
            </div>
        </div>
    );
};

export default Home;
