import React from "react";
import ReactDOM from "react-dom";

import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import validator from "fela-plugin-validator";
import theme from "./theme";

import { createHttpClient, localStorageMixin } from "mst-gql";
import { RootStore, StoreContext } from "./models";

import "./index.css";
import App from "./components/App";

const renderer = createRenderer({
  plugins: [
    validator({
      logInvalid: true,
      deleteInvalid: true,
      useCSSLint: true,
    }),
  ],
});

const LOCAL_STORAGE_KEY = "mst-rootstore";
let snapshot = undefined;
try {
  snapshot = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
} catch (e) {
  console.error(e);
}

const rootStore = RootStore.extend(
  localStorageMixin({
    storageKey: LOCAL_STORAGE_KEY,
  })
).create(snapshot, {
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
