import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Sidebar/>
        <Main/>
    </React.StrictMode>
);
