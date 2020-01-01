import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import SubHeading from "./SubHeading";
import HeroButtons from "./HeroButtons";
import ChangePage from "./ChangePage";
import Button from "@material-ui/core/Button";
import DatePick from "./DatePicker";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 2),
    }

}));

export const DateHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Title>
                    NHL Scores
                </Title>
                <SubHeading>
                    Scores and highlights from any date this season! Change the date by clicking the arrows.
                </SubHeading>
                <HeroButtons {...props}/>
            </Container>
        </div>
    );
}