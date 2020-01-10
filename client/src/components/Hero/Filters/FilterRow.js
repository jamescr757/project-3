import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CancelIcon from '@material-ui/icons/Cancel';
import "./Button.css";


export const FilterRow = ({ table, days, category, ot, rival, identifier, location, outcome, sort }) => {

    const rivalBool = rival === "true" ? true : false;
    const otBool = ot === "true" ? true : false;

    let message;
    if (days === "7" && category === "team" && !otBool && !rivalBool && location === "all" && outcome === "all" && table === "completed" && sort === "desc") {
        message = "Scores from the past week"
    } else if (days === "3" && category !== "team" && !otBool && !rivalBool && location === "all" && outcome === "all" && table === "completed" && sort === "desc") {
        message = "Scores from the past 3 days"
    } else if (days === "7" && category === "team" && location === "all" && table === "future" && !rivalBool && sort === "asc") {
        message = "Games over the next week"
    } else if (days === "3" && category !== "team" && location === "all" && table === "future" && !rivalBool && sort === "asc") {
        message = "Games over the next 3 days"
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
                { days !== "7" && category === "team" &&
                    <Grid item xs={4} sm={2} md={1} container justify="center" style={{textAlign: "center"}} >
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/7/${location}/${outcome}/${rival}/${ot}/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4}}>{daysLogic()}</span>
                        </Link>
                    </Grid>
                }
                { days !== "3" && category !== "team" &&
                    <Grid item xs={3} sm={2} md={1} container justify="center" >
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/3/${location}/${outcome}/${rival}/${ot}/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4}}>{daysLogic()}</span>
                        </Link>
                    </Grid>
                }
                { location !== "all" && 
                    <Grid item xs={3} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/${days}/all/${outcome}/${rival}/${ot}/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ textTransform: "capitalize", marginLeft: 4 }}>
                                    {location}
                                </span>
                        </Link>
                    </Grid>
                }
                { outcome !== "all" && table === "completed" &&
                    <Grid item xs={3} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/all/${rival}/${ot}/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4 }}>
                                    {outcome === "win" ? "Wins" : "Losses"}
                                </span>
                        </Link>
                    </Grid>
                }
                { otBool && table === "completed" &&
                    <Grid item xs={2} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${outcome}/${rival}/false/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4 }}>
                                    OT
                                </span>
                        </Link>
                    </Grid>
                }
                { rivalBool && category !== "conference" &&
                    <Grid item xs={3} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${outcome}/false/${ot}/${sort}`}
                        >
                                <CancelIcon />
                                <span style={{ marginLeft: 4 }}>
                                    {category !== "team" ? "Rivalry": "Rival"}
                                </span>
                        </Link>
                    </Grid>
                }
                { table === "completed" && sort === "asc" &&
                    <Grid item xs={3} sm={2} md={1} container justify="center">
                        <Link 
                          className="filter-btn-cancel"
                          to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}/desc`}
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
                          to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}/asc`}
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