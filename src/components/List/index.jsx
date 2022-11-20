import React from "react";
import "../../index.css";
import { Card } from "../Card";
import "../../styles/buttons.css";
import "./styles.css";
import { NoCard } from "../NoCard";

export const List = ({
    filterList,
    setFilterList,
    listTransactions,
    handleListTransactions,
}) => {
    const filteredList = listTransactions.filter(
        (transaction) => transaction.type === filterList
    );
    return (
        <div>
            <ul className="cards">
                {filterList === "todos" ? (
                    listTransactions.map((transaction, index) => (
                        <Card
                            transaction={transaction}
                            key={index}
                            handleListTransactions={handleListTransactions}
                        />
                    ))
                ) : filteredList < 1 ? (
                    <NoCard />
                ) : (
                    filteredList.map((transaction, index) => (
                        <Card
                            transaction={transaction}
                            key={index}
                            handleListTransactions={handleListTransactions}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};
