import React from "react";
import Typography from "@material-ui/core/Typography";
import "../ScoreCard.css";

const classNames = require("classnames");

function TeamScore({ team, loser, winner, teamScore }) {

    const teamClass = classNames({
        "loser": team === loser,
        "winner": team === winner
    });

    return (
        <Typography 
            className={teamClass} 
            component="span" 
            variant="h5"
            >
                {teamScore >= 0 ? teamScore : ""}
        </Typography>
    );
}

export default TeamScore;