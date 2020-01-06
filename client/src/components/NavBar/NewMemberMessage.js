import React from "react";
import Typography from "@material-ui/core/Typography"

const styles = {
    message: {
        position: "absolute",
        right: 1,
        top: 128,
        width: 200,
        border: "solid 1px rgba(0, 0, 0, 0.15)",
        padding: 8,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 4
    }
}

export const NewMemberMessage = () => {

    return (
        <div style={styles.message}>
            <Typography variant="caption">
                Get scores/highlights from your favorite team(s) sent right to your inbox! Can also follow an entire division to keep track of your rivals in the playoff race.
            </Typography>
        </div>
    );
}