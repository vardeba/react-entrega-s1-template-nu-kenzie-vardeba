import React from "react";
import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";

export const TotalMoney = ({ listTransactions }) => {
    return (
        <div>
            <div className="totalContainer">
                <div className="totalTop">
                    <h2>Valor total:</h2>
                    <span>
                        {listTransactions
                            .reduce((acumulador, valorAtual) => {
                                return acumulador + valorAtual.value;
                            }, 0)
                            .toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                    </span>
                </div>
                <p>O valor se refere ao saldo</p>
            </div>
        </div>
    );
};
