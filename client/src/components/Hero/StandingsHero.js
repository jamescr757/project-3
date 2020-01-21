import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import { CustomTitle } from "./Title/CustomTitle";
import StandingsTabs from "./Filters/StandingsTabs";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const StandingsHero = (props) => {
    const classes = useStyles();

    const { order } = props.match.params;

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <CustomTitle 
                    identifier={order !== "playoffs" ? order + " Standings" : "Playoff Matchups"}
                />

                <StandingsTabs {...props.match.params} />
            </Container>
        </div>
    );
}
