import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../Hero/Filters/Button.css";

export default function({ identifier }) {

    return (
        <Link to={`/multiple/conference/completed/${identifier}/3/all/all/false/false/desc`} className="dashboard-title-link">
            <Typography variant="h5" align="center" gutterBottom={false} color="textPrimary">
                {identifier} {identifier === "All Teams" ? "" : " Conference"}
            </Typography>
        </Link>
    );
}