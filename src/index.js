import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";
import Footer from "./Footer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className="Weather-container">
    <Weather />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
