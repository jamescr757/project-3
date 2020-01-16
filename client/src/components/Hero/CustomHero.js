import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import CustomPastFuture from "./Filters/CustomPastFuture";
import CustomHeroNav from "./HeroNav/CustomHeroNav";
import { CustomFilterRow } from "./Filters/CustomFilterRow";
import { CustomTitle } from "./Title/CustomTitle";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const CustomHero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <CustomTitle 
                    identifier={"Custom Scoreboard"}
                />

                <CustomPastFuture {...props.match.params} />
                <CustomHeroNav {...props.match.params} />

                <CustomFilterRow {...props.match.params} />
            </Container>
        </div>
    );
}
