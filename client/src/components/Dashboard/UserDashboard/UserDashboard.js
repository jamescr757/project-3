import React, { useEffect, useState, useContext } from "react";
import API from "../../../utils/API";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, List } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import CardTitle from "../CardTitle";
import "../Dashboard.css";
import { DashboardHero } from "../../Hero/DashboardHero";
import { ParamsContext } from "../../../utils/ParamsContext";
import { EmailFreq } from "./EmailFreq";
import { NextEmail } from "./NextEmail";
import { GamesCircleCheck } from "./GamesCircleCheck";
import { SendEmailNow } from "./SendEmailNow";
import { DeleteNotification } from "./DeleteNotification";

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

export const UserDashboard = (props) => {
    const classes = useStyles();

    const params = useContext(ParamsContext);

    const userEmail = params.email || props.userEmail;
    sessionStorage.setItem("userEmail", userEmail);

    const [userData, setUserData] = useState([]);
    // const [errorMessage, setErrorMessage] = useState();
    const [reRender, setReRender] = useState(false);
    const [noData, setNoData] = useState(false);

    useEffect(() => {

        API.findUserData(userEmail)
            .then((res) => {
                if (res.data === "error") {
                    // setErrorMessage("There's been an error.");
                } else {
                    if (res.data.length === 0) {
                        setNoData(true);
                    }
                    
                    setUserData(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [reRender]);

    const renderNoData = () => {
        
        return (
            <Box width="100%">
                <Typography
                    component="h2"
                    color="textPrimary"
                    className={classes.noGames}
                >
                    You are not following anything.
                </Typography>
            </Box>
        );
    }

    const handleEditClick = (id, colName, newValue) => {

        API.updateUserData(id, colName, newValue)
            .then((res) => {
                if (res.data === "error") {
                    console.log("there's been an error updating the email data table");
                } else {
                    setReRender(!reRender);
                }
            })
            .catch(err => {
                console.log(err);
            });
    } 

    const handleDelete = (id) => {

        API.deleteUserData(id)
            .then((res) => {
                if (res.data === "error") {
                    console.log("there's been an error deleting from the email data table");
                } else {
                    setReRender(!reRender);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <React.Fragment>
            {console.log("render")}
        <DashboardHero 
            userEmail={userEmail} 
            noData={noData}
        />
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {userData.map((email, index) => (
                <Grid 
                    item 
                    key={index} 
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <Card className={classes.card}>
                        <Grid container direction="column">
                            <CardContent 
                                className={classes.cardContent + " pb-0 px-2"}
                            >
                                <Grid item xs={12} >
                                    <CardTitle category={email.category} identifier={email.identifier} />
                                    <List className="pb-0">
                                        <EmailFreq 
                                            email={email} 
                                            index={index} 
                                            editClick={handleEditClick} 
                                        />
                                        <NextEmail 
                                            email={email} 
                                            index={index} 
                                            editClick={handleEditClick} 
                                        />
                                        <GamesCircleCheck
                                            email={email}
                                            iconSwitch={email.completedTable}
                                            table="completed"
                                            text="Completed Games"
                                            editClick={handleEditClick}
                                        />
                                        <GamesCircleCheck
                                            email={email}
                                            iconSwitch={email.futureTable}
                                            table="future"
                                            text="Future Games"
                                            editClick={handleEditClick}
                                        />
                                    </List>
                                </Grid>
                            </CardContent>
                        </Grid>
                        <DeleteNotification 
                          email={email} 
                          handleDelete={handleDelete}
                        />
                    </Card>
                </Grid>
                ))}
                {userData.length > 0 && <SendEmailNow userEmail={userEmail} /> }
                {noData && renderNoData()}
            </Grid>
        </Container>
        </React.Fragment>
    );
}