import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ParamsContext } from "../../../utils/ParamsContext";
import "./Filters.css"
import "./Button.css";

const classNames = require("classnames");

const CustomPastFuture = () => {

    const { email, table, days } = React.useContext(ParamsContext);

    const pastBtnBorder = classNames({
        "past-btn-border": table === "completed" 
    })

    const futureBtnBorder = classNames({
        "future-btn-border": table === "future" 
    })

    return (
        <Grid container spacing={2} justify="center">
            
            <Grid item>
                <Link to={`/member/scoreboard/${email}/completed/${days}/desc`} className="btn-past-future">
                    <Button className={pastBtnBorder + " btn-past-future"}>Past</Button>
                </Link>
            </Grid>

            <Grid item>
                <Link to={`/member/scoreboard/${email}/future/${days}/asc`} className="btn-past-future">
                    <Button className={futureBtnBorder + " btn-past-future"}>Future</Button>
                </Link>
            </Grid>

            
        </Grid>
    );
}

export default CustomPastFuture;