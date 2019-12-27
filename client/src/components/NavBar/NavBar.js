import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Link to="/">
                    <Typography className="home-link" variant="h6" color="inherit" noWrap>
                        NHL Scores
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;