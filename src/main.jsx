import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import FormContext from "./contexts/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormContext>
        <App />
      </FormContext>
    </BrowserRouter>
  </React.StrictMode>
);
