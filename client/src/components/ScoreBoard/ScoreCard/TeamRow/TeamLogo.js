import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import teamInfo from "../../../../utils/teamInfo";

const useStyles = makeStyles(theme => ({

    teamLogo: {
      height: 40,
      width: "auto"
    }

}));

function TeamLogo({ team }) {
    const classes = useStyles();

    return (
        <Grid item>
            <img
            className={classes.teamLogo}
            src={`./images/${teamInfo.teamNameConverter(team)}.png`}
            alt={team}
            />
        </Grid>
    );
}

export default TeamLogo;