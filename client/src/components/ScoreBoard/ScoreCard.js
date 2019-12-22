import React from "react";
import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    teamLogo: {
      height: 32,
      width: "auto"
    },
    teams: {
        textTransform: "capitalize"
    }

}));


const ScoreCard = props => {
    const classes = useStyles();

    const teamNameConverter = (teamName) => {
        return teamName.replace(/\s/g, "-");
    }

    return (
        <Card className={classes.card}>
            {/* <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            /> */}
            <CardContent className={classes.cardContent}>
                
                <Typography className={classes.teams} gutterBottom variant="h5" component="h2">
                    <img 
                        className={classes.teamLogo}
                        src={`./images/${teamNameConverter(props.game.awayTeam)}.png`}
                        />
                    {props.game.awayTeam}
                    {props.game.awayTeamScore} 
                </Typography>

                <Typography className={classes.teams} gutterBottom variant="h5" component="h2">
                    <img 
                        className={classes.teamLogo}
                        src={`./images/${teamNameConverter(props.game.homeTeam)}.png`}
                        />
                    {props.game.homeTeam}
                    {props.game.homeTeamScore}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View Highlights
                </Button>
            </CardActions>
        </Card>
    );
}

export default ScoreCard;