import React, { useState } from "react";
import "../Dashboard.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core";
import moment from "moment";

const classNames = require("classnames");


export const NextEmail = ({ email, index, editClick }) => {

    const [showArrows, setShowArrows] = useState(false);
    const [showIndex, setShowIndex] = useState();

    const handleIconClick = (index) => {
        setShowIndex(index);
        setShowArrows(true)
    }

    const handleDoneClick = () => {
        setShowArrows(false);
    }

    return (
        <ListItem>
            <ListItemIcon>
                <ScheduleIcon style={{ cursor: "pointer" }}
                onClick={()=>handleIconClick(index)}  />
            </ListItemIcon>
            <ListItemText style={{ maxWidth: 170 }}
                primary={`Next email - ${moment(email.nextEmail, "YYYYMMDD").format("ddd M/D")}`}
            />
            { showArrows && email.nextEmail > moment().utcOffset(-7).add(1, "days").format("YYYYMMDD") && showIndex === index &&
                <ListItemIcon style={{ minWidth: 30 }}>
                    <ArrowDropDownIcon
                        style={{ cursor: "pointer" }}
                        onClick={()=>editClick(email.id, "nextEmail", moment(email.nextEmail).subtract(1, "days").format("YYYYMMDD"))}
                    />
                </ListItemIcon>
            }
            { showArrows && showIndex === index &&
                <ListItemIcon className={classNames({ "arrow-padding": email.nextEmail < moment().utcOffset(-7).add(2, "days").format("YYYYMMDD") })}
                style={{ minWidth: 24 }}
                >
                    <ArrowDropUpIcon
                        style={{ cursor: "pointer" }}
                        onClick={()=>editClick(email.id, "nextEmail", moment(email.nextEmail).add(1, "days").format("YYYYMMDD"))}
                    />
                </ListItemIcon>
            }
            { showArrows && showIndex === index &&
                <Button className="py-1 ml-1" onClick={handleDoneClick}>Done</Button>
            }
        </ListItem>
    );
}