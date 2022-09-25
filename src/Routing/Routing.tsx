import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../Components/App";
import BasicTable from "../Components/BasicTable";
import ButtonPage from "../Components/ButtonPage";
import Guacc from "../Components/Guacc";
import MonsterFighter from "../Components/MonsterFighter";


export default class Routing extends PureComponent {

    render() {
        return (
            <div className="App">
                <h1>This is going to take awhile...</h1>
                <Routes>
                    {/* Figure out a standard with capalization of your paths, normally its camelCase */}
                    {/* @ts-ignore */}
                    <Route path="/monsterFighter" element={<MonsterFighter />} />
                    {/* <Route path="/Guacc" element={<Guacc />} />
                    <Route path="/ButtonPage" element={<ButtonPage />} />
                    <Route path="/BasicTable" element={<BasicTable />} />
                    <Route path="/" element={<App />} /> */}
                </Routes>

            </div>
        )
    }
}
