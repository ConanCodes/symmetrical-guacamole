import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import './App.css';


export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to='/basictable'>Goto Basic Table</Link>
          <Link to='/guacc'>Guacc</Link>
        </header>
      </div>
    )
  }
}