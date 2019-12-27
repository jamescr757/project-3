import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({

    heroLink: {
        marginTop: theme.spacing(1),
    },

}));

const ChangePage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroLink}>
            <Grid container spacing={2} justify={props.justify}>
                <Grid item>
                    <Link to={props.path}>
                        {props.children}
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default ChangePage;