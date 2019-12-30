import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import "../Filters.css"
import Overtime from './Overtime';

const useStyles = makeStyles(theme => ({

    extraRow: {
        marginTop: 8
    }

}));

export default function DivisionExtra(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.extraRow} container spacing={1} justify="center">   

        <Overtime {...props} />

    </Grid>
  );
}