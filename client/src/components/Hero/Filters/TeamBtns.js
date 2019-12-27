import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import teamInfo from "../../../utils/teamInfo";

const useStyles = makeStyles(theme => ({

    teamLogo: {
      height: 28,
      width: "auto",
      marginTop: 6
    }

}));

const DivisionBtns = (props) => {
    const classes = useStyles();

    const atlanticTeams = teamInfo.teamsArray.slice(0, 7);
    const metroTeams = teamInfo.teamsArray.slice(8, 15);
    const centralTeams = teamInfo.teamsArray.slice(16, 22);
    const pacificTeams = teamInfo.teamsArray.slice(23);

    return (
        <Grid container spacing={2} justify="space-evenly">
            <Grid item container xs={3} direction="column" justify="flex-start" spacing={2}>

                {atlanticTeams.map((team, index) => {
                    return (
                        <Grid item key={index} container spacing={1}>
                            <img 
                                className={classes.teamLogo}
                                src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(team)}.png`}
                                alt={team}  
                            />
                            <Link 
                              to={`/multiple/team/${teamInfo.teamNameConverter(team)}`}
                            >
                                <Button
                                    onClick={()=>props.handleBtnClick()}
                                >
                                    {teamInfo.teamFullName(team)}
                                </Button>
                            </Link>
                        </Grid>
                    );
                })}

            </Grid>
            <Grid item container xs={3} direction="column" justify="flex-start" spacing={2}>
                
                {metroTeams.map((team, index) => {
                    return (
                        <Grid item key={index} container spacing={1}>
                            <img 
                                className={classes.teamLogo}
                                src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(team)}.png`}
                                alt={team}  
                            />
                            <Link 
                            to={`/multiple/team/${teamInfo.teamNameConverter(team)}`}
                            >
                                <Button
                                    onClick={()=>props.handleBtnClick()}
                                >
                                    {teamInfo.teamFullName(team)}
                                </Button>
                            </Link>
                        </Grid>
                    );
                })}

            </Grid>
            <Grid item container xs={3} direction="column" justify="flex-start" spacing={2}>

                {centralTeams.map((team, index) => {
                    return (
                        <Grid item key={index} container spacing={1}>
                            <img 
                                className={classes.teamLogo}
                                src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(team)}.png`}
                                alt={team}  
                            />
                            <Link 
                            to={`/multiple/team/${teamInfo.teamNameConverter(team)}`}
                            >
                                <Button
                                    onClick={()=>props.handleBtnClick()}
                                >
                                    {teamInfo.teamFullName(team)}
                                </Button>
                            </Link>
                        </Grid>
                    );
                })}

            </Grid>
            <Grid item container xs={3} direction="column" justify="flex-start" spacing={2}>
            
                {pacificTeams.map((team, index) => {
                    return (
                        <Grid item key={index} container spacing={1}>
                            <img 
                                className={classes.teamLogo}
                                src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(team)}.png`}
                                alt={team}  
                            />
                            <Link 
                            to={`/multiple/team/${teamInfo.teamNameConverter(team)}`}
                            >
                                <Button
                                    onClick={()=>props.handleBtnClick()}
                                >
                                    {teamInfo.teamFullName(team)}
                                </Button>
                            </Link>
                        </Grid>
                    );
                })}

            </Grid>
        </Grid>
    );
}

export default DivisionBtns;