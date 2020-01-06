import React, { useState } from "react";
import { Label, Input } from 'reactstrap';
import teamInfo from "../../utils/teamInfo";

export const TeamSelect = (props) => {
    
    const teamsFullNameArray = teamInfo.teamsArray.map((team) => {
        return teamInfo.teamFullName(team);
    })

    return (
        <React.Fragment>
            {/* <Label for="teamSelect">Favorite</Label> */}
            <Input style={{ textTransform: "capitalize" }} type="select" name="teamSelect" id="teamSelect" onChange={(e) => props.identifierChange(e.target.value)} >
                {teamsFullNameArray.sort().map((team, index) => {
                    return (
                        <option key={index} value={teamInfo.teamShortName(team)}>{team}</option>
                    );
                })}
            </Input>
        </React.Fragment>
    );
}