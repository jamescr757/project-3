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

const DashboardButtons = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
           {!props.noData &&  
                <Grid container justify="center">
                    <Grid item>
                        <Link to={`/member/scoreboard/${props.userEmail}/completed/7/desc`} className="account-btn-link">
                            <Button color="primary">Custom Scoreboard</Button>
                        </Link>
                    </Grid>
                </Grid>
            }
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <Link to={`/member/new/${props.userEmail}`} className="account-btn-link">
                        <Button color="primary">Add Notification</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={`/member/my-account/${props.userEmail}`} className="account-btn-link">
                        <Button color="primary">Account Details</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashboardButtons;