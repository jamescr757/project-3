import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import API from "../../../utils/API";
import GameAction from "./GameAction";
import TeamRow from "./TeamRow";
import CardTitle from "./CardTitle/CardTitle";
import HighlightModal from "./HighlightModal";
import ScoreArrow from "./TeamRow/ScoreArrow";
import "./ScoreCard.css"
import moment from "moment";


const useStyles = makeStyles(theme => ({

    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
      paddingTop: 12,
      paddingBottom: 12
    },

}));

const ScoreCard = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [gameHighlight, setGameHighlight] = useState();

    const handleModalOpen = (teams, date, type) => {

        API.getHighlight(teams, date, type)
            .then((res) => {
                console.log(res.data[0]);
                setGameHighlight(res.data[0].id.videoId)
            })
            .catch(error => console.log(error));

        setOpen(true);
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    const { awayTeam, homeTeam, loser, winner, overtime, homeTeamScore, awayTeamScore, homeTeamRecord, awayTeamRecord, date } = props.game;

    return (
        <React.Fragment>
            <Card className={classes.card}>
            
                <CardTitle 
                    date={props.date}
                    overtime={overtime}
                    winner={winner}
                    momentDate={moment(date).format("ddd M/D")}
                    table={props.table}
                />
            
                <CardContent className={classes.cardContent}>
                    <Grid 
                        container 
                        direction="column" 
                        spacing={3}
                        >

                        <Grid 
                            item  
                            xs={12} 
                            container
                            justify="space-between"
                            className="pr-0"
                            >
                                <Grid
                                  item
                                  xs={11}
                                  container
                                  justify="space-between"
                                >
                                    <TeamRow 
                                    team={awayTeam}
                                    winner={winner}
                                    loser={loser}
                                    teamScore={awayTeamScore}
                                    teamRecord={awayTeamRecord}
                                    />
                                </Grid>

                                <Grid
                                  item
                                  xs={1}
                                  container
                                  justify="flex-end"
                                >
                                    <ScoreArrow 
                                        team={awayTeam}
                                        winner={winner}
                                    />
                                </Grid>
                            
                        </Grid>

                        <Grid 
                            item 
                            xs={12} 
                            container
                            justify="space-between"
                            className="pr-0"
                            >

                                <Grid
                                  item
                                  xs={11}
                                  container
                                  justify="space-between"
                                >
                                    <TeamRow 
                                    team={homeTeam}
                                    winner={winner}
                                    loser={loser}
                                    teamScore={homeTeamScore}
                                    teamRecord={homeTeamRecord}
                                    />
                                </Grid>

                                <Grid
                                  item
                                  xs={1}
                                  container
                                  justify="flex-end"
                                >
                                    <ScoreArrow 
                                        team={homeTeam}
                                        winner={winner}
                                    />
                                </Grid>

                        </Grid>

                    </Grid>
                </CardContent>

                <CardActions className="px-0 pt-3">

                    <GameAction 
                        {...props.game}
                        handleModalOpen={handleModalOpen}
                        />

                </CardActions>
                
            </Card>

            <HighlightModal 
                open={open}
                onClose={handleModalClose}
                awayTeam={awayTeam}
                homeTeam={homeTeam}
                gameHighlight={gameHighlight}
                />
        </React.Fragment>
    );
}

export default ScoreCard;