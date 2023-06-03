import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Could not find element with id='root'");
}
