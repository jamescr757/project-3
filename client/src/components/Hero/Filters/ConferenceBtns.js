import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import ChangePage from "../ChangePage";
import { Link } from "react-router-dom";


const ConferenceBtns = (props) => {

    return (
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Link to="/multiple/conference/Western">
                    <Button
                        onClick={()=>props.handleBtnClick()}
                    >
                        Western
                    </Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/mutiple/conference/Eastern">
                    <Button
                        onClick={()=>props.handleBtnClick()}
                    >
                        Eastern
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default ConferenceBtns;