import React from "react";
import { Header } from "../Header";
import { Form } from "../Form";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";

import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";

export const HomePage = ({
    listTransactions,
    setListTransactions,
    addTransaction,
    handleListTransactions,
}) => {
    return (
        <div className="homePageContainer">
            <Header />
            <main className="mainContainer container">
                <aside>
                    <Form addTransaction={addTransaction} />
                    <TotalMoney listTransactions={listTransactions} />
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
                            <List
                                listTransactions={listTransactions}
                                handleListTransactions={handleListTransactions}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
