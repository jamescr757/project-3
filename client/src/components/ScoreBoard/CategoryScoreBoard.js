import React from "react";
import Grid from "@material-ui/core/Grid";
import ScoreCard from "./ScoreCard";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { ParamsContext } from "../../utils/ParamsContext";

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

const APIcall = (table, inputObj) => {

    if (table === "completed") {
        return API.getScoresByCategory(inputObj)
    } else {
        return API.getFutureGamesByCategory(inputObj)
    }
}

const CategoryScoreBoard = (props) => {
    
    const classes = useStyles();

    const [gameInfo, setGameInfo] = useState([]);
    const [noData, setNoData] = useState(false);

    const params = React.useContext(ParamsContext);
    const { category, table, identifier, days, location, outcome, rival, ot, sort } = params

    useEffect(() => {

        APIcall(table, params)
            .then(response => {
                if (response.data.length === 0) {
                    setNoData(true);

                } else setNoData(false);
                
                setGameInfo(response.data);
            })
            .catch(error => {
                console.log("error getting scores");
                console.log(error.message);
            })
        
    }, [category, table, identifier, days, location, outcome, rival, ot, sort]) 

    const renderNoGames = () => {
        
        return (
            <Box width="100%">
                <Typography
                    component="h2"
                    color="textPrimary"
                    className={classes.noGames}
                >
                    There are no games that match the specified filters.
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
                    md={6}
                    lg={4}
                >
                    <ScoreCard 
                        date={true}
                        game={{...game}}
                        table={table}
                        category={true}
                        {...props}
                    />
                </Grid>
                ))}
                {noData && renderNoGames()}
            </Grid>
        </Container>
    );
}

export default CategoryScoreBoard;