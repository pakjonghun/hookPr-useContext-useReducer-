import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Context";
import { translation } from "./translation";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
