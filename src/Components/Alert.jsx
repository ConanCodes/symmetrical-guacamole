import { Link } from 'react-router-dom';

function App() {
    return (
        <>
        <div>
            <h2>Hello, why can't I remove the line above this from certain pages?</h2>
            <h3> is there such thing as an h3?</h3>
            <h4>I wonder if there is an h4 too?</h4>
            <h5>ahh okay so the text just keeps on getting smaller</h5>
            <h6>Let's see if I can link this back to home and guacc</h6>
        </div>
        <Link to="/">Home</Link>
        <Link to="/guacc">Guacc</Link>
        </>
    );
}

export default App;