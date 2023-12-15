import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GpxDataProvider } from "./context/gpxDataContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GpxDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GpxDataProvider>
  </React.StrictMode>
);
