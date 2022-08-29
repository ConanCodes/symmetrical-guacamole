import React, { PureComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from '../Components/App';

export default class Routing extends PureComponent {

    render() {
        return (
            <div className="App">
                <h1>Welcome to React Router!</h1>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </div>
        )
    }
}