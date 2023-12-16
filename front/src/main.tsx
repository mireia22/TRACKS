import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GpxDataProvider } from "./context/gpxDataContext";
import { UserDataProvider } from "./context/userDataContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserDataProvider>
      <GpxDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GpxDataProvider>
    </UserDataProvider>
  </React.StrictMode>
);
