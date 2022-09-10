import { PureComponent } from 'react';
import Bowl from '../assets/images/HowToBowl.png'
import YoureWelcome from '../assets/images/yourewelcome.gif';

/** Advice
 * 
 * When setting the source its better to import it at the top and assign the varible to the src
 * this allows us to move the image file around or change it and the app will be updated automaticly
 * without you breaking anything and foregetting to fix it!
 * 
 * For typescript to know where/how to look and find our gif we add a file under our src called custom.d.ts to declare them as modules
 * 
 *  Again we dont need the Navbar here since its in the parent <App/>
 *  We can remove the empty brackets <> since everything will be in a <div/>
 * 
 */

function sayHello() { alert('No need to thank me'); }

class HowToBowl extends PureComponent {

  render() {

    return (
        <div>
          <h2>This one's for you Josh</h2>
          <img src={Bowl} alt="" />
          <div />
          <button onClick={sayHello}>
            <img className="Steve" src={YoureWelcome} alt="" />
          </button>
        </div>
    );
  }
}


export default HowToBowl;