import React from "react";
import ReactDOM from "react-dom";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import devPreset from "fela-preset-dev";

import "./index.css";
import App from "./App";

const renderer = createRenderer({
  plugins: [
    // other plugins,
    ...devPreset,
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <RendererProvider renderer={renderer}>
      <App />
    </RendererProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
