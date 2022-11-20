import { useState } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { LandPage } from "./components/LandPage";

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [listTransactions, setListTransactions] = useState([]);
    const [filterList, setFilterList] = useState("todos");

    const addTransaction = (newTransaction) => {
        setListTransactions([...listTransactions, newTransaction]);
    };

    const handleListTransactions = (transaction) => {
        const newListTransactions = listTransactions.filter(
            (element) => element !== transaction
        );
        setListTransactions(newListTransactions);
    };

    return (
        <div className="App">
            <div className="App-header">
                {!isLoggedIn ? (
                    <LandPage setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <HomePage
                        filterList={filterList}
                        setFilterList={setFilterList}
                        setIsLoggedIn={setIsLoggedIn}
                        listTransactions={listTransactions}
                        addTransaction={addTransaction}
                        handleListTransactions={handleListTransactions}
                    />
                )}
            </div>
        </div>
    );
};
