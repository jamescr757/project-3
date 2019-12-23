import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({

    heroButtons: {
        marginTop: theme.spacing(4),
    },
    date: {
        fontSize: 24,
    },
    arrow: {
        cursor: "pointer"
    }

  }));

const HeroButtons = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
                <Grid item>

                    {/* <Link 
                        to={`/date/${moment().subtract(2, "days").format("YYYYMMDD")}`}
                    > */}
                    <div onClick={props.onBackClick}>
                        <ArrowBackIosIcon className={classes.arrow} />
                    </div>
                    {/* </Link> */}
                </Grid>
                <Grid item>
                    <Typography className={classes.date} variant="h4" color="textPrimary">
                        {moment(props.date).format("ddd M/DD")}
                    </Typography>
                </Grid>
                <Grid item>

                    {/* <Link 
                        to={`/date/${moment().format("YYYYMMDD")}`}
                    > */}
                    <div onClick={props.onForwardClick}>
                        <ArrowForwardIosIcon className={classes.arrow} />
                    </div>
                    {/* </Link> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default HeroButtons;