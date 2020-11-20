import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { JourneyProvider } from "./context/journeyContext";

ReactDOM.render(
  <React.StrictMode>
    <JourneyProvider>
      <App />
    </JourneyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
