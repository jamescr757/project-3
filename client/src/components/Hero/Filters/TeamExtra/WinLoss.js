import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "../Filters.css"


export default function WinLoss(props) {

  const btnArray = ["Wins", "Losses", "All"];
  const btnValues = ["win", "loss", "all"];

  return (
    btnArray.map((label, index) => {
        return (
            <Grid item key={index}>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${btnValues[index]}/${props.rival}/${props.ot}`}
                >
                    <Button className={[props.outcome === btnValues[index] && `btn-border-outcome-${btnValues[index]}`, props.table === "future" && "team-extra-btn-hide"].join(" ")}>
                        {label}
                    </Button>
                </Link>
            </Grid>
        );
    })
  );
}