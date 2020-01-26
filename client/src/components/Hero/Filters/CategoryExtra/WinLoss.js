import React from 'react';
import "../Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { ParamsContext } from '../../../../utils/ParamsContext';

const classNames = require("classnames");

export default function WinLoss() {

  const { category, table, identifier, days, location, outcome, rival, ot, sort } = React.useContext(ParamsContext);

  const btnArray = ["Wins", "Losses", "All"];
  const btnValues = ["win", "loss", "all"];

  return (
    <React.Fragment>
        {btnArray.map((label, index) => {
            return (
                <Link
                    key={index}
                    to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${btnValues[index]}/${rival}/${ot}/${sort}`}
                    className="hero-nav-dropdown-item" 
                >
                    <DropdownItem
                        className={classNames({ "hero-nav-dropdown-active": outcome === btnValues[index], "hero-nav-dropdown-item": outcome })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
    </React.Fragment>
  );
}