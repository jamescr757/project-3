import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, List, ListItem, ListItemText, ListItemIcon, Button as SaveButton } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Button } from "reactstrap";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CardTitle from "./CardTitle";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import "./Dashboard.css";
import { DashboardHero } from "../Hero/DashboardHero";
import moment from "moment";

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

export const UserDashboard = (props) => {
    const classes = useStyles();

    const userEmail = props.match.params.email || props.userEmail;
    sessionStorage.setItem("userEmail", userEmail);

    const [userData, setUserData] = useState([]);
    const [errorMessage, setErrorMessage] = useState();
    const [reRender, setReRender] = useState(false);
    const [showFrequency, showFrequencyArrows] = useState(false);
    const [showEmail, showEmailArrows] = useState(false);
    const [showFrequencyIndex, setShowFrequencyIndex] = useState();
    const [showEmailIndex, setShowEmailIndex] = useState();
    const [emailNowSuccess, setEmailNowSuccess] = useState(false);
    const [noData, setNoData] = useState(false);

    useEffect(() => {

        API.findUserData(userEmail)
            .then((res) => {
                if (res.data === "error") {
                    setErrorMessage("There's been an error.");
                } else {
                    if (res.data.length === 0) {
                        setNoData(true);

                    } else setNoData(false);
                    
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

    const handleScheduleClick = (index) => {
        setShowFrequencyIndex(index);
        showFrequencyArrows(true)
    }

    const handleNextEmailClick = (index) => {
        setShowEmailIndex(index);
        showEmailArrows(true)
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

    const handleFrequencySave = () => {
        showFrequencyArrows(false);
    }

    const handleEmailSave = () => {
        showEmailArrows(false);
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

    const sendEmailNow = () => {
        API.sendEmailNow(userEmail)
        .then((res) => {
            if (res.data === "error") {
                console.log("there's been an error sending email");
            } else {
                setEmailNowSuccess(true);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <React.Fragment>
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
                        <CardContent className={classes.cardContent + " pb-0 px-2"}>
                            <Grid item xs={12} >
                                <CardTitle category={email.category} identifier={email.identifier} />
                                <List className="pb-0">
                                    <ListItem>
                                        <ListItemIcon>
                                            <ScheduleIcon style={{ cursor: "pointer" }}
                                            onClick={()=>handleScheduleClick(index)}  />
                                        </ListItemIcon>
                                        <ListItemText style={{ maxWidth: 110 }}
                                            primary={email.frequency === "1" ? "Everyday" : `Every ${email.frequency} days`}
                                        />
                                        { showFrequency && email.frequency > 1 && showFrequencyIndex === index &&
                                            <ListItemIcon style={{ minWidth: 30 }}>
                                                <ArrowDropDownIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "frequency", parseInt(email.frequency) - 1)}
                                                />
                                            </ListItemIcon>
                                        }
                                        { showFrequency && email.frequency < 30 && showFrequencyIndex === index &&
                                            <ListItemIcon className={classNames({ "arrow-padding": email.frequency < 2 })}
                                            style={{ minWidth: 34 }}
                                            >
                                                <ArrowDropUpIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "frequency", parseInt(email.frequency) + 1)}
                                                />
                                            </ListItemIcon>
                                        }
                                        { showFrequency && showFrequencyIndex === index &&
                                            <SaveButton className="py-1" onClick={handleFrequencySave}>Done</SaveButton>
                                        }
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ScheduleIcon style={{ cursor: "pointer" }}
                                            onClick={()=>handleNextEmailClick(index)}  />
                                        </ListItemIcon>
                                        <ListItemText style={{ maxWidth: 170 }}
                                            primary={`Next email - ${moment(email.nextEmail, "YYYYMMDD").format("ddd M/D")}`}
                                        />
                                        { showEmail && email.nextEmail > moment().utcOffset(-7).add(1, "days").format("YYYYMMDD") && showEmailIndex === index &&
                                            <ListItemIcon style={{ minWidth: 30 }}>
                                                <ArrowDropDownIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "nextEmail", moment(email.nextEmail).subtract(1, "days").format("YYYYMMDD"))}
                                                />
                                            </ListItemIcon>
                                        }
                                        { showEmail && showEmailIndex === index &&
                                            <ListItemIcon className={classNames({ "arrow-padding": email.nextEmail < moment().utcOffset(-7).add(2, "days").format("YYYYMMDD") })}
                                            style={{ minWidth: 34 }}
                                            >
                                                <ArrowDropUpIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "nextEmail", moment(email.nextEmail).add(1, "days").format("YYYYMMDD"))}
                                                />
                                            </ListItemIcon>
                                        }
                                        { showEmail && showEmailIndex === index &&
                                            <SaveButton className="py-1" onClick={handleEmailSave}>Done</SaveButton>
                                        }
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            {email.completedTable ?  
                                            <CheckCircleIcon 
                                                style={{ cursor: "pointer" }}
                                                htmlColor="rgb(74,173,84)" onClick={()=>handleEditClick(email.id, "completed", false)} />
                                            :
                                            <RadioButtonUncheckedIcon 
                                                style={{ cursor: "pointer" }}
                                                onClick={()=>handleEditClick(email.id, "completed", true)}
                                            />
                                        }
                                        </ListItemIcon>
                                        <ListItemText 
                                            primary="Completed Games"
                                        />
                                    </ListItem>
                                    <ListItem className="pb-0">
                                            <ListItemIcon>
                                             {email.futureTable ?  
                                                <CheckCircleIcon 
                                                  style={{ cursor: "pointer" }}
                                                  htmlColor="rgb(74,173,84)" 
                                                  onClick={()=>handleEditClick(email.id, "future", false)}  
                                                />
                                                :
                                                <RadioButtonUncheckedIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "future", true)}
                                                />
                                            }
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary="Future Games"
                                            />
                                    </ListItem>
                                </List>
                            </Grid>
                        </CardContent>
                        </Grid>
                        <Grid container justify="flex-end">
                            {/* <Grid item> */}
                                <Button color="danger" className="m-3" onClick={()=>handleDelete(email.id)}>
                                    Delete
                                </Button>
                            {/* </Grid> */}
                        </Grid>
                    </Card>
                </Grid>
                ))}
                {userData.length > 0 && <Grid 
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
                                    <Button color="success" onClick={sendEmailNow}>Send Email Now</Button>
                                    :
                                    <Typography variant="h4" className="text-success">Email sent!</Typography>
                                    }
                                </Grid>
                            </CardContent>
                        </Grid>
                    </Card>
                </Grid>}
                {noData && renderNoData()}
            </Grid>
        </Container>
        </React.Fragment>
    );
}