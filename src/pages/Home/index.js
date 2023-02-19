// --------------------- HOME ---------------------

// imports
import React, { useEffect, useState } from "react";
import "./styles.css";

// assets
import lightLogo from "../../assets/logos/light.png";
import darkLogo from "../../assets/logos/dark.png";

// components
import SwitchIcon from "../../components/ui/switch-icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// pages
import PagInicio from "../Sections/Inicio";
import PagSobre from "../Sections/Sobre";
import PagHabilidades from "../Sections/Habilidades";
import PagContatos from "../Sections/Contatos";

const Home = ({ theme = "dark", setTheme }) => {
    const [switchTheme, setSwitchTheme] = useState(true);

    useEffect(() => {
        if (switchTheme) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [switchTheme]);

    const menuButtons = [
        {
            name: "Início",
            func: () => {},
        },
        {
            name: "Sobre mim",
            func: () => {},
        },
        {
            name: "Habilidades",
            func: () => {},
        },
        {
            name: "Projetos",
            func: () => {},
        },
        {
            name: "Contatos",
            func: () => {},
        },
    ];

    return (
        <div className={"body-wrapper theme-" + theme}>
            <button id="btn-backtotop">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
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
                                <button key={"btn-" + element.name} className={"theme-" + theme}>
                                    {element.name}
                                </button>
                            );
                        })}
                    </div>
                    <div className={"div-wrapper-switch"}>
                        <SwitchIcon check={switchTheme} setCheck={setSwitchTheme}></SwitchIcon>
                    </div>
                </header>
                <main>
                    <PagInicio theme={theme}></PagInicio>
                    <PagSobre></PagSobre>
                    <PagHabilidades theme={theme}></PagHabilidades>
                    <PagContatos></PagContatos>                 
                </main>
                <footer></footer>
            </div>
        </div>
    );
};

export default Home;
