import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import { CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./ScoreCard.css"

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

    modalTitle: {
        textTransform: "capitalize",
        textAlign: "center"
    },
    paper: {
        position: 'absolute',
        width: 424,
        minHeight: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 2),
        outline: 0
    },

}));

const HighlightModal = ({ gameHighlight, open, onClose, awayTeam, homeTeam }) => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);

    const iFrameClass = classNames({
        'iFrameInitial': !gameHighlight,
        'iFrameFinal': gameHighlight
    });

    const loadingClass = classNames({
        'loadingFinal': gameHighlight
    });

    const loadingContainer = classNames({
        "loading-container": !gameHighlight,
        'loadingFinal': gameHighlight
    });

    return (
        <Modal
            aria-labelledby="modalTitle"
            aria-describedby="modalText"
            open={open}
            onClose={onClose}
            >
            <div style={modalStyle} className={classes.paper}>
                <h2
                    id="modalTitle"
                    className={classes.modalTitle + " mb-3"}
                    style={{ fontSize: 24 }}
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
                    className={loadingContainer}
                    >
                    <CircularProgress
                        className={loadingClass}
                        />
                </Grid>
            </div>
        </Modal>
    );
}

export default HighlightModal;