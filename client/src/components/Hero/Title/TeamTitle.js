import React from "react";
import Title from "./Title";
import { Grid } from "@material-ui/core";
import { HeroTeamLogo } from "./HeroTeamLogo";


export const TeamTitle = ({ identifier, fullTeamName }) => {

    return (
        <Grid container justify="center" spacing={3}>
            <Grid item>
                <HeroTeamLogo 
                    identifier={identifier}
                    fullTeamName={fullTeamName}
                />
            </Grid>

            <Grid item>
                <Title>{fullTeamName}</Title>
            </Grid>

            <Grid item>
                <HeroTeamLogo 
                    identifier={identifier}
                    fullTeamName={fullTeamName}
                />
            </Grid>
        </Grid>
    );
}
