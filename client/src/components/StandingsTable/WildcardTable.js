import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import teamInfo from "../../utils/teamInfo";
import "./Standings.css"


const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      minHeight: "60vh"
    },
    noGames: {
        textAlign: "center"
    },
    card: {
        height: '100%'
    },

}));

const WildcardTable = (props) => {
    
    const classes = useStyles();

    const [atlanticRecords, setAtlanticRecords] = useState([]);
    const [metroRecords, setMetroRecords] = useState([]);
    const [centralRecords, setCentralRecords] = useState([]);
    const [pacificRecords, setPacificRecords] = useState([]);
    const [eastWildcardRecords, setEastWildcardRecords] = useState([]);
    const [westWildcardRecords, setWestWildcardRecords] = useState([]);

    const { order } = props.match.params;

    useEffect(() => {
        
        API.getRecords("division")
            .then(res => {
                if (res.data === "error") {
                    console.log("there's been a db error");
                }

                setAtlanticRecords(res.data.slice(0, 3));
                setMetroRecords(res.data.slice(8, 11));
                setCentralRecords(res.data.slice(16, 19));
                setPacificRecords(res.data.slice(23, 26));
                
            })
            .catch(error => {
                console.log(error);
                console.log("there's been an error retrieving the standings");
            })

        API.getRecords("conference")
            .then(res => {
                if (res.data === "error") {
                    console.log("there's been a db error");
                }

                setEastWildcardRecords(res.data.slice(6, 16));
                setWestWildcardRecords(res.data.slice(22));
                
            })
            .catch(error => {
                console.log(error);
                console.log("there's been an error retrieving the standings");
            })
    }, [order]);

    const renderCategoryRow = (title) => {
        return (
             <Grid 
                 item  
                 xs={12} 
                 className="pt-3 standings-page-divider-row"
             >
                 <Card className="border-bottom border-dark standings-page-category-row">
                     <CardContent className="py-0">
                         <Grid container alignItems="center" >
                             <Grid item xs={7}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     {title}
                                 </Typography>
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     GP
                                 </Typography>
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     PTS
                                 </Typography>
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     W
                                 </Typography>
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     L
                                 </Typography>
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     OT
                                 </Typography>
                             </Grid>
                         </Grid>
                     </CardContent>
                 </Card>   
             </Grid>
        ) 
     }

    const renderConferenceRow = (title) => {
        return (
             <Grid 
                 item  
                 xs={12} 
                 className="pt-3 wildcard-page-conference-row"
             >
                 <Card className="wildcard-page-conference-row">
                     <CardContent className="py-0">
                         <Grid container alignItems="center" >
                             <Grid item xs={7}>
                                 <Typography variant="h6" gutterBottom={false}>
                                     {title}
                                </Typography>
                             </Grid>
                             <Grid item xs={1}>
                             </Grid>
                             <Grid item xs={1}>
                             </Grid>
                             <Grid item xs={1}>
                             </Grid>
                             <Grid item xs={1}>
                             </Grid>
                             <Grid item xs={1}>
                             </Grid>
                         </Grid>
                     </CardContent>
                 </Card>   
             </Grid>
        ) 
     }

    const renderTeamRow = (entry, index) => {
        return (
            <Grid 
                item 
                key={index} 
                xs={12} 
                className="standings-page-team-row"
            >
                <Card className="border-bottom border-dark">
                    <CardContent className="py-0">
                        <Grid container alignItems="center">
                            <Grid item xs={7}>
                                <Typography variant="h6" gutterBottom={false}>
                                    {index + 1}
                                    {`  `}
                                    <img 
                                        className="standings-page-logo"
                                        src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(entry.team)}.png`}
                                        alt={teamInfo.teamFullName(entry.team)}  
                                    />
                                    {`  `}
                                    {teamInfo.teamFullNameCaptilized(entry.team)}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom={false}>
                                    {entry.gamesPlayed}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom={false}>
                                    {entry.points}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom={false}>
                                    {entry.wins}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom={false}>
                                    {entry.losses}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom={false}>
                                    {entry.ot}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>   
            </Grid>
        ) 
     }

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={0} direction="column">
                {renderConferenceRow("Eastern Conference")}
                {renderCategoryRow("Atlantic")}
                {atlanticRecords.map((entry, index) => (
                    renderTeamRow(entry, index)
                ))}
                {renderCategoryRow("Metropolitan")}
                {metroRecords.map((entry, index) => (
                    renderTeamRow(entry, index)
                ))}
                {renderCategoryRow("Wildcard")}
                {eastWildcardRecords.map((entry, index) => (
                    renderTeamRow(entry, index)
                ))}
                {renderConferenceRow("Western Conference")}
                {renderCategoryRow("Central")} 
                {centralRecords.map((entry, index) => (
                    renderTeamRow(entry, index)
                ))}
                {renderCategoryRow("Pacific")}
                {pacificRecords.map((entry, index) => (
                    renderTeamRow(entry, index)
                ))}
                {renderCategoryRow("Wildcard")}
                {westWildcardRecords.map((entry, index) => (
                    renderTeamRow(entry, index)
                ))}
            </Grid>
        </Container>
    );
}

export default WildcardTable;