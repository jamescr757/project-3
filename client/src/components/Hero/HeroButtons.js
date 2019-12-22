import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    heroButtons: {
        marginTop: theme.spacing(4),
    }

  }));

const HeroButtons = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                        Main call to action
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary action
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default HeroButtons;