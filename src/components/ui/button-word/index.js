import React from "react";
import "./styles.css";

const ButtonWord = ({ color, bgColor, text, pSize, border, click }) => {
    return (
        <div onClick={click} className="bw-wrapper" style={{ background: bgColor, border: border }}>
            <p style={{ fontSize: pSize, color: color}}>{text}</p>
        </div>
    );
};

export default ButtonWord;
