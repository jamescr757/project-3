import React from "react";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Grid } from "@material-ui/core";
import "../ScoreCard.css";


function ScoreArrow({ team, winner }) {

    return (
        team === winner &&
        <Grid item>
            <ArrowLeftIcon fontSize="large" />
        </Grid>
    );
}

export default ScoreArrow;