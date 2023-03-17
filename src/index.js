import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserContext } from "./context/User_context";
 
const root = createRoot( document.getElementById("root") );
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
