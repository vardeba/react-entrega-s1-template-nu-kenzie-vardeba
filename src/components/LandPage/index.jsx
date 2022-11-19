import React from "react";
import "../../index.css";
import "./styles.css";

import KenzieLogoWhite from "../../assets/nukenzie_white_logo.svg";
import LandPageIllustration from "../../assets/landpage_illustration.svg";

export const LandPage = () => {
    return (
        <div className="landPage">
            <section className="landPageDescription">
                <img src={KenzieLogoWhite} alt="Nu Kenzie Logo" />
                <h1>Centralize o controle de suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button>Iniciar</button>
            </section>
            <section className="landPageIlustration">
                <img src={LandPageIllustration} alt="" />
            </section>
        </div>
    );
};
