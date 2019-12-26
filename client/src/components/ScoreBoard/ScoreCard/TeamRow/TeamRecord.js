import React from "react";
import Typography from "@material-ui/core/Typography";
import "../ScoreCard.css";

const classNames = require("classnames");

function TeamRecord({ team, loser, winner, teamRecord }) {

    const teamClass = classNames({
        "loser": team === loser,
        "winner": team === winner
    });

    return (
        <Typography 
            className={teamClass} 
            component="span" 
            variant="caption"
            >
                ({teamRecord})
        </Typography>
    );
}

export default TeamRecord;