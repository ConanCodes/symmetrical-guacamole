import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.tsx';
import Routing from './Routing/Routing';
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
const container: HTMLElement = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
);