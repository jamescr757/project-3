import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "./Filters.css"

const classNames = require("classnames");

const useStyles = makeStyles(theme => ({

    radioRow: {
        marginTop: 8
    }

}));

export default function DayLinks(props) {
  const classes = useStyles();

  const dayArr = ["1 day", "3 days", "7 days", "10 days", "2 weeks", "1 month", "All"];
  const dayValues = [1, 3, 7, 10, 14, 30, 300]

  return (
    <Grid className={classes.radioRow} container spacing={1} justify="center">   

        {dayArr.map((label, index) => {
            return (
                <Grid item key={index}>
                    <Link 
                        to={`/multiple/${props.category}/${props.table}/${props.identifier}/${dayValues[index]}/${props.location}/${props.outcome}/${props.rival}/${props.ot}`}
                    >
                        <Button className={props.days == dayValues[index] && `btn-border-${dayValues[index]}`}>
                            {label}
                        </Button>
                    </Link>
                </Grid>
            );
        })}

    </Grid>
  );
}