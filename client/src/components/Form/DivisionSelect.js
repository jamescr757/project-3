import React, { useState } from "react";
import { Label, Input } from 'reactstrap';

export const DivisionSelect = (props) => {

    const divisions = ["Atlantic", "Metropolitan", "Central", "Pacific"]

    return (
        <React.Fragment>
            {/* <Label for="divisionSelect">Division</Label> */}
            <Input type="select" name="divisionSelect" id="divisionSelect" onChange={e => props.identifierChange(e.target.value)} >
                {divisions.map((division, index) => {
                    return (
                        <option key={index}>{division}</option>
                    );
                })}
            </Input>
        </React.Fragment>
    );
}