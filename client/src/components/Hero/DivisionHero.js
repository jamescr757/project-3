import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";
import SubHeading from "./SubHeading";
import HeroFilters from "./HeroFilters";
import Button from "@material-ui/core/Button";
import ChangePage from "./ChangePage";
import PastFutureBtns from "./Filters/PastFutureBtns";
import DayRadio from "./Filters/DayRadio";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const DivisionHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <Title>{props.match.params.division} Division</Title>
                <PastFutureBtns 
                    category="division"
                    identifier={props.match.params.division}
                    table={props.match.params.table}
                    days={props.match.params.days}
                />
                <DayRadio 
                    category="division"
                    identifier={props.match.params.division}
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
