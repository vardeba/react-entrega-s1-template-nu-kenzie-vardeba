import React from "react";
import "../../../index.css";
import "../../../styles/buttons.css";
import "./styles.css";

import NuKenzieBlackLogo from "../../../assets/nukenzie_black_logo.svg";

export const Header = () => {
    return (
        <header className="homePageHeader">
            <div className="headerLogoButton container">
                <img src={NuKenzieBlackLogo} alt="Nu Kenzie Logo" />
                <button className="homePageHeaderButton btn_gray_small">
                    Inicio
                </button>
            </div>
        </header>
    );
};
