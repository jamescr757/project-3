import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      minHeight: "65vh"
    },
    noGames: {
        textAlign: "center"
    }

}));

const HighlightVideo = (props) => {
    
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container justify="center" className="mt-5">
                <iframe
                    width="392"
                    height="220.5"
                    src={`https://www.youtube.com/embed/${props.gameHighlight}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowfullscreen"
                />
            </Grid>
        </Container>
    );
}

export default HighlightVideo;