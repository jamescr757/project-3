import React from 'react';
import "../Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const classNames = require("classnames");

export default function WinLoss(props) {

  const btnArray = ["Wins", "Losses", "All"];
  const btnValues = ["win", "loss", "all"];

  return (
    <React.Fragment>
        {btnArray.map((label, index) => {
            return (
                <Link
                    key={index}
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${btnValues[index]}/${props.rival}/${props.ot}/${props.sort}`}
                    className="hero-nav-dropdown-item" 
                >
                    <DropdownItem
                        className={classNames({ "hero-nav-dropdown-active": props.outcome === btnValues[index], "hero-nav-dropdown-item": props.outcome })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
    </React.Fragment>
  );
}