import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    gameDate: {
      paddingTop: 8
    }

}));

const GameFinal = (props) => {

    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Typography className={classes.gameDate} variant="subtitle2">
                {props.overtime ? "Final/OT" : "Final"}
            </Typography>
        </Grid>
    );
}

export default GameFinal;