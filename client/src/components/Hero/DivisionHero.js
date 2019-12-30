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
import DivisionExtra from "./Filters/DivisionExtra/DivisionExtra";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const DivisionHero = (props) => {
    const classes = useStyles();

    const { division, table, days, rival, ot } = props.match.params;
    const propsObj = {
        category: "division",
        identifier: division,
        
        table, days, rival, ot
    }

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <Title>{props.match.params.division} Division</Title>

                <PastFutureBtns {...propsObj} />
                <DayRadio {...propsObj} />
                <DivisionExtra {...propsObj} />
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
