import React from "react";
import Button from "@material-ui/core/Button";
import teamInfo from "../../../utils/teamInfo";


function GameAction({ teamScore, homeTeam, awayTeam, date, ticketDate, handleModalOpen }) {

    return (
        <React.Fragment>
            {teamScore >= 0 ?
                <Button
                    onClick={()=>handleModalOpen(teamInfo.teamNameJoiner(homeTeam, awayTeam), date)}
                    size="small"
                    color="primary"
                    >
                        View Extended Highlights
                </Button>
                :
                <a 
                    href={`https://seatgeek.com/${teamInfo.teamFullName(homeTeam)}-tickets`} 
                    target="_blank"
                    >
                    <Button
                        size="small"
                        color="primary"
                        >
                        View Tickets
                    </Button>
                </a>
            }
        </React.Fragment>
    );
}

export default GameAction;

// /home-at-road-tickets/month(m)-day(d)-year(yyyy)-vancouver-canada-rogers-arena/nhl