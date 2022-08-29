import React, { PureComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from '../Components/App';

export default class Routing extends PureComponent {

    render() {
        return (
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        )
    }
}