import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import teamInfo from "../../utils/teamInfo";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Hero/Filters/Button.css"

const useStyles = makeStyles(theme => ({

    teamLogo: {
      height: 32,
      width: "auto",
      marginRight: 8
    }

}));

export default function({ identifier }) {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <img
                className={classes.teamLogo}
                src={`${process.env.PUBLIC_URL}/images/${teamInfo.teamNameConverter(identifier)}.png`}
                alt={identifier}
            />
            <Link to={`/multiple/team/completed/${teamInfo.teamNameConverter(identifier)}/7/all/all/false/false/desc`} className="dashboard-title-link">
                <Typography style={{ textTransform: "capitalize" }} variant="h5" align="center" gutterBottom={false} color="textPrimary">
                    {teamInfo.teamFullName(identifier)}
                </Typography>
            </Link>
        </Grid>
    );
}









