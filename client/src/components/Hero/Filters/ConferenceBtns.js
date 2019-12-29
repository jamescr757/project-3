import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import ChangePage from "../ChangePage";
import { Link } from "react-router-dom";


const ConferenceBtns = (props) => {

    const conferences = ["Western", "Eastern"];

    return (
        <Grid container spacing={2} justify="center">
            
            {conferences.map((conference, index) => {
                return (
                    <Grid item key={index}>
                        <Link to={`/multiple/conference/completed/${conference}`}>
                            <Button
                                onClick={()=>props.handleBtnClick()}
                            >
                                {conference}
                            </Button>
                        </Link>
                    </Grid>
                );
            })}
            
        </Grid>
    );
}

export default ConferenceBtns;