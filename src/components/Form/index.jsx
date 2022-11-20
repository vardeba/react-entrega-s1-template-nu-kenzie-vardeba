import React from "react";
import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";

export const Form = ({ listTransactions, setListTransactions }) => {
    return (
        <div>
            <form>
                <label htmlFor="">Descrição</label>
                <input
                    className="inputDescription"
                    type="text"
                    placeholder="Digite aqui sua descrição"
                />
                <p className="exemple">Ex: Compra de roupas</p>
                <div className="valueTypeOfValue">
                    <div className="valueLabelInput">
                        <label htmlFor="">Valor</label>
                        <input type="text" placeholder="R$" />
                    </div>
                    <div className="typeOfValue">
                        <label htmlFor="">Tipo de valor</label>
                        <select name="" id="">
                            <option value="entrada" selected>
                                Entrada
                            </option>
                            <option value="saída">Despesa</option>
                        </select>
                    </div>
                </div>
                <button className="insertValue btn_primary_large">
                    Inserir valor
                </button>
            </form>
        </div>
    );
};
