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

export const NewSettingHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Title>
                    Add Notification
                </Title>
                <SubHeading>
                    All notifications will be merged into one email
                </SubHeading>
            </Container>
        </div>
    );
}