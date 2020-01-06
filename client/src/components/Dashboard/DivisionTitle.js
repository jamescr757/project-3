import React from "react";
import Typography from "@material-ui/core/Typography"

export default function({ identifier }) {

    return (
        <Typography variant="h5" align="center" gutterBottom={false}>
            {identifier} Division
        </Typography>
    );
}