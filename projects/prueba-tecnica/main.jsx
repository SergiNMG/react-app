import { createRoot } from "react-dom/client";
import { App } from "./src/App";
import React from "react";
import "./src/styles/main.scss";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.Fragment>
    <App></App>
  </React.Fragment>
);
