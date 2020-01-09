import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "../Hero/Title/Title";
import SubHeading from "../Hero/SubHeading";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 2),
    }

}));

export const ForgotPassHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Title responsive={true}>
                    Update Password
                </Title>
                <SubHeading>
                    Password must be at least 6 characters
                </SubHeading>
            </Container>
        </div>
    );
}