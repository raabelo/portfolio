import React, { useState, useEffect } from "react";
import "./styles.css";

import skills from "../../../assets/docs/skills";

const PagHabilidades = ({ theme = "dark" }) => {
    const [skilldesc, setSkilldesc] = useState(-1);

    return (
        <section id="section-skills">
            <div>
                <p>My Tech Stack</p>
                <p
                    style={{
                        color:
                            skilldesc !== -1
                                ? theme === "dark"
                                    ? "var(--color-mediumwhite)"
                                    : "var(--color-mediumblack)"
                                : "var(--color-lightblack)",
                    }}
                >
                    {skilldesc > -1
                        ? skills[skilldesc].desc
                            ? skills[skilldesc].desc
                            : skills[skilldesc].name
                        : "Hover an item to see its description"}
                </p>
            </div>
            <div>
                {skills.map((element, i) => {
                    return (
                        <div
                            key={"skills-" + i}
                            onMouseEnter={() => {
                                setSkilldesc(i);
                            }}
                            onMouseLeave={() => {
                                setSkilldesc(-1);
                            }}
                        >
                            <p
                                style={{
                                    filter: skilldesc === i ? "saturate(1)" : "saturate(0)",
                                }}
                            >
                                {element.name}
                            </p>
                            <img
                                alt={element.name + " icon"}
                                src={element.icon}
                                width={45}
                                style={{
                                    filter: skilldesc === i ? "saturate(1)" : "saturate(0)",
                                }}
                            ></img>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PagHabilidades;
