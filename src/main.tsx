import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#181C2B",
            color: "#fff",
            border: "1px solid rgba(168,85,247,0.3)",
            borderRadius: "14px",
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);