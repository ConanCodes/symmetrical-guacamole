import { PureComponent } from "react";
import { Routes, Route } from "react-router-dom";
import App from '../components/App';
import HowToBowl from "../components/HowToBowl";
import Guacc from "../components/Guacc";
import ButtonPage from "../components/ButtonPage";
import BasicTable from "../components/BasicTable";

export default class Routing extends PureComponent {

    render() {
        return (
            <div className="App">
                <h1>This is going to take awhile...</h1>
                <Routes>
                    <Route path="/howtobowl" element={<HowToBowl />} />
                    <Route path="/Guacc" element={<Guacc />} />
                    <Route path="/ButtonPage" element={<ButtonPage />} />
                    <Route path="/BasicTable" element={<BasicTable />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </div>
        )
    }
}
