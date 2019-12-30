import React from "react";
import Typography from "@material-ui/core/Typography";
import "../ScoreCard.css";
import teamInfo from "../../../../utils/teamInfo";
import { Link } from "react-router-dom";

const classNames = require("classnames");

function TeamName({ team, loser, winner, teamScore }) {

    const teamClass = classNames({
        "loser": team === loser,
        "winner": team === winner,
        "future": !teamScore
    });

    return (
        <Link
            to={`/multiple/team/completed/${teamInfo.teamNameConverter(team)}/3/all/all/all/all`}
        >
            <Typography 
                className={teamClass} 
                component="span" 
                variant="h5"
                >
                    {team}
            </Typography>
        </Link>
    );
}

export default TeamName;