import React from "react";
import "./TeamTitle.css";

export const HeroTeamLogo = ({ identifier, fullTeamName }) => {

    return (
        <img 
            className="id-page-logo"
            src={`${process.env.PUBLIC_URL}/images/${identifier}.png`}
            alt={fullTeamName}  
        />
    );
}