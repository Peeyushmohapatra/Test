import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustumHook from "./context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustumHook>
    <App />
  </CustumHook>
);
