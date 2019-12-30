import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";
import Button from "@material-ui/core/Button";
import ChangePage from "./ChangePage";
import PastFutureBtns from "./Filters/PastFutureBtns";
import DayRadio from "./Filters/DayRadio";
import ConferenceExtra from "./Filters/ConferenceExtra/ConferenceExtra";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const ConferenceHero = (props) => {
    const classes = useStyles();

    const { conference, table, days, ot } = props.match.params;
    const propsObj = {
        category: "conference",
        identifier: conference,
        
        table, days, ot
    }

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <Title>
                    {conference} {conference !== "All Teams" && "Conference"}
                </Title>

                <PastFutureBtns {...propsObj} />
                <DayRadio {...propsObj} />
                <ConferenceExtra {...propsObj} />
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
