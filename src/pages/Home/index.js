// --------------------- HOME ---------------------

// imports
import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

// assets
import lightLogo from "../../assets/logos/light.webp";
import darkLogo from "../../assets/logos/dark.webp";

// components
import SwitchIcon from "../../components/ui/switch-icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faMoon as solidMoon,
    faSun as solidSun,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon, faSun as regularSun } from "@fortawesome/free-regular-svg-icons";

// pages
import PagInicio from "../Sections/Inicio";
import PagSobre from "../Sections/Sobre";
import PagHabilidades from "../Sections/Habilidades";
import PagContatos from "../Sections/Contatos";
import Contatos from "../../components/elements/contacts";

const Home = ({ theme, setTheme }) => {
    const [switchTheme, setSwitchTheme] = useState(theme === "light" ? false : true);
    const [backtotop, setBacktotop] = useState(false);

    const secInicio = useRef(null);
    const secSobre = useRef(null);
    const secHabilidades = useRef(null);
    const secProjetos = useRef(null);
    const secContatos = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBacktotop(true);
            } else {
                setBacktotop(false);
            }
        });
    }, []);

    const scrollAction = (y) => {
        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (switchTheme) {
            setTheme("dark");
            localStorage.setItem("tema", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("tema", "light");
        }
    }, [switchTheme]);

    const menuButtons = [
        {
            name: "Home",
            func: () => scrollAction(0),
        },
        {
            name: "About",
            func: () => {
                secSobre.current?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            name: "Tech Stack",
            func: () => {
                secHabilidades.current?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            name: "Projects",
            func: () => {
                secProjetos.current?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            name: "Contact",
            func: () => {
                secContatos.current?.scrollIntoView({ behavior: "smooth" });
            },
        },
    ];

    return (
        <div className={"body-wrapper viewarea theme-" + theme}>
            {backtotop && (
                <button onClick={() => scrollAction(0)} id="btn-backtotop">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
            <div>
                <header className={"header-menu"}>
                    <img
                        alt="Fabiano Rabelo logotipo"
                        width={150}
                        src={theme === "dark" ? lightLogo : darkLogo}
                    ></img>
                    <div className={"div-wrapper-menu"}>
                        {menuButtons.map((element, i) => {
                            return (
                                <button
                                    onClick={element.func}
                                    key={"btn-" + element.name}
                                    className={"theme-" + theme}
                                >
                                    {element.name}
                                </button>
                            );
                        })}
                    </div>
                    <div className={"div-wrapper-switch"}>
                        <FontAwesomeIcon icon={theme === "dark" ? regularSun : solidSun} />
                        <SwitchIcon check={switchTheme} setCheck={setSwitchTheme}></SwitchIcon>
                        <FontAwesomeIcon icon={theme === "dark" ? solidMoon : regularMoon} />
                    </div>
                    <div>
                        <Contatos />
                    </div>
                </header>
                <main>
                    <div ref={secInicio}>
                        <PagInicio theme={theme} contatos={secContatos}></PagInicio>
                    </div>
                    <div ref={secSobre}>
                        <PagSobre id={"sec-sobre"}></PagSobre>
                    </div>
                    <div ref={secHabilidades}>
                        <PagHabilidades theme={theme}></PagHabilidades>
                    </div>
                    <div ref={secContatos}>
                        <PagContatos id={"sec-contatos"}></PagContatos>
                    </div>
                </main>
                <footer></footer>
            </div>
        </div>
    );
};

export default Home;
