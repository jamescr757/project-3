import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import SubHeading from "./SubHeading";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 2),
    }

}));

export const LoginHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Title responsive={true}>
                    Member Login
                </Title>
                <SubHeading>
                    Thanks for being a member!
                </SubHeading>
            </Container>
        </div>
    );
}