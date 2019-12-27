import React from "react";
import Typography from "@material-ui/core/Typography";


const SubHeading = (props) => {

    return (
        <Typography
            component="h5"
            align="center"
            color="textSecondary"
            paragragh="true"
        >
            {props.children}
        </Typography>
    );
}

export default SubHeading;