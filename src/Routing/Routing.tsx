import React, { PureComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from '../Components/App';
import BasicTable from "../Components/BasicTable";
import Guacc from "../Components/Guacc";
import Alert from "../Components/Alert";

export default class Routing extends PureComponent {

    render() {
       
        return (
            <div className="App">
                <h1>This is going to take awhile...</h1>
                <Routes>
                    <Route path="/basictable" element={<BasicTable />} />
                    <Route path="/Guacc" element={<Guacc />} />
                    <Route path="/Alert" element={<Alert />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </div>
        )
    }
}