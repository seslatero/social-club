import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RelayEnvironmentProvider>
  );
} else {
  console.error("Could not find element with id='root'");
}
