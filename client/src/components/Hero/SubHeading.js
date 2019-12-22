import React from "react";
import Typography from "@material-ui/core/Typography";


const SubHeading = () => {

    return (
        <Typography
            component="h5"
            align="center"
            color="textSecondary"
            paragragh="true"
        >
            Scores and highlights from any game this season! Filter however you want by using the buttons below.
        </Typography>
    );
}

export default SubHeading;