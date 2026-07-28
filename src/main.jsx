import React from "react";

import ReactDOM from "react-dom/client";

import {
HelmetProvider
}
from
"react-helmet-async";

import App from "./App";

import "./styles/globals.css";


/* 注入字体声明，使用 Vite BASE_URL 确保双平台（Vercel / GitHub Pages）路径正确 */
const fontStyles = document.createElement("style");
fontStyles.textContent = `
  @font-face {
    font-family: "Departure Mono";
    src: url("${import.meta.env.BASE_URL}fonts/DepartureMono-Regular.otf") format("opentype");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist Mono";
    src: url("${import.meta.env.BASE_URL}fonts/GeistMono[wght].ttf") format("truetype");
    font-weight: 100 900;
    font-display: swap;
  }
`;
document.head.appendChild(fontStyles);


ReactDOM
.createRoot(
document.getElementById("root")
)
.render(

<React.StrictMode>

<HelmetProvider>

<App/>

</HelmetProvider>

</React.StrictMode>

);