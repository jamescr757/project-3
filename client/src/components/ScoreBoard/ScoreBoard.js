import React from "react";
import Grid from "@material-ui/core/Grid";
import ScoreCard from "./ScoreCard";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }

}));

const ScoreBoard = () => {
    
    const classes = useStyles();

    const [gameInfo, setGameInfo] = useState([]);
    // const [gameHighlights, setGameHighlights] = useState();

    useEffect(() => {
        API.getYesterdayScores()
            .then(response => {
                setGameInfo(response.data);
            })
            .catch(error => {
                console.log("error in component did mount, get yesterday scores");
                console.log(error.message);
            })
    }, []) 

    return (
        <Container className={classes.cardGrid} maxWidth="xl">
            <Grid container spacing={4}>
                {gameInfo.map((game, index) => (
                <Grid 
                    item 
                    key={index} 
                    xs={12} 
                    sm={6} 
                    md={4}
                    lg={3}
                >
                    <ScoreCard game={{...game}}/>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ScoreBoard;