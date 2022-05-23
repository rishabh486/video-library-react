import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import reportWebVitals from "./reportWebVitals";
import { VideoDataProvider } from "./Context/video-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoDataProvider>
          <App />
        </VideoDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
