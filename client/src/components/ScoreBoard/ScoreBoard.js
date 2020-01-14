import React from "react";
import Grid from "@material-ui/core/Grid";
import ScoreCard from "./ScoreCard";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      minHeight: "55vh"
    },
    noGames: {
        textAlign: "center"
    }

}));

const ScoreBoard = (props) => {
    
    const classes = useStyles();

    const [gameInfo, setGameInfo] = useState([]);

    useEffect(() => {
        API.getScoresByDate(props.date)
            .then(response => {
                if (response.data.length === 0) {
                    props.setNoData(true);

                } else props.setNoData(false);

                setGameInfo(response.data);
            })
            .catch(error => {
                console.log("error getting scores");
                console.log(error.message);
            })
    }, [props.date]) 

    const renderNoGames = () => {
        
        return (
            <Box width="100%">
                <Typography
                    component="h2"
                    color="textPrimary"
                    className={classes.noGames}
                >
                    No games on {props.displayDate}
                </Typography>
            </Box>
        );
    }

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
                {gameInfo.map((game, index) => (
                <Grid 
                    item 
                    key={index} 
                    xs={12} 
                    sm={6} 
                    md={4}
                    lg={4}
                >
                    <ScoreCard 
                        game={{...game}}
                        category={false}
                    />
                </Grid>
                ))}
                {props.noData && renderNoGames()}
            </Grid>
        </Container>
    );
}

export default ScoreBoard;