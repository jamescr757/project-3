import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "../Filters.css"


export default function Rival(props) {

  const btnArray = ["Division", "All"];

  return (
    btnArray.map((label, index) => {
        return (
            <Grid item key={index}>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/all/all/${label.toLowerCase()}/${props.ot}`}
                >
                    <Button className={props.rival === label.toLowerCase() && `btn-border-rival-${label.toLowerCase()}`}>
                        {label}
                    </Button>
                </Link>
            </Grid>
        );
    })
  );
}