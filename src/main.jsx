import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";  // ✅ IMPORTANT

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>   {/* ✅ MUST BE HERE */}
    <App />
  </BrowserRouter>
);