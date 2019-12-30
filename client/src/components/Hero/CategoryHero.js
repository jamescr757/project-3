import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";
import Button from "@material-ui/core/Button";
import ChangePage from "./ChangePage";
import PastFutureBtns from "./Filters/PastFutureBtns";
import DayRadio from "./Filters/DayRadio";
import CategoryExtra from "./Filters/CategoryExtra/CategoryExtra";
import teamInfo from "../../utils/teamInfo";
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

export const CategoryHero = (props) => {
    const classes = useStyles();

    const { category, identifier } = props.match.params;

    const fullTeamName = teamInfo.teamFullName(teamInfo.teamNameDehyphenator(identifier));

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                {category === "team" && 
                <Grid container justify="center" spacing={3}>
                    <Grid item>
                        <img 
                            className={classes.teamLogo}
                            src={`${process.env.PUBLIC_URL}/images/${identifier}.png`}
                            alt={fullTeamName}  
                        />
                    </Grid>

                    <Grid item>
                        <Title>{fullTeamName}</Title>
                    </Grid>

                    <Grid item>
                        <img 
                            className={classes.teamLogo}
                            src={`${process.env.PUBLIC_URL}/images/${identifier}.png`}
                            alt={fullTeamName}  
                        />
                    </Grid>
                </Grid>}
                <Title> 
                    {category === "conference" ? identifier !== "All Teams" && `${identifier} Conference` : ""}
                    {category === "division" && `${identifier} Division`}
                </Title>

                <PastFutureBtns {...props.match.params} />
                <DayRadio {...props.match.params} />
                <CategoryExtra {...props.match.params} />
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
