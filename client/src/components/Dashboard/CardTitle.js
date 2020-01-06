import React from "react";
import TeamTitle from "./TeamTitle";
import DivisionTitle from "./DivisionTitle";
import ConferenceTitle from "./ConferenceTitle";

export default function({ category, identifier }) {

    return (
        <React.Fragment>
            {category === "team" && <TeamTitle identifier={identifier} />}
            {category === "division" && <DivisionTitle identifier={identifier} />}
            {category === "conference" && <ConferenceTitle identifier={identifier} />}
        </React.Fragment>
    );
}