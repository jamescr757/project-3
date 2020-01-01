import React from "react";
import Title from "./Title";


export const ConferenceTitle = ({ identifier }) => {

    return (
        identifier === "All Teams" ? 

        <Title>{identifier}</Title> 
        
        : <Title>{identifier} Conference</Title>
    );
}
