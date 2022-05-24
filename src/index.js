import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import reportWebVitals from "./reportWebVitals";
import { VideoDataProvider } from "./Context/video-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";
import WatchLater from "./Components/WatchlaterCard/watchLater";
import { WatchLaterProvider } from "./Context/watchLater-context";
import { PlayListProvider } from "./Context/playlist-context";
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoDataProvider>
          <PlayListProvider>
            <WatchLaterProvider>
              <App />
            </WatchLaterProvider>
          </PlayListProvider>
        </VideoDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
