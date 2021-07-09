import React from "react";
import ReactDOM from "react-dom";

import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import devPreset from "fela-preset-dev";
import theme from "./theme";

import { createHttpClient } from "mst-gql";
import { RootStore, StoreContext } from "./models";

import "./index.css";
import App from "./components/App";

const renderer = createRenderer({
  plugins: [
    // other plugins,
    ...devPreset,
  ],
});

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient("https://beta.pokeapi.co/graphql/v1beta"),
});

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RendererProvider>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// FIXME: only on DEV
(window as any).store = rootStore;
