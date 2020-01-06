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
    const [show, showArrows] = useState(false);
    const [showIndex, setShowIndex] = useState();

    useEffect(() => {

        API.findUserData(userEmail)
            .then((res) => {
                if (res.data === "error") {
                    setErrorMessage("There's been an error.");
                } else {
                    setUserData(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [reRender]);

    const renderNoData = () => {
        if (userData.length === 0) {
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
    }

    const handleScheduleClick = (index) => {
        setShowIndex(index);
        showArrows(true)
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

    const handleSave = () => {
        showArrows(false);
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
        <DashboardHero userEmail={userEmail} />
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {userData.map((email, index) => (
                <Grid 
                    item 
                    key={index} 
                    xs={12}
                    sm={8}
                    md={6}
                >
                    <Card className={classes.card}>
                        <Grid container direction="column">
                        <CardContent className={classes.cardContent + " pb-0 px-2"}>
                            <Grid item xs={12} >
                                <CardTitle category={email.category} identifier={email.identifier} />
                                <List className="pb-0">
                                    <ListItem>
                                        <ListItemIcon style={{ cursor: "pointer" }}>
                                            <ScheduleIcon style={{ cursor: "pointer" }}
                                            onClick={()=>handleScheduleClick(index)}  />
                                        </ListItemIcon>
                                        <ListItemText style={{ maxWidth: 110 }}
                                            primary={email.frequency === "1" ? "Everyday" : `Every ${email.frequency} days`}
                                        />
                                        { show && email.frequency > 1 && showIndex === index &&
                                            <ListItemIcon style={{ minWidth: 30 }}>
                                                <ArrowDropDownIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "frequency", parseInt(email.frequency) - 1)}
                                                />
                                            </ListItemIcon>
                                        }
                                        { show && email.frequency < 30 && showIndex === index &&
                                            <ListItemIcon className={classNames({ "arrow-padding": email.frequency < 2 })}
                                            style={{ minWidth: 34 }}
                                            >
                                                <ArrowDropUpIcon
                                                  style={{ cursor: "pointer" }}
                                                  onClick={()=>handleEditClick(email.id, "frequency", parseInt(email.frequency) + 1)}
                                                />
                                            </ListItemIcon>
                                        }
                                        { show && showIndex === index &&
                                            <SaveButton className="py-1" onClick={handleSave}>Done</SaveButton>
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
                {renderNoData()}
            </Grid>
        </Container>
        </React.Fragment>
    );
}