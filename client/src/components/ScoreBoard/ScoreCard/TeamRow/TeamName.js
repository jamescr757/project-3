import React from "react";
import Typography from "@material-ui/core/Typography";
import "../ScoreCard.css";

const classNames = require("classnames");

function TeamName({ team, loser, winner, teamScore }) {

    const teamClass = classNames({
        "loser": team === loser,
        "winner": team === winner,
        "future": !teamScore
    });

    return (
        <Typography 
            className={teamClass} 
            component="span" 
            variant="h5"
            >
                {team}
        </Typography>
    );
}

export default TeamName;