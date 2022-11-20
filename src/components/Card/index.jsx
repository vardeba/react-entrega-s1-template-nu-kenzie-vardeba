import React from "react";
import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";

export const Card = ({ transaction, index }) => {
    console.log(transaction);
    return (
        <div>
            <li
                key={index}
                className={
                    transaction.type === "entrada"
                        ? "card cardEntries"
                        : "card cardExpenses"
                }
            >
                <div className="cardTop">
                    <h2>{transaction.description}</h2>
                    <div className="valueTrash">
                        <p>
                            {transaction.value < 0
                                ? (transaction.value * -1).toLocaleString(
                                      "pt-br",
                                      { style: "currency", currency: "BRL" }
                                  )
                                : transaction.value.toLocaleString("pt-br", {
                                      style: "currency",
                                      currency: "BRL",
                                  })}
                        </p>
                        <button className="btn_trash"></button>
                    </div>
                </div>
                <span>
                    {transaction.type === "entrada" ? "Entrada" : "Despesa"}
                </span>
            </li>
        </div>
    );
};
