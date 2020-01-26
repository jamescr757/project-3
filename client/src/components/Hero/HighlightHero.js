import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import SubHeading from "./SubHeading";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const HighlightHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <Title responsive={true}>NHL Highlights</Title>
                <SubHeading>
                    {props.description}
                </SubHeading>
                <SubHeading>
                    {props.date}
                </SubHeading>
            </Container>
        </div>
    );
}
