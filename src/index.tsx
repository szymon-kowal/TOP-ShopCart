import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/styles.css";

const rootEl = document.querySelector("#root");
if (rootEl === null) throw new Error("Can not find root element");
const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Somehow i need to add items to the sidebar, calculate everything,
Make cart modal be displayed on the other side
Test everything
Make it look somehow good
Build the page !
*/
