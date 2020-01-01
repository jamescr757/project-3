import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    teamLogo: {
        height: 68,
        width: "auto",
        marginTop: 4
    }

}));

export const HeroTeamLogo = ({ identifier, fullTeamName }) => {
    const classes = useStyles();

    return (
        <img 
            className={classes.teamLogo}
            src={`${process.env.PUBLIC_URL}/images/${identifier}.png`}
            alt={fullTeamName}  
        />
    );
}