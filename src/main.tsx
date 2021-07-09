import React from "react";
import ReactDOM from "react-dom";
import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import devPreset from "fela-preset-dev";

import "./index.css";
import App from "./components/App";
import theme from "./theme";

const renderer = createRenderer({
  plugins: [
    // other plugins,
    ...devPreset,
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RendererProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
