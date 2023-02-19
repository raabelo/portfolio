import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home/index";

const Router = () => {
    const [theme, setTheme] = useState(localStorage.getItem("tema"));

    useEffect(() => {
        let tema = localStorage.getItem("tema");
        if (tema === "dark" || tema === "light") {
            setTheme(tema);
        } else {
            setTheme("dark");
        }
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
                <Route path="/home" element={<Home theme={theme} setTheme={setTheme} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
