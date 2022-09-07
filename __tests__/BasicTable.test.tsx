import { createRoot } from 'react-dom/client';

import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from 'react-router-dom'
import BasicTable from '../src/components/BasicTable';
import React from 'react';

const pretty = require('pretty');

let container: HTMLElement | null;
let root: any;

describe('Basic Table Test', () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    root = createRoot(container);
  });

  afterEach(() => {
    // cleanup on exiting
    root.unmount();
    container?.remove();
    container = null;
  });

  test("Ensure Table Renders", () => {
    act(() => { root.render(<Router><BasicTable /></Router>); });
    expect(pretty(container?.innerHTML)).toMatchSnapshot()
  });
})