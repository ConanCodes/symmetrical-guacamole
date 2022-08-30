import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import './App.css';
import Navbar from "../Components/Navbar";
export default class App extends PureComponent {

  render() {
    return (
      <><Navbar />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to='/basictable'>Goto Basic Table</Link>
            <Link to='/guacc'>Guacc</Link>
          </header>
        </div>
      </>
    )
  }
}