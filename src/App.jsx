import "./App.css";
import { HomePage } from "./components/HomePage";
import { LandPage } from "./components/LandPage";

export const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <HomePage />
            </div>
        </div>
    );
};
