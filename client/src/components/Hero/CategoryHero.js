import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import PastFutureBtns from "./Filters/PastFutureBtns";
import teamInfo from "../../utils/teamInfo";
import { TeamTitle } from "./Title/TeamTitle";
import { ConferenceTitle } from "./Title/ConferenceTitle";
import HeroNav from "./HeroNav/HeroNav";
import { FilterRow } from "./Filters/FilterRow";
import { DivisionTitle } from "./Title/DivisionTitle";
import { ParamsContext } from "../../utils/ParamsContext";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 1),
    }

}));

export const CategoryHero = (props) => {
    const classes = useStyles();

    const { category, identifier } = useContext(ParamsContext);

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
                    <DivisionTitle
                        identifier={identifier}
                    />
                }


                <PastFutureBtns />
                <HeroNav />

                <FilterRow />
            </Container>
        </div>
    );
}
