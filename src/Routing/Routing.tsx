import { PureComponent } from "react";
import { Provider } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import App from '../components/App';
import BasicTable from "../components/BasicTable";
import ButtonPage from "../components/ButtonPage";
import Guacc from "../components/Guacc";
import MonsterFighter from "../components/MonsterFighter";

export default class Routing extends PureComponent {

    render() {
        return (
            <div className="App">
                <h1>This is going to take awhile...</h1>
                <Routes>
                    {/* Figure out a standard with capalization of your paths, normally its camelCase */}
                    {/* @ts-ignore */}
                    <Route path="/MonsterFighter" element={<MonsterFighter />} />
                    <Route path="/Guacc" element={<Guacc />} />
                    <Route path="/ButtonPage" element={<ButtonPage />} />
                    <Route path="/BasicTable" element={<BasicTable />} />
                    <Route path="/" element={<App />} />
                </Routes>

            </div>
        )
    }
}
