import Navbar from "./Navbar";
import { PureComponent } from 'react';
import YoureWelcome from '../assets/images/yourewelcome.gif';

/** Advice
 * 
 * When setting the source its better to import it at the top and assign the varible to the src
 * this allows us to move the image file around or change it and the app will be updated automaticly
 * without you breaking anything and foregetting to fix it!
 * 
 * For typescript to know where/how to look and find our gif we add a file named gif.d.ts and in it decalare .gif as a module
 */

function sayHello() { alert('No need to thank me'); }

class HowToBowl extends PureComponent {

  render() {

    return (
      <><Navbar />
        <div>
          <h2>This one's for you Josh</h2>
          <img src="/images/HowToBowl.png" alt="" />
          <button onClick={sayHello}>
            <img className="Steve" src={YoureWelcome} alt="" />
          </button>

        </div>
      </>

    );
  }
}


export default HowToBowl;