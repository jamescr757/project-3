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
    const divisions = ["Atlantic", "Metropolitan", "Central", "Pacific"]

    return (
        <Grid container spacing={2} justify="center">
            
            {divisions.map((division, index) => {
                return (
                    <Grid item key={index}>
                        <Link to={`/multiple/division/completed/${division}/3`}>
                            <Button
                                onClick={()=>props.handleBtnClick()}
                            >
                                {division}
                            </Button>
                        </Link>
                    </Grid>
                );
            })}
            
        </Grid>
    );
}

export default DivisionBtns;