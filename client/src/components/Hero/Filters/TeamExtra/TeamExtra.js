import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "../Filters.css"
import HomeAway from './HomeAway';
import WinLoss from './WinLoss';
import Rival from './Rival';
import Overtime from './RegOT';

const useStyles = makeStyles(theme => ({

    extraRow: {
        marginTop: 8
    }

}));

export default function TeamExtra(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.extraRow} container spacing={1} justify="center">   

        <HomeAway {...props} />
        <WinLoss {...props} />
        <Rival {...props} />
        <Overtime {...props} />

    </Grid>
  );
}