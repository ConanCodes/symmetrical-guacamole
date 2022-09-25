import React from "react";
import ReactDOM from "react-dom/client";
import "./index.tsx";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import MonsterFighter from "./Components/MonsterFighter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* @ts-expect-error: I need to figure out how to not require the state but if i use ? it makes errors everywhere */}
        <MonsterFighter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
