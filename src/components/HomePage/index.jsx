import React from "react";
import { Header } from "./Header";
import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";
import { Form } from "../Form";
import { List } from "../List";

export const HomePage = ({ listTransactions, setListTransactions }) => {
    return (
        <div className="homePageContainer">
            <Header />
            <main className="mainContainer container">
                <aside>
                    <Form
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                    />
                    {/* <form>
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
                                    <option value="Entrada" selected>
                                        Entrada
                                    </option>
                                    <option value="Despesa">Despesa</option>
                                </select>
                            </div>
                        </div>
                        <button className="insertValue btn_primary_large">
                            Inserir valor
                        </button>
                    </form> */}
                    <div className="totalContainer">
                        <div className="totalTop">
                            <h2>Valor total:</h2>
                            <span>R$ 0,00</span>
                        </div>
                        <p>O valor se refere ao saldo</p>
                    </div>
                </aside>
                <section>
                    <div className="financialResume">
                        <div className="resumeHeader">
                            <h3>Resumo financeiro</h3>
                            <div className="resumeHeaderButtons">
                                <button className="resumeHeaderButtonAll btn_primary_small">
                                    Todos
                                </button>
                                <button className="resumeHeaderButtonEntries btn_gray_small">
                                    Entradas
                                </button>
                                <button className="resumeHeaderButtonExpenses btn_gray_small">
                                    Despesas
                                </button>
                            </div>
                        </div>
                        <div className="noCards">
                            <p>Você ainda não possui nenhum lançamento</p>
                            <img src="#" alt="NoCardsImg" />
                        </div>
                        <div className="financialCards">
                            <List listTransactions={listTransactions} />
                            {/* <ul className="cards">
                                <li className="card cardExpenses">
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
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
