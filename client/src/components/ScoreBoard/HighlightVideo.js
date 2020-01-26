import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

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
            <Grid container spacing={4} direction="column" alignItems="center" justify="center" className="mt-1">
                <Grid item>
                    <iframe
                        title={props.gameHighlight5}
                        width="355.5"
                        height="200"
                        src={`https://www.youtube.com/embed/${props.gameHighlight5}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowfullscreen"
                    />
                </Grid>
                <Grid item className="mb-3">
                    <iframe
                        title={props.gameHighlight9}
                        width="355.5"
                        height="200"
                        src={`https://www.youtube.com/embed/${props.gameHighlight9}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowfullscreen"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HighlightVideo;