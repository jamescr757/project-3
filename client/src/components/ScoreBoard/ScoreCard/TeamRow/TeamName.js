import React from "react";
import Typography from "@material-ui/core/Typography";
import "../ScoreCard.css";
import teamInfo from "../../../../utils/teamInfo";
import { Link } from "react-router-dom";

const classNames = require("classnames");

function TeamName(props) {

    const { team, loser, winner, category } = props;

    const teamClass = classNames({
        "future": !winner,
        "loser": team === loser,
        "winner": team === winner
    });

    const toLogic = () => {
        
        if (category && props.match.params.table === "completed") {
            return `/multiple/team/completed/${teamInfo.teamNameConverter(team)}/${props.match.params.days}/${props.match.params.location}/${props.match.params.outcome}/${props.match.params.rival}/${props.match.params.ot}/desc`;
        } else if (category && props.match.params.table === "future") {
            return `/multiple/team/future/${teamInfo.teamNameConverter(team)}/${props.match.params.days}/${props.match.params.location}/${props.match.params.outcome}/${props.match.params.rival}/${props.match.params.ot}/asc`;
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