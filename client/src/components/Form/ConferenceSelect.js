import React, { useState } from "react";
import { Label, Input } from 'reactstrap';

export const ConferenceSelect = (props) => {

    const conferences = ["Eastern", "Western", "All Teams"]

    return (
        <React.Fragment>
            {/* <Label for="conferenceSelect">Conference</Label> */}
            <Input type="select" name="conferenceSelect" id="conferenceSelect" onChange={e => props.identifierChange(e.target.value)} >
                {conferences.map((conference, index) => {
                    return (
                        <option key={index}>{conference}</option>
                    );
                })}
            </Input>
        </React.Fragment>
    );
}