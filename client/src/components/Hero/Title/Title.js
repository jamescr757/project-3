import React from "react";
import Typography from "@material-ui/core/Typography";
import "./TeamTitle.css"


const Title = (props) => {

    return (
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{ textTransform: "capitalize" }}
            className={props.responsive ? "hero-title-responsive" : ""}
        >
            {props.children}
        </Typography>
    );
}

export default Title;