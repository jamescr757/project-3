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

const CustomScoreBoard = (props) => {
    
    const classes = useStyles();

    const [gameInfo, setGameInfo] = useState([]);
    const [userData, setUserData] = useState([]);
    const [noData, setNoData] = useState(false);
    // const [dbError, setDbError] = useState(false);

    const { email, table, days, sort } = React.useContext(ParamsContext);

    useEffect(() => {

        if (userData.length === 0) {
            API.findUserData(email)
            .then(response => {
                if (response.data === "error") {
                    // setDbError(true);
                } else {

                    const identifierArr = [];
                
                    response.data.forEach(entry => {

                        identifierArr.push(entry.identifier);
                    })

                    API.getCustomScores(identifierArr, days, sort)
                        .then(res => {
                            if (res.data.length === 0) {
                                setNoData(true);
            
                            } else setNoData(false);

                            setGameInfo(res.data);
                        })
                        .catch(error => {
                            console.log("error getting user games");
                            console.log(error.message);
                        })

                    setUserData(identifierArr);
                }
            })
            .catch(error => {
                console.log("error getting user notifications");
                console.log(error.message);
            })

        } else {

            if (table === "completed") {
                API.getCustomScores(userData, days, sort)
                .then(res => {
                    if (res.data.length === 0) {
                        setNoData(true);
    
                    } else setNoData(false);
    
                    setGameInfo(res.data);
                })
                .catch(error => {
                    console.log("error getting user games");
                    console.log(error.message);
                });
            } else {
                API.getCustomGames(userData, days, sort)
                .then(res => {
                    if (res.data.length === 0) {
                        setNoData(true);
    
                    } else setNoData(false);
    
                    setGameInfo(res.data);
                })
                .catch(error => {
                    console.log("error getting user games");
                    console.log(error.message);
                });
            }
        }
        
        
    }, [table, days, sort]);

    const renderNoData = () => {
        
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
                        category={false}
                        {...props}
                    />
                </Grid>
                ))}
                {noData && renderNoData()}
            </Grid>
        </Container>
    );
}

export default CustomScoreBoard;