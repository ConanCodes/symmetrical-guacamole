// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Routing from './routing/Routing';
// import { BrowserRouter } from "react-router-dom";
// import "./styles.css"

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routing />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Routing from '../src/routing/Routing';
import { BrowserRouter } from "react-router-dom";
import "./styles.css"

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