import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "../Filters.css"


export default function HomeAway(props) {

  const btnArray = ["Home", "Away", "All"];

  return (
    btnArray.map((label, index) => {
        return (
            <Grid item key={index}>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${label.toLowerCase()}/${props.outcome}/${props.rival}/${props.ot}`}
                >
                    <Button className={props.location === label.toLowerCase() && `btn-border-location-${label.toLowerCase()}`}>
                        {label}
                    </Button>
                </Link>
            </Grid>
        );
    })
  );
}