import React from "react";
import "../../index.css";
import "../../styles/buttons.css";
import { Card } from "../Card";
import "./styles.css";

export const List = ({ listTransactions, handleListTransactions }) => {
    return (
        <div>
            <ul className="cards">
                {listTransactions.map((transaction, index) => (
                    <Card
                        transaction={transaction}
                        key={index}
                        handleListTransactions={handleListTransactions}
                    />
                ))}
            </ul>
        </div>
    );
};
