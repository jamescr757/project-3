import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";
import SubHeading from "./SubHeading";
import HeroFilters from "./HeroFilters";
import Button from "@material-ui/core/Button";
import ChangePage from "./ChangePage";
import teamInfo from "../../utils/teamInfo";
import PastFutureBtns from "./Filters/PastFutureBtns";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const TeamHero = (props) => {
    const classes = useStyles();

    const fullTeamName = teamInfo.teamFullName(teamInfo.teamNameDehyphenator(props.match.params.team));

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <Title>{fullTeamName}</Title>
                <PastFutureBtns
                    category="team"
                    identifier={props.match.params.team}
                    table={props.match.params.table}
                />
            </Container>
            <ChangePage
                path="/"
                justify="flex-start"
            >
                <Button>View Games by Date</Button>
            </ChangePage>
        </div>
    );
}
