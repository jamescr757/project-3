import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from "reactstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({

    heroButtons: {
        marginTop: theme.spacing(2),
    },

  }));

const AccountButtons = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
            <Grid container spacing={5} justify="center">
                <Grid item>
                    <Link to={`/member/new/${props.userEmail}`}>
                        <Button color="primary">Add Notification</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={`/member/dashboard/${props.userEmail}`}>
                        <Button color="primary">Account Home</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default AccountButtons;