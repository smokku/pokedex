import React from "react";
import ReactDOM from "react-dom";

import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import beautifier from "fela-beautifier";
import validator from "fela-plugin-validator";
import embedded from "fela-plugin-embedded";
import theme from "./theme";

import { createHttpClient, localStorageMixin } from "mst-gql";
import { RootStore, StoreContext } from "./models";

import "./index.css";
import App from "./components/App";

const SKIPPED_CLASSNAMES = [
  // Short for “advertisment”
  "ad",
  "ads",
  "adv",
  // See: https://github.com/adblockultimate/AdBlocker-Ultimate-for-Chrome/blob/3f07afbffa5c389270abe9ee4dc13333ca35613e/filters/filter_9.txt#L867
  "bi",
  "fb",
  "ig",
  "pin",
  "tw",
  "vk",
];

const plugins = [embedded()];
const enhancers = [];
if (import.meta.env.DEV) {
  plugins.unshift(
    validator({
      logInvalid: true,
      deleteInvalid: true,
      useCSSLint: true,
    })
  );
  enhancers.unshift(beautifier());
}

const renderer = createRenderer({
  filterClassName: (className) => !SKIPPED_CLASSNAMES.includes(className),
  plugins,
  enhancers,
});

let snapshot = undefined;
try {
  snapshot = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_KEY) || "{}"
  );
} catch (e) {
  console.error(e);
}

const rootStore = RootStore.extend(
  localStorageMixin({
    storageKey: import.meta.env.VITE_LOCAL_STORAGE_KEY,
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

if (import.meta.env.DEV) {
  (window as any).store = rootStore;
}
