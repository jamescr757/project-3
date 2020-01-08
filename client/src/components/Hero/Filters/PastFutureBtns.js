import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import ChangePage from "../ChangePage";
import { Link } from "react-router-dom";
import "./Filters.css"

const classNames = require("classnames");

const PastFutureBtns = (props) => {

    const pastBtnBorder = classNames({
        "past-btn-border": props.table === "completed" 
    })

    const futureBtnBorder = classNames({
        "future-btn-border": props.table === "future" 
    })

    return (
        <Grid container spacing={2} justify="center">
            
            <Grid item>
                <Link to={`/multiple/${props.category}/completed/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${props.ot}/desc`}>
                    <Button className={pastBtnBorder}>Past</Button>
                </Link>
            </Grid>

            <Grid item>
                <Link to={`/multiple/${props.category}/future/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${props.ot}/asc`}>
                    <Button className={futureBtnBorder}>Future</Button>
                </Link>
            </Grid>

            
        </Grid>
    );
}

export default PastFutureBtns;