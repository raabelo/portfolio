import React from "react";
import "./styles.css";

const Popup = ({
    theme,
    title,
    content,
    lButton = { text: "", action: () => {} },
    rButton = { text: "", action: () => {} },
}) => {
    return (
        <div
            className={"div-popup"}
            style={{
                display: "flex",
                backgroundColor: theme === "dark" ? "var(---color-white)" : "var(---color-black)",
            }}
        >
            <p>{title}</p>
            <p>{content}</p>
            <div>
                <button onClick={lButton.action}>{lButton.text}</button>
                <button onClick={rButton.action}>{rButton.text}</button>
            </div>
        </div>
    );
};

export default Popup;
