import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import SubHeading from "./SubHeading";
import HeroFilters from "./HeroFilters";
import Button from "@material-ui/core/Button";
import ChangePage from "./ChangePage";
import teamInfo from "../../utils/teamInfo";
import PastFutureBtns from "./Filters/PastFutureBtns";
import DayRadio from "./Filters/DayRadio";
import TeamExtra from "./Filters/TeamExtra/TeamExtra";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    },
    teamLogo: {
        height: 68,
        width: "auto",
        marginTop: 4
    }

}));

export const TeamHero = (props) => {
    const classes = useStyles();

    const { team, table, days, location, outcome, rival, ot } = props.match.params;
    const propsObj = {
        category: "team",
        identifier: team,

        table, days, location, outcome, rival, ot
    }

    const fullTeamName = teamInfo.teamFullName(teamInfo.teamNameDehyphenator(team));

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                <Grid container justify="center" spacing={3}>
                    <Grid item>
                        <img 
                            className={classes.teamLogo}
                            src={`${process.env.PUBLIC_URL}/images/${team}.png`}
                            alt={fullTeamName}  
                        />
                    </Grid>

                    <Grid item>
                        <Title>{fullTeamName}</Title>
                    </Grid>

                    <Grid item>
                        <img 
                            className={classes.teamLogo}
                            src={`${process.env.PUBLIC_URL}/images/${team}.png`}
                            alt={fullTeamName}  
                        />
                    </Grid>
                </Grid>

                <PastFutureBtns {...propsObj} />
                <DayRadio {...propsObj} />
                <TeamExtra {...propsObj} />
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
