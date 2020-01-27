import React from "react";
import "../Dashboard.css";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


export const GamesCircleCheck = ({ email, iconSwitch, table, text, editClick }) => {

    return (
        <ListItem>
            <ListItemIcon>
                {iconSwitch ?  
                <CheckCircleIcon 
                    style={{ cursor: "pointer" }}
                    htmlColor="rgb(74,173,84)" onClick={()=>editClick(email.id, table, false)} />
                :
                <RadioButtonUncheckedIcon 
                    style={{ cursor: "pointer" }}
                    onClick={()=>editClick(email.id, table, true)}
                />
            }
            </ListItemIcon>
            <ListItemText 
                primary={text}
            />
        </ListItem>
    );
}