import React, { useState } from "react";
import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";

export const Form = ({ addTransaction }) => {
    const [transactionDescription, setTransactionDescription] = useState("");
    const [transactionValue, setTransactionValue] = useState("");
    const [transactionType, setTransactionType] = useState();
    let transaction = {};

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <label htmlFor="description">Descrição</label>
                <input
                    id="description"
                    className="inputDescription"
                    type="text"
                    placeholder="Digite aqui sua descrição"
                    required
                    value={transactionDescription}
                    onChange={(event) =>
                        setTransactionDescription(event.target.value)
                    }
                />
                <p className="exemple">Ex: Compra de roupas</p>
                <div className="valueTypeOfValue">
                    <div className="valueLabelInput">
                        <label htmlFor="value">Valor</label>
                        <input
                            id="value"
                            className="inputValue"
                            type="number"
                            placeholder="0,00"
                            required
                            value={transactionValue}
                            onChange={(event) =>
                                setTransactionValue(event.target.value)
                            }
                        />
                    </div>
                    <div className="typeOfValue">
                        <label htmlFor="type">Tipo de valor</label>
                        <select
                            name="type"
                            id="type"
                            required
                            value={transactionType}
                            onChange={(event) =>
                                setTransactionType(event.target.value)
                            }
                        >
                            <option value="" hidden>
                                Selecione
                            </option>
                            <option value="entrada">Entrada</option>
                            <option value="saída">Despesa</option>
                        </select>
                    </div>
                </div>
                <button
                    className="insertValue btn_primary_large"
                    onClick={() => {
                        if (
                            transactionDescription !== "" &&
                            (transactionType === "entrada" ||
                                transactionType === "saída") &&
                            transactionValue !== ""
                        ) {
                            transaction = {
                                description: transactionDescription,
                                type: transactionType,
                                value:
                                    transactionType === "entrada"
                                        ? parseFloat(transactionValue)
                                        : parseFloat(transactionValue) * -1,
                            };
                            addTransaction(transaction);
                            setTransactionDescription("");
                            setTransactionValue("");
                            setTransactionType("Selecione");
                        }
                    }}
                >
                    Inserir valor
                </button>
            </form>
        </div>
    );
};
