import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import "./MainDate.css"
 
export default function DatePick(props) {
 
    return (
        <DatePicker
            selected={new Date(props.date)}
            onChange={props.handleChange}
            className="main-date"
            minDate={new Date("10/02/2019")}
            maxDate={new Date("04/04/2020")}
            dateFormat="M/d"
        />
    );
}