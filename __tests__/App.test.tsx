import { createRoot } from 'react-dom/client';

import { act } from "react-dom/test-utils";
import App from '../src/components/App';
import { MemoryRouter as Router } from 'react-router-dom'
import React from 'react';
const pretty = require('pretty');

let container: HTMLElement | null;
let root: any;

describe('App Test', () => {
  beforeEach(() => {
    act(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      root = createRoot(container);
    })
  });

  afterEach(() => {
    act(() => {
      // cleanup on exiting
      root.unmount();
      container?.remove();
      container = null;
    })
  });

  test("Ensure App Renders", () => {
    act(() => { root.render(<Router><App /></Router>); });
    expect(pretty(container?.innerHTML)).toMatchSnapshot()
  });
})