import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./ScoreCard.css"
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Icon from '@material-ui/core/Icon';
import { CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import moment from "moment";
import teamInfo from "../../utils/teamInfo";

const classNames = require("classnames");


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

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
    modalTitle: {
        textTransform: "capitalize",
        textAlign: "center"
    },
    paper: {
        position: 'absolute',
        width: 424,
        minHeight: 310,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 2),
        outline: 0
    },

}));


const ScoreCard = (props) => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [gameHighlight, setGameHighlight] = useState();

    const handleModalOpen = (teams, date) => {

        API.getHighlight(teams, date)
            .then((res) => {
                console.log("api response", res);
                setGameHighlight(res.data[0].id.videoId)
            })
            .catch(error => console.log(error));

        setOpen(true);
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    const { awayTeam, homeTeam, loser, winner, homeTeamScore, awayTeamScore, homeTeamRecord, awayTeamRecord, date } = props.game;

    const iFrameClass = classNames({
        'iFrameInitial': !gameHighlight,
        'iFrameFinal': gameHighlight
    });

    const loadingClass = classNames({
        'loadingFinal': gameHighlight
    });

    const awayTeamClass = classNames({
        "loser": awayTeam === loser,
        "winner": awayTeam === winner,
        "future": !awayTeamScore
    })

    const homeTeamClass = classNames({
        "loser": homeTeam === loser,
        "winner": homeTeam === winner,
        "future": !homeTeamScore
    })

    return (
        <React.Fragment>
            <Card className={classes.card}>
                {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                /> */}
                <CardContent className={classes.cardContent}>

                    <Typography className={awayTeamClass} gutterBottom variant="h5" component="h2">
                        <img
                            className={classes.teamLogo}
                            src={`./images/${teamInfo.teamNameConverter(awayTeam)}.png`}
                            alt={awayTeam}
                            />
                        {awayTeam}
                        {awayTeamRecord}
                        {awayTeamScore || ""}
                    </Typography>

                    <Typography className={homeTeamClass} gutterBottom variant="h5" component="h2">
                        <img
                            className={classes.teamLogo}
                            src={`./images/${teamInfo.teamNameConverter(homeTeam)}.png`}
                            alt={homeTeam}
                            />
                        {homeTeam}
                        {homeTeamRecord}
                        {homeTeamScore || ""}
                    </Typography>

                </CardContent>
                <CardActions>
                    {homeTeamScore ?
                        <Button
                            onClick={()=>handleModalOpen(teamInfo.teamNameJoiner(homeTeam, awayTeam), date)}
                            size="small"
                            color="primary"
                            >
                                View Extended Highlights
                        </Button>
                        :
                        <a 
                            href={`https://seatgeek.com/${teamInfo.teamFullName(homeTeam)}-tickets`} 
                            target="_blank"
                        >
                        {/* <a 
                            href={`https://seatgeek.com/$teamInfo.{teamNameConverter(awayTeam)}-at-$teamInfo.{teamNameConverter(homeTeam)}-tickets/${moment(date, "YYYYMMDD").format("MM-DD-YYYY")}`} 
                            target="_blank"
                        > */}
                            <Button
                                size="small"
                                color="primary"
                            >
                                View Tickets
                        </Button></a>
                    }
                </CardActions>
            </Card>

            <Modal
                aria-labelledby="modalTitle"
                aria-describedby="modalText"
                open={open}
                onClose={handleModalClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2
                        id="modalTitle"
                        className={classes.modalTitle}
                        >
                            {awayTeam} @ {homeTeam}
                    </h2>
                    <iframe
                        className={iFrameClass}
                        width="392"
                        height="220.5"
                        src={`https://www.youtube.com/embed/${gameHighlight}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowfullscreen"
                        />
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        width={1}
                        className="loading-container"
                        >
                        <CircularProgress
                            className={loadingClass}
                            item={true}
                            />
                    </Grid>

                </div>
            </Modal>
        </React.Fragment>
    );
}

export default ScoreCard;


// TODO: refactor this file into multiple components

// TODO: need full name for tickets and/or need to figure out the best query for seatgeek