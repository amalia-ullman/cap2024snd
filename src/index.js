import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Account from "./Account";
import Home from "./Home";
import PostAdd from "./PostAdd";
// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<React.StrictMode><Home /></React.StrictMode>);