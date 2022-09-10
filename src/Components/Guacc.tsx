import { PureComponent } from 'react';
import './App.css';
import GuaccPic from '../assets/images/guacc.jpg';

class Guacc extends PureComponent {

  render() {

    /**
     * Again we dont need the Navbar here since its in the parent <App/>
     * We can remove the empty brackets <> since everything will be in a <div/>
     */

    return (     
        <div>
          <h2>Just some guac</h2>
          <img className='guacamole' src={GuaccPic} alt="" />
        </div>
    );
  }
}


export default Guacc;