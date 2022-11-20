import React from "react";
import "../../index.css";
import "../../styles/buttons.css";
import { Card } from "../Card";
import "./styles.css";

export const List = ({ listTransactions }) => {
    return (
        <div>
            <ul className="cards">
                {listTransactions.map((transaction, index) => (
                    <Card transaction={transaction} key={index} />
                ))}
                {/* <li className="card cardExpenses">
                    <div className="cardTop">
                        <h2>Compra - Camiseta Preta</h2>
                        <div className="valueTrash">
                            <p>R$ 60,00</p>
                            <button className="btn_trash"></button>
                        </div>
                    </div>
                    <span>Despesa</span>
                </li>
                <li className="card cardEntries">
                    <div className="cardTop">
                        <h2>Salário - Mês Dezembro</h2>
                        <div className="valueTrash">
                            <p>R$ 6.600,00</p>
                            <button className="btn_trash"></button>
                        </div>
                    </div>
                    <span>Entrada</span>
                </li> */}
            </ul>
        </div>
    );
};
