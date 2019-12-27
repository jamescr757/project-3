import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import ChangePage from "../ChangePage";
import { Link } from "react-router-dom";

// const useStyles = makeStyles(theme => ({

//     heroButtons: {
//         marginTop: theme.spacing(4),
//     },

// }));

const DivisionBtns = (props) => {
    // const classes = useStyles();

    return (
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Link to="/multiple/division/Atlantic">
                    <Button
                        onClick={()=>props.handleBtnClick()}
                    >
                        Atlantic
                    </Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/mutiple/division/Metropolitan">
                    <Button
                        onClick={()=>props.handleBtnClick()}
                    >
                        Metro
                    </Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/mutiple/division/Central">
                    <Button
                        onClick={()=>props.handleBtnClick()}
                    >
                        Central
                    </Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/mutiple/division/Pacific">
                    <Button
                        onClick={()=>props.handleBtnClick()}
                    >
                        Pacific
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default DivisionBtns;