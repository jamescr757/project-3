import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
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

const LeagueTable = (props) => {
    
    const classes = useStyles();

    const [records, setRecords] = useState([]);

    const { order } = props.match.params;

    useEffect(() => {
        
        API.getRecords("league")
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

    const renderCategoryRow = (title) => {
        return (
             <Grid 
                 item  
                 xs={12} 
                 className="pt-4 standings-page-divider-row"
             >
                 <Card className="border-bottom border-dark standings-page-category-row">
                     <CardContent className="py-0 px-2 px-sm-3">
                         <Grid container alignItems="center" >
                             <Grid item xs={3} sm={7}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                     {title}
                                 </Typography>
                             </Grid>
                             <Grid item xs={2} sm={1}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                     GP
                                 </Typography>
                             </Grid>
                             <Grid item xs={2} sm={1}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                     PTS
                                 </Typography>
                             </Grid>
                             <Grid item xs={2} sm={1}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                     W
                                 </Typography>
                             </Grid>
                             <Grid item xs={2} sm={1}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                     L
                                 </Typography>
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                     OT
                                 </Typography>
                             </Grid>
                         </Grid>
                     </CardContent>
                 </Card>   
             </Grid>
        ) 
     }

    const renderTeamRow = (entry, index, bool) => {
        return (
            <Grid 
                item 
                key={index} 
                xs={12} 
                className="standings-page-team-row"
            >
                <Card className={index === 1 && bool ? "standings-page-team-row wildcard-end-row" : "border-bottom border-dark standings-page-team-row"}>
                    <CardContent className="py-0 px-1 px-sm-3">
                        <Grid container alignItems="center">
                            <Grid item xs={3} sm={7}>
                                <Typography variant="h6" gutterBottom={false} className="standings-team-row-mobile">
                                    {index + 1}
                                    {`  `}
                                    <img 
                                        className="standings-page-logo"
                                        src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(entry.team)}.png`}
                                        alt={teamInfo.teamFullName(entry.team)}  
                                    />
                                    {`  `}
                                    <Link to={`/multiple/team/completed/${teamInfo.teamNameConverter(entry.team)}/7/all/all/false/false/desc`} className="standings-page-team-link"> 
                                        {window.innerWidth < 600 ? teamInfo.teamName3Letters(entry.team) : teamInfo.teamFullNameCaptilized(entry.team)}
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                <Typography variant="h6" gutterBottom={false} className="standings-team-row-mobile">
                                    {entry.gamesPlayed}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                <Typography variant="h6" gutterBottom={false} className="standings-team-row-mobile">
                                    {entry.points}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                <Typography variant="h6" gutterBottom={false} className="standings-team-row-mobile">
                                    {entry.wins}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                <Typography variant="h6" gutterBottom={false} className="standings-team-row-mobile">
                                    {entry.losses}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom={false} className="standings-team-row-mobile">
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
        <Container className={classes.cardGrid + " px-1 px-sm-3"} maxWidth="md">
            <Grid container spacing={0} direction="column">
                {records.length > 0 && renderCategoryRow("")}
                {records.map((entry, index) => (
                    renderTeamRow(entry, index, false)
                ))}
            </Grid>
        </Container>
    );
}

export default LeagueTable;