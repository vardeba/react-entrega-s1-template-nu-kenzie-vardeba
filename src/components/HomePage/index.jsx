import React from "react";
import "../../index.css";
import { Header } from "./Header";
import "./styles.css";

export const HomePage = () => {
    return (
        <div className="homePageContainer">
            <Header />
            <main className="mainContainer container">
                <aside>
                    <form action="">
                        <label htmlFor="">Descrição</label>
                        <input
                            type="text"
                            placeholder="Digite aqui sua descrição"
                        />
                        <p>Ex: Compra de roupas</p>
                        <div>
                            <div>
                                <label htmlFor="">Valor</label>
                                <input type="text" placeholder="R$" />
                            </div>
                            <div>
                                <label htmlFor="">Tipo de valor</label>
                                <select name="" id="">
                                    <option value="Entrada" selected>
                                        Entrada
                                    </option>
                                    <option value="Saída">Despesa</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </aside>
                <section>
                    <div className="financialResume">
                        <div className="resumeHeader">
                            <h2>Resumo financeiro</h2>
                            <div className="resumeHeaderButtons">
                                <button>Todos</button>
                                <button>Entradas</button>
                                <button>Despesas</button>
                            </div>
                        </div>
                        <div className="noCards">
                            <h1>Você ainda não possui nenhum lançamento</h1>
                            <img src="#" alt="NoCardsImg" />
                        </div>
                        <div className="financialCards">
                            <ul>
                                <li>
                                    <div className="cardTop">
                                        <h2>Description Value</h2>
                                        <div>
                                            <p>R$ 0,00</p>
                                            <button className="btn_trash"></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
