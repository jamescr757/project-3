import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import "../Filters.css"
import Overtime from './Overtime';
import Rival from "./Rival";
import HomeAway from "./HomeAway";
import WinLoss from "./WinLoss";

const useStyles = makeStyles(theme => ({

    extraRow: {
        marginTop: 8
    }

}));

export default function CategoryExtra(props) {
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