import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import teamInfo from "../../utils/teamInfo";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    teamLogo: {
      height: 32,
      width: "auto",
      marginRight: 8
    }

}));

export default function({ identifier }) {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <img
                className={classes.teamLogo}
                src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(identifier)}.png`}
                alt={identifier}
            />
            <Typography style={{ textTransform: "capitalize" }} variant="h5" align="center" gutterBottom={false}>
                {teamInfo.teamFullName(identifier)}
            </Typography>
        </Grid>
    );
}









