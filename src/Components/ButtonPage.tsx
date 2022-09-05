import Navbar from "./Navbar";

function ButtonPage() {

  function sayHello() {
    alert('Pretty sure I said don\'t click me');
  }

  function sayHi() {
    alert('I\'m trying to figure out how to incorporate a calculator in this app and I am struggling');
  }


  return (
    <>
      <Navbar />
      <div>
        <h2>Just a couple of buttons</h2>
        <button onClick={sayHello}>
          Don't Click me!
        </button>
        <button onClick={sayHi}>
          Click me!
        </button>
        <h2></h2>
        <button onClick={sayHello}>
          Don't Click me!
        </button>
        <button onClick={sayHi}>
          Click me!
        </button>
      </div>
    </>
  );
}





export default ButtonPage;