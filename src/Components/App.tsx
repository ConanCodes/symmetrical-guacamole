import './App.css';
import { PureComponent } from 'react';
import Navbar from "./Navbar";

/** Advice/Todo
 * Rule of thumb everything should be placed withing your App div
 * 
 * <div className="app">
 * <NavBar/>
 * ...etc
 * </div>
 * 
 * Doing this will allow you to controll the whole app when we start learning state management
 * Putting it in the div will allow you to remove the empty tags <> which will be less for the the dom to render, so better performance in the long run
 */


/**
 * Since our NavBar is in our app component we dont have to declare it in each child
 */

export default class App extends PureComponent {

  render() {
    return (
      <><Navbar />
        <div className="App">
          <header className="App-header">
          </header>
        </div>
      </>
    )
  }
}