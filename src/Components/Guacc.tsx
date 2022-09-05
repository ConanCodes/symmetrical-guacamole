import Navbar from "./Navbar";
import { PureComponent } from 'react';
import './App.css';
import GuaccPic from '../assets/images/guacc.jpg';

class Guacc extends PureComponent {

  render() {

    return (
      <><Navbar />
        <div>
          <h2>Just some guac</h2>
          <img className='guacamole' src={GuaccPic} alt="" />
        </div>
      </>

    );
  }
}


export default Guacc;