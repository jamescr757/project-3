import React from "react";
import Typography from "@material-ui/core/Typography";
import "../ScoreCard.css";
import teamInfo from "../../../../utils/teamInfo";
import { Link } from "react-router-dom";
import { ParamsContext } from "../../../../utils/ParamsContext";

const classNames = require("classnames");

function TeamName(props) {

    const { team, loser, winner, category } = props;
    const { table, days, location, outcome, rival, ot } = React.useContext(ParamsContext);

    const teamClass = classNames({
        "future": !winner,
        "loser": team === loser,
        "winner": team === winner
    });

    const toLogic = () => {
        
        if (category && table === "completed") {
            return `/multiple/team/completed/${teamInfo.teamNameConverter(team)}/${days}/${location}/${outcome}/${rival}/${ot}/desc`;
        } else if (category && table === "future") {
            return `/multiple/team/future/${teamInfo.teamNameConverter(team)}/${days}/${location}/${outcome}/${rival}/${ot}/asc`;
        } else {
            return `/multiple/team/completed/${teamInfo.teamNameConverter(team)}/7/all/all/false/false/desc`;
        }
    }

    return (
        <Link
            className={teamClass}
            to={toLogic()}
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