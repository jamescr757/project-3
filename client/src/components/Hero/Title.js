import React from "react";
import Typography from "@material-ui/core/Typography";


const Title = () => {

    return (
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
        >
            NHL Scores
        </Typography>
    );
}

export default Title;