import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Filters.css"
import "./Button.css";

const StandingsTabs = ({ order }) => {

    return (
        <Grid container spacing={0} justify="center" className="mb-2">

            <Grid item>
                <Link to={`/standings/wildcard`} className="standings-btn-link">
                    <Button className={order === "wildcard" ? "standings-btn-link-active standings-btn-link" : " standings-btn-link border border-dark"}>Wildcard</Button>
                </Link>
            </Grid>

            <Grid item>
                <Link to={`/standings/division`} className="standings-btn-link">
                    <Button className={order === "division" ? "standings-btn-link-active standings-btn-link" : " standings-btn-link border border-dark"}>Division</Button>
                </Link>
            </Grid>

            <Grid item>
                <Link to={`/standings/playoffs`} className="standings-btn-link">
                    <Button className={order === "playoffs" ? "standings-btn-link-active standings-btn-link" : " standings-btn-link border border-dark"}>Playoffs</Button>
                </Link>
            </Grid>

            {window.innerWidth > 500 && 
            <Grid item>
                <Link to={`/standings/conference`} className="standings-btn-link">
                    <Button className={order === "conference" ? "standings-btn-link-active standings-btn-link" : " standings-btn-link border border-dark"}>Conference</Button>
                </Link>
            </Grid>
            }

            {/* {window.innerWidth > 500 && 
                <Grid item>
                    <Link to={`/standings/league`} className="standings-btn-link">
                        <Button className={order === "league" ? "standings-btn-link-active standings-btn-link" : " standings-btn-link border border-dark"}>League</Button>
                    </Link>
                </Grid>
            } */}

            
        </Grid>
    );
}

export default StandingsTabs;