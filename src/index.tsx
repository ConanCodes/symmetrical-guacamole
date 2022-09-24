import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.tsx';
import Routing from './routing/Routing';
import { BrowserRouter } from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';

// @ts-ignore
const container: HTMLElement = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);