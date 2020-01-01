import React from 'react';
import "../Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const classNames = require("classnames");

export default function HomeAway(props) {

  const btnArray = ["Home", "Away", "All"];

  return (
    <React.Fragment>
        {btnArray.map((label, index) => {
            return (
                <Link 
                    key={index}
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${label.toLowerCase()}/${props.outcome}/${props.rival}/${props.ot}`}>
                    <DropdownItem 
                        className={classNames({ "active": props.location === label.toLowerCase() })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
    </React.Fragment>
  );
}