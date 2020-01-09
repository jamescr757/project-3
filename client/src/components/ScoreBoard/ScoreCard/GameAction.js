import React from "react";
import Button from "@material-ui/core/Button";
import teamInfo from "../../../utils/teamInfo";
import "../../Hero/Filters/Button.css"
import { Grid } from "@material-ui/core";


function GameAction({ homeTeamScore, homeTeam, awayTeam, date, ticketLink, handleModalOpen }) {

    return (
        homeTeamScore >= 0 ?
                <Grid container justify="center" xs={12}>
                    <Button
                        onClick={()=>handleModalOpen(teamInfo.teamNameJoiner5(homeTeam, awayTeam), date, "5")}
                        size="small"
                        color="primary"
                        className="scorecard-btn-link mx-2 px-1"
                        >
                            5 Min Highlight
                    </Button>
                    <Button
                        onClick={()=>handleModalOpen(teamInfo.teamNameJoiner5(homeTeam, awayTeam), date, "9")}
                        size="small"
                        color="primary"
                        className="scorecard-btn-link mx-2 px-1"
                        >
                            9 Min Highlight
                    </Button>
                </Grid>
            :
            <Grid container justify="center">
                { ticketLink ? 
                    <a 
                        href={`${ticketLink}`} 
                        target="_blank"
                        className="scorecard-btn-link"
                        >
                        <Button
                            size="small"
                            color="primary"
                            className="scorecard-btn-link"
                            >
                            View Tickets
                        </Button>
                    </a>
                :
                    <a 
                        href={`https://seatgeek.com/${teamInfo.teamFullName(homeTeam)}-tickets`} 
                        target="_blank"
                        className="scorecard-btn-link"
                        >
                        <Button
                            size="small"
                            color="primary"
                            className="scorecard-btn-link"
                            >
                            View Tickets
                        </Button>
                    </a>
                }
            </Grid>
    );
}

export default GameAction;

// /home-at-road-tickets/month(m)-day(d)-year(yyyy)-vancouver-canada-rogers-arena/nhl