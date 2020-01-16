import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CancelIcon from '@material-ui/icons/Cancel';
import "./Button.css";


export const CustomFilterRow = ({ email, table, days, sort }) => {

    let message;
    if (days === "7" && table === "completed" && sort === "desc") {
        message = "Scores from the past week"
    } else if (days === "7" && table === "future" && sort === "asc") {
        message = "Games over the next week"
    } 

    const daysLogic = () => {

        switch (days) {
            case "1":
                return "1 day";
            case "3":
                return "3 days";
            case "7": 
                return "1 week";
            case "10":
                return "10 days";
            case "14":
                return "2 weeks";
            case "30":
                return "1 month";
            case "300":
                return "All games";
        }
    }

    return (
        message ? 
            <Typography variant="subtitle1" align="center" gutterBottom={true}>
                {`${message}`}
            </Typography>
            :
            <Grid container spacing={0}>
                { days !== "7" &&
                    <Grid item xs={4} sm={2} md={1} container justify="center" style={{textAlign: "center"}} >
                        <Link 
                          className="filter-btn-cancel"
                          to={`/member/scoreboard/${email}/${table}/7/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4}}>{daysLogic()}</span>
                        </Link>
                    </Grid>
                }
                { table === "completed" && sort === "asc" &&
                    <Grid item xs={3} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/member/scoreboard/${email}/${table}/${days}/desc`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4 }}>
                                    Order
                                </span>
                        </Link>
                    </Grid>
                }
                { table === "future" && sort === "desc" &&
                    <Grid item xs={3} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/member/scoreboard/${email}/${table}/${days}/asc`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4 }}>
                                    Order
                                </span>
                        </Link>
                    </Grid>
                }
            </Grid>
    );
}