import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, List, ListItem, ListItemText, ListItemIcon, Button as SaveButton } from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Button } from "reactstrap";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import "./Dashboard.css";
import { AccountHero } from "../Hero/AccountHero";
import SettingsIcon from '@material-ui/icons/Settings';
import { EmailUpdate } from "../Form/EmailUpdate";
import { Link } from "react-router-dom";
import { PasswordUpdate } from "../Form/PasswordUpdate";

const classNames = require("classnames");

const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      minHeight: "60vh"
    },
    noGames: {
        textAlign: "center"
    },
    card: {
        height: '100%'
    },
    cardContent: {
        flexGrow: 1,
        paddingTop: 12,
        paddingBottom: 0
    },

}));

export const AccountDetails = (props) => {
    const classes = useStyles();

    const userEmail = props.match.params.email || props.userEmail;
    sessionStorage.setItem("userEmail", userEmail);

    const [errorMessage, setErrorMessage] = useState();

    const handleDelete = () => {

        API.deleteAccount(userEmail)
            .then((res) => {
                if (res.data === "error") {
                    console.log("error deleting account");
                } else {
                    window.location.href = "/";
                    sessionStorage.clear();

                    API.deleteEmailData(userEmail)
                        .then(res => {
                            if (res.data === "error") {
                                console.log("error deleting all emailData from user");
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
        <AccountHero userEmail={userEmail} />
        <Container className={classes.cardGrid} maxWidth="sm">
            <Grid container spacing={4}>
                <Grid 
                    item 
                    xs={12}
                >
                    { props.match.params.type === "my-account" &&
                    <Card className={classes.card}>
                        <Grid container direction="column">
                        <CardContent className={classes.cardContent + " pb-0 px-2"}>
                            <Grid item xs={12} >
                                {/* <CardTitle category={email.category} identifier={email.identifier} /> */}
                                <List className="pb-0">
                                    <ListItem>
                                        <ListItemIcon style={{ minWidth: 36 }}>
                                            <Link to={`/member/update-email/${userEmail}`}>
                                                <SettingsIcon style={{ cursor: "pointer", color: "gray" }} />
                                            </Link>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={"Email:" + " " + userEmail}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon style={{ minWidth: 36 }}>
                                            <Link to={`/member/update-password/${userEmail}`}>
                                                <SettingsIcon style={{ cursor: "pointer", color: "gray" }} />
                                            </Link>
                                        </ListItemIcon>
                                        <ListItemText 
                                            primary={`Password: *********`}
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        </CardContent>
                        </Grid>
                        <Grid container justify="flex-end">
                            {/* <Grid item> */}
                                <Button color="danger" className="m-3" onClick={()=>handleDelete()}>
                                    Delete Account
                                </Button>
                            {/* </Grid> */}
                        </Grid>
                    </Card>
                    }
                    { props.match.params.type === "update-email" &&   
                    <Card className={classes.card}>
                        <Grid container direction="column">
                        <CardContent className={classes.cardContent + " pb-0 px-2"}>
                            <Grid item xs={12} >
                                <EmailUpdate {...props} userEmail={userEmail} />
                            </Grid>
                        </CardContent>
                        </Grid>
                    </Card>
                    }
                    { props.match.params.type === "update-password" &&   
                    <Card className={classes.card}>
                        <Grid container direction="column">
                        <CardContent className={classes.cardContent + " pb-0 px-2"}>
                            <Grid item xs={12} >
                                <PasswordUpdate {...props} userEmail={userEmail} />
                            </Grid>
                        </CardContent>
                        </Grid>
                    </Card>
                    }
                </Grid>
            </Grid>
        </Container>
        </React.Fragment>
    );
}