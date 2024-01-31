import React, { useState } from "react";
import "./styles.css";

import ButtonWord from "../../../components/ui/button-word";

import Popup from "../../../components/elements/popup";

const PagInicio = ({ theme = "dark", contatos }) => {
    const [popupon, setPopupon] = useState(true);
    const [popupcontent, setPopupcontent] = useState({});

    return (
        <section id="section-home">
            {popupon && popupcontent.length > 0 && (
                <Popup
                    theme={theme}
                    title={popupcontent.title ? popupcontent.title : ""}
                    content={popupcontent.content ? popupcontent.content : ""}
                    lButton={{
                        text: popupcontent.lbutton.text ? popupcontent.lbutton.text : "",
                        action: popupcontent.lbutton.action
                            ? popupcontent.lbutton.action
                            : () => {},
                    }}
                    rButton={{
                        text: popupcontent.rbutton.text ? popupcontent.rbutton.text : "",
                        action: popupcontent.rbutton.action
                            ? popupcontent.rbutton.action
                            : () => {},
                    }}
                ></Popup>
            )}
            <div>
                <div>
                    <p className="p-greeting">Hello 👾, my name is</p>
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
                        I'm a Full-Stack Developer
                    </p>
                </div>
                <div>
                    <div className="btn-wrapper-home">
                        <ButtonWord
                            click={() => {
                                setPopupcontent({
                                    title: "",
                                    content: "",
                                    lbutton: {
                                        text: "",
                                        action: setPopupon(false),
                                    },
                                    rbutton: {
                                        text: "",
                                        action: window.open(
                                            "https://drive.google.com/uc?id=1j1qXWTBr54nWmZF_wH060jWchkkQ-J0A&export=download"
                                        ),
                                    },
                                });
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
                            text="Get in touch"
                            border={"0.1vw solid var(--color-primary)"}
                        ></ButtonWord>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PagInicio;
