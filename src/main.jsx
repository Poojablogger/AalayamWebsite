import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

/* =========================
   FAVICON
========================= */

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = "/logo.png";

document.head.appendChild(favicon);

/* =========================
   PAGE TITLE
========================= */

document.title = "Aalayamapp|Divine Posters";

/* =========================
   RENDER APP
========================= */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);