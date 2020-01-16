import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Hero/Filters/Button.css";

const useStyles = makeStyles(theme => ({

    heroButtons: {
        marginTop: theme.spacing(2),
    },

  }));

const DashboardSBLink = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
            <Grid container justify="center">
                <Grid item>
                    <Link to={`/member/scoreboard/${props.userEmail}/completed/7/desc`} className="account-btn-link">
                        <Button color="primary">View Custom Scoreboard</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashboardSBLink;




















