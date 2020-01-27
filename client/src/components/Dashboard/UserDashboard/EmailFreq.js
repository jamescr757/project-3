import React, { useState } from "react";
import "../Dashboard.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core";

const classNames = require("classnames");


export const EmailFreq = ({ email, index, editClick }) => {

    const [showIndex, setShowIndex] = useState();
    const [showArrows, setShowArrows] = useState(false);

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
            <ListItemText style={{ maxWidth: 110 }}
                primary={email.frequency === "1" ? "Everyday" : `Every ${email.frequency} days`}
            />
            { showArrows && email.frequency > 1 && showIndex === index &&
                <ListItemIcon style={{ minWidth: 30 }}>
                    <ArrowDropDownIcon
                        style={{ cursor: "pointer" }}
                        onClick={()=>editClick(email.id, "frequency", parseInt(email.frequency) - 1)}
                    />
                </ListItemIcon>
            }
            { showArrows && email.frequency < 30 && showIndex === index &&
                <ListItemIcon className={classNames({ "arrow-padding": email.frequency < 2 })}
                style={{ minWidth: 34 }}
                >
                    <ArrowDropUpIcon
                        style={{ cursor: "pointer" }}
                        onClick={()=>editClick(email.id, "frequency", parseInt(email.frequency) + 1)}
                    />
                </ListItemIcon>
            }
            { showArrows && showIndex === index &&
                <Button className="py-1" onClick={handleDoneClick}>Done</Button>
            }
        </ListItem>
    );
}