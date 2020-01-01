import React from 'react';
import "../Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const classNames = require("classnames");

export default function Overtime(props) {

  const btnArray = ["Regulation", "Overtime", "All"];

  return (
    <React.Fragment>
        {btnArray.map((label, index) => {
            return (
                <Link
                    key={index} 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${label.toLowerCase()}`}
                >
                    <DropdownItem
                        className={classNames({ "active": props.ot === label.toLowerCase() })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
    </React.Fragment>
  );
}