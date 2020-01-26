import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Filters.css"
import "./Button.css";
import { ParamsContext } from "../../../utils/ParamsContext";

const classNames = require("classnames");

const PastFutureBtns = () => {

    const { table, category, identifier, days, location, outcome, rival, ot } = useContext(ParamsContext);

    const pastBtnBorder = classNames({
        "past-btn-border": table === "completed" 
    })

    const futureBtnBorder = classNames({
        "future-btn-border": table === "future" 
    })

    return (
        <Grid container spacing={2} justify="center">
            
            <Grid item>
                <Link to={`/multiple/${category}/completed/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}/desc`} className="btn-past-future">
                    <Button className={pastBtnBorder + " btn-past-future"}>Past</Button>
                </Link>
            </Grid>

            <Grid item>
                <Link to={`/multiple/${category}/future/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}/asc`} className="btn-past-future">
                    <Button className={futureBtnBorder + " btn-past-future"}>Future</Button>
                </Link>
            </Grid>

            
        </Grid>
    );
}

export default PastFutureBtns;