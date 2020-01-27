import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import API from "../../../utils/API";
import { Button } from "reactstrap";

const useStyles = makeStyles(theme => ({

    card: {
        height: '100%'
    },

}));


export const SendEmailNow = ({ userEmail }) => {
    const classes = useStyles();

    const [emailNowSuccess, setEmailNowSuccess] = useState(false);
    const [noGames, setNoGames] = useState(false);

    const sendEmailNow = () => {
        API.sendEmailNow(userEmail)
        .then((res) => {
            if (res.data === "error") {
                console.log("there's been an error sending email");
            } else if (res.data === "no games") {
                setNoGames(true);
            } else {
                setEmailNowSuccess(true);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Grid 
            item  
            xs={12}
            sm={12}
            md={6}
        >
            <Card className={classes.card}>
                <Grid container direction="column" alignItems="center">
                    <CardContent className="p-4">
                        <Grid item xs={12} >
                            { !emailNowSuccess ? 
                                noGames ? 
                                    <Button color="success" onClick={sendEmailNow}>No Games</Button>
                                    : 
                                    <Button color="success" onClick={sendEmailNow}>Send Email Now</Button>
                            :
                            <Typography variant="h4" className="text-success">Email sent!</Typography>
                            }
                        </Grid>
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
    );
}