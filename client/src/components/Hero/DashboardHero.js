import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import SubHeading from "./SubHeading";
import DashboardButtons from "./DashboardButtons";
import DashboardSBLink from "./DashboardSBLink";

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
                <Title responsive={true}>
                    Notifications
                </Title>
                <SubHeading>
                    One email - only the content you want!
                </SubHeading>
                <DashboardButtons {...props}/>
                {/* <DashboardSBLink {...props}/> */}
            </Container>
        </div>
    );
}