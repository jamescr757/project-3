import React, { useState } from "react";
import { Label, Input } from 'reactstrap';
import teamInfo from "../../utils/teamInfo";

export const TeamSelect = (props) => {

    return (
        <React.Fragment>
            {/* <Label for="teamSelect">Favorite</Label> */}
            <Input style={{ textTransform: "capitalize" }} type="select" name="teamSelect" id="teamSelect" onChange={(e) => props.identifierChange(e.target.value)} >
                {teamInfo.teamsArray.map((team, index) => {
                    return (
                        <option key={index} value={team}>{teamInfo.teamFullName(team)}</option>
                    );
                })}
            </Input>
        </React.Fragment>
    );
}