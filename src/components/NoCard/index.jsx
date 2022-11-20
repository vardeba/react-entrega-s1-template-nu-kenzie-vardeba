import React from "react";
import "../../index.css";
import "../../styles/buttons.css";
import "./styles.css";
import noCardIllustration from "../../assets/no_card.svg";

export const NoCard = () => {
    return (
        <div>
            <div className="noCards">
                <p>Você ainda não possui nenhum lançamento</p>
                <img src={noCardIllustration} alt="NoCardsImg" />
            </div>
        </div>
    );
};
