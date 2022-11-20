import React from "react";
import { Header } from "../Header";
import { Form } from "../Form";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";

import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";
import { NoCard } from "../NoCard";

export const HomePage = ({
    filterList,
    setFilterList,
    setIsLoggedIn,
    listTransactions,
    addTransaction,
    handleListTransactions,
}) => {
    return (
        <div className="homePageContainer">
            <Header setIsLoggedIn={setIsLoggedIn} />
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
                                <button
                                    onClick={() => setFilterList("todos")}
                                    className={
                                        filterList === "todos"
                                            ? "resumeHeaderButtonAll btn_primary_small"
                                            : "resumeHeaderButtonAll btn_gray_small"
                                    }
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setFilterList("entrada")}
                                    className={
                                        filterList === "entrada"
                                            ? "resumeHeaderButtonEntries btn_primary_small"
                                            : "resumeHeaderButtonEntries btn_gray_small"
                                    }
                                >
                                    Entradas
                                </button>
                                <button
                                    onClick={() => setFilterList("saída")}
                                    className={
                                        filterList === "saída"
                                            ? "resumeHeaderButtonExpenses btn_primary_small"
                                            : "resumeHeaderButtonExpenses btn_gray_small"
                                    }
                                >
                                    Despesas
                                </button>
                            </div>
                        </div>
                        {listTransactions < 1 ? (
                            <NoCard />
                        ) : (
                            <div className="financialCards">
                                <List
                                    filterList={filterList}
                                    setFilterList={setFilterList}
                                    listTransactions={listTransactions}
                                    handleListTransactions={
                                        handleListTransactions
                                    }
                                />
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};
