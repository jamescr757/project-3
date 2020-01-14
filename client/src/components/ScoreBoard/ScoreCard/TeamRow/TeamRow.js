import React from "react";
import Grid from "@material-ui/core/Grid";
import TeamLogo from "./TeamLogo";
import TeamName from "./TeamName";
import TeamRecord from "./TeamRecord";
import TeamScore from "./TeamScore";
import "../ScoreCard.css";


function TeamRow(props) {

    const { team, winner, loser, teamScore, teamRecord } = props

    return (
        <React.Fragment>
            <Grid 
                item 
                xs={11}
                container
                justify="flex-start"
                spacing={2}
                >
                <Grid 
                    item 
                    xs={2}
                    container
                    alignItems="center"
                    >
                    <TeamLogo team={team} />
                </Grid>

                <Grid 
                    item 
                    xs={10} 
                    container
                    direction="column"
                    justify="flex-start"
                    >
                    <TeamName
                        team={team}
                        loser={loser}
                        winner={winner}
                        {...props}
                    />
                    <TeamRecord
                        team={team}
                        loser={loser}
                        winner={winner}
                        teamRecord={teamRecord}
                    />
                </Grid>

            </Grid>
            <Grid 
                item
                xs={1}
                >
                <TeamScore
                    team={team}
                    loser={loser}
                    winner={winner}
                    teamScore={teamScore}
                />
            </Grid>
        </React.Fragment>
    );
}

export default TeamRow;