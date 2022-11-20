import { useState } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { LandPage } from "./components/LandPage";

export const App = () => {
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 },
    ]);

    const addTransaction = (newTransaction) => {
        setListTransactions([...listTransactions, newTransaction]);
    };

    const handleListTransactions = (transaction) => {
        const newListTransactions = listTransactions.filter(
            (element) => element !== transaction
        );
        console.log(newListTransactions);
        setListTransactions(newListTransactions);
    };

    return (
        <div className="App">
            <div className="App-header">
                <HomePage
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    addTransaction={addTransaction}
                    handleListTransactions={handleListTransactions}
                />
            </div>
        </div>
    );
};
