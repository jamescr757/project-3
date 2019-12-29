import React from "react";
import Typography from "@material-ui/core/Typography";


const Title = (props) => {

    return (
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{ textTransform: "capitalize" }}
        >
            {props.children}
        </Typography>
    );
}

export default Title;