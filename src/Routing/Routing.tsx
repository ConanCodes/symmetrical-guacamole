import { PureComponent } from "react";
import { Routes, Route } from "react-router-dom";
import App from '../components/App';
import BasicTable from "../components/BasicTable";
import Guacc from "../components/Guacc";
import Alert from "../components/Alert";

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