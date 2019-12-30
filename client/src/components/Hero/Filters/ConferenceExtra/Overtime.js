import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "../Filters.css"


export default function Overtime(props) {

  const btnArray = ["Regulation", "Overtime", "All"];

  return (
    btnArray.map((label, index) => {
        return (
            <Grid item key={index}>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/all/all/all/${label.toLowerCase()}`}
                >
                    <Button className={[props.ot === label.toLowerCase() && `btn-border-ot-${label.toLowerCase()}`, props.table === "future" && "team-extra-btn-hide"].join(" ")}>
                        {label}
                    </Button>
                </Link>
            </Grid>
        );
    })
  );
}