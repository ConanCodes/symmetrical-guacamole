import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Routing from './routing/Routing';
import { BrowserRouter } from "react-router-dom";
import "./index.css"

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