import { useState } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { LandPage } from "./components/LandPage";

export const App = () => {
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 },
    ]);

    return (
        <div className="App">
            <div className="App-header">
                <HomePage
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                />
            </div>
        </div>
    );
};
