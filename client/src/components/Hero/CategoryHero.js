import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title/Title";
import Button from "@material-ui/core/Button";
import ChangePage from "./ChangePage";
import PastFutureBtns from "./Filters/PastFutureBtns";
import DayRadio from "./Filters/DayFilters";
import CategoryExtra from "./Filters/CategoryExtra/CategoryExtra";
import teamInfo from "../../utils/teamInfo";
import { TeamTitle } from "./Title/TeamTitle";
import { ConferenceTitle } from "./Title/ConferenceTitle";
import HeroNav from "./HeroNav/HeroNav";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const CategoryHero = (props) => {
    const classes = useStyles();

    const { category, identifier } = props.match.params;

    const fullTeamName = teamInfo.teamFullName(teamInfo.teamNameDehyphenator(identifier));

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                {category === "team" && 
                    <TeamTitle 
                        identifier={identifier}
                        fullTeamName={fullTeamName}
                    />
                }

                {category === "conference" && 
                    <ConferenceTitle 
                        identifier={identifier}
                    />
                }

                {category === "division" && 
                    <Title>{identifier} Division</Title>
                }


                <PastFutureBtns {...props.match.params} />
                <HeroNav {...props.match.params} />
            </Container>
        </div>
    );
}
