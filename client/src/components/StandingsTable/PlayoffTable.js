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

const PlayoffTable = (props) => {
    
    const classes = useStyles();

    const [records, setRecords] = useState({ atlantic: [], metro: [], central: [], pacific: [] });

    const playoffLogic = (divisionEntries, conferenceEntries) => {

        const top3DivisionTeams = {};

        divisionEntries.slice(0, 3).forEach(entry => {
            top3DivisionTeams[entry.team] = true;
        });

        divisionEntries.slice(8, 11).forEach(entry => {
            top3DivisionTeams[entry.team] = true;
        });

        divisionEntries.slice(16, 19).forEach(entry => {
            top3DivisionTeams[entry.team] = true;
        });

        divisionEntries.slice(23, 26).forEach(entry => {
            top3DivisionTeams[entry.team] = true;
        });

        const eastWildcardEntries = [];
        const westWildcardEntries = [];

        conferenceEntries.slice(0, 10).forEach((conferenceEntry, index) => {
            if (conferenceEntry.team in top3DivisionTeams === false && eastWildcardEntries.length < 3) {
                eastWildcardEntries.push(conferenceEntry);
            }
        })

        conferenceEntries.slice(16, 26).forEach((conferenceEntry, index) => {
            if (conferenceEntry.team in top3DivisionTeams === false && westWildcardEntries.length < 3) {
                westWildcardEntries.push(conferenceEntry);
            }
        })

        const atlantic = ["1", "4", divisionEntries[1], divisionEntries[2]];
        const metro = ["1", "4", divisionEntries[9], divisionEntries[10]];
        const central = ["1", "4", divisionEntries[17], divisionEntries[18]];
        const pacific = ["1", "4", divisionEntries[24], divisionEntries[25]];

        if (conferenceEntries[0].division === "Atlantic") {
            atlantic[0] = conferenceEntries[0];
            atlantic[1] = eastWildcardEntries[1];
            metro[0] = divisionEntries[8];
            metro[1] = eastWildcardEntries[0];
        } else {
            metro[0] = conferenceEntries[0];
            metro[1] = eastWildcardEntries[1];
            atlantic[0] = divisionEntries[0];
            atlantic[1] = eastWildcardEntries[0];
        }

        if (conferenceEntries[16].division === "Central") {
            central[0] = conferenceEntries[16];
            central[1] = westWildcardEntries[1];
            pacific[0] = divisionEntries[23];
            pacific[1] = westWildcardEntries[0];
        } else {
            pacific[0] = conferenceEntries[16];
            pacific[1] = westWildcardEntries[1];
            central[0] = divisionEntries[16];
            central[1] = westWildcardEntries[0];
        }
        

        setRecords({
            atlantic,
            metro,
            central,
            pacific
        })
    }

    useEffect(() => {
        
        API.getRecords("division")
            .then(division => {
                if (division.data === "error") {
                    console.log("there's been a db error");
                }

                API.getRecords("conference")
                    .then(conference => {
                        if (conference.data === "error") {
                            console.log("there's been a db error");
                        }

                        playoffLogic(division.data, conference.data);
                        
                    })
                    .catch(error => {
                        console.log(error);
                        console.log("there's been an error retrieving the standings");
                    })
                
            })
            .catch(error => {
                console.log(error);
                console.log("there's been an error retrieving the standings");
            })

    }, []);

    const renderCategoryRow = (title, linkBool) => {
        return (
             <Grid 
                 item  
                 xs={12} 
                 className="pt-4 standings-page-divider-row"
             >
                 <Card className="border-bottom border-dark standings-page-category-row">
                     <CardContent className="py-0 px-1 px-sm-3">
                         <Grid container alignItems="center" >
                             <Grid item xs={3} sm={7}>
                                 <Typography variant="h6" gutterBottom={false} className="standings-category-row-mobile">
                                    {linkBool ? 
                                        <Link to={`/multiple/division/completed/${title !== "Metro" ? title : "Metropolitan"}/3/all/all/false/false/desc`} className="standings-page-division-link">
                                            {title}
                                        </Link>
                                    :
                                        title
                                    }
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

    const renderConferenceRow = (title, bool) => {
        return (
             <Grid 
                 item  
                 xs={12} 
                 className={bool ? "mt-5 py-2 py-sm-3 wildcard-page-conference-row px-1 px-sm-3" : "mt-2 py-2 py-sm-3 wildcard-page-conference-row px-1 px-sm-3"}
             >
                <Typography variant="h6" gutterBottom={false} className="mobile-conference-row-text">
                    <Link to={`/multiple/conference/completed/${title.length > 8 ? title.slice(0, 7) : title}/3/all/all/false/false/desc`} className="standings-page-conference-link">
                        {title}
                    </Link>
                </Typography> 
            </Grid> 
        ) 
     }

    const seedLogic = (index) => {

        switch (index) {
            case 0: 
                return 1;
            case 1: 
                return 4;
            default: 
                return index;
        }
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
                                    {seedLogic(index)}
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
                {records.atlantic.length > 0 && renderConferenceRow("Eastern Conference", false)}
                {records.atlantic.length > 0 && renderCategoryRow("Atlantic", true)}
                {records.atlantic.map((entry, index) => (
                    renderTeamRow(entry, index, false)
                ))}
                {window.innerWidth < 600 && records.metro.length > 0 && renderCategoryRow("Metro")}
                {window.innerWidth > 600 && records.metro.length > 0 && renderCategoryRow("Metropolitan")}
                {records.metro.map((entry, index) => (
                    renderTeamRow(entry, index, false)
                ))}
                {records.central.length > 0 && renderConferenceRow("Western Conference", true)}
                {records.central.length > 0 && renderCategoryRow("Central", true)} 
                {records.central.map((entry, index) => (
                    renderTeamRow(entry, index, false)
                ))}
                {records.pacific.length > 0 && renderCategoryRow("Pacific", true)}
                {records.pacific.map((entry, index) => (
                    renderTeamRow(entry, index, false)
                ))}
            </Grid>
        </Container>
    );
}

export default PlayoffTable;