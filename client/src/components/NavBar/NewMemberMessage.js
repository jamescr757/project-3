import React from "react";
import Typography from "@material-ui/core/Typography"
import "./NavBar.css";

const styles = {
    message: {
        position: "absolute",
        right: 1,
        top: 128,
        width: 240,
        border: "solid 1px rgba(0, 0, 0, 0.15)",
        padding: 8,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 4,
        fontSize: 16
    }
}

export const NewMemberMessage = () => {

    return (
        <div style={styles.message} className="sign-up-message">
            <Typography variant="body1">
                Scores and highlights sent right to your inbox! Follow your favorite team(s) or rivals to stay up-to-date with the playoff race!
            </Typography>
        </div>
    );
}