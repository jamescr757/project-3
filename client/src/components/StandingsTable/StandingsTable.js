import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import teamInfo from "../../utils/teamInfo";


const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      minHeight: "60vh"
    },
    noGames: {
        textAlign: "center"
    },
    card: {
        height: '100%'
    },
    cardContent: {
        flexGrow: 1,
        paddingTop: 0,
        paddingBottom: 0
    },

}));

const StandingsTable = (props) => {
    
    const classes = useStyles();

    const [records, setRecords] = useState([]);

    const { order } = props.match.params;

    useEffect(() => {
        
        API.getRecords(order)
            .then(res => {
                if (res.data === "error") {
                    console.log("there's been a db error");
                }

                setRecords(res.data);
            })
            .catch(error => {
                console.log(error);
                console.log("there's been an error retrieving the standings");
            })
    }, [order]);

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={1} direction="column">
                {records.map((entry, index) => (
                <Grid 
                    item 
                    key={index} 
                    xs={12} 
                >
                    <Card>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h6">
                                {teamInfo.teamFullNameCaptilized(entry.team)} {` `} {entry.points}
                            </Typography>
                        </CardContent>
                    </Card>   
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default StandingsTable;