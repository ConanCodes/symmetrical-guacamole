import React from "react";
import { createRoot } from "react-dom/client";
import "./index.tsx";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import MonsterFighter from "./Components/MonsterFighter";

// @ts-ignore
const container: HTMLElement = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* @ts-ignore */}
        <MonsterFighter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
