import { createRoot } from 'react-dom/client';

import { act } from "react-dom/test-utils";
import App from '../src/components/App';
import { MemoryRouter as Router } from 'react-router-dom'

let container: HTMLElement = document.createElement("div");
let root = createRoot(container);

beforeEach(() => {
  // setup a DOM element as a render target
  container =
    document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  root.unmount();
  container.remove();
  // container = root;

});

it("renders with or without a name", () => {
  act(() => {
    root.render(<Router><App /></Router>);
  });
  expect(container.textContent).toBe("Hey, stranger");

});