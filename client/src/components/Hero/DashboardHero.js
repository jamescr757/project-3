import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import SubHeading from "./SubHeading";
import HeroButtons from "./HeroButtons";
import DashboardButtons from "./DashboardButtons";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 2),
    }

}));

export const DashboardHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Title>
                    Notifications
                </Title>
                <SubHeading>
                    One email - only the content you want!
                </SubHeading>
                <DashboardButtons {...props}/>
            </Container>
        </div>
    );
}