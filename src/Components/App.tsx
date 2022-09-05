import './App.css';
import { PureComponent } from 'react';
import Navbar from "./Navbar";

// I dont know why but this import is causing issues, Ill look into it later i guess
// import logo from '../assets/logo.svg';

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
 * If our NavBar is above our app (not in the div) then we dont have to declare it in each module
 */

export default class App extends PureComponent {

  render() {
    return (
      <><Navbar />
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </header>
        </div>
      </>
    )
  }
}