import React from "react";
import "./styles.css";

const SwitchIcon = ({ check, setCheck }) => {
    return (
        <div className="si-wrapper">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => {
                        setCheck(e.target.checked);
                    }}
                ></input>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default SwitchIcon;