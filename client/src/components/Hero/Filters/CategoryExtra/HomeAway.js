import React, { useContext } from 'react';
import "../Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { ParamsContext } from '../../../../utils/ParamsContext';

const classNames = require("classnames");

export default function HomeAway(props) {

  const { category, table, identifier, location, days, outcome, rival, ot, sort } = useContext(ParamsContext);

  const btnArray = ["Home", "Away", "All"];

  return (
    <React.Fragment>
        {btnArray.map((label, index) => {
            return (
                <Link 
                    key={index}
                    to={`/multiple/${category}/${table}/${identifier}/${days}/${label.toLowerCase()}/${outcome}/${rival}/${ot}/${sort}`}
                    className="hero-nav-dropdown-item"    
                >
                    <DropdownItem 
                        className={classNames({ "hero-nav-dropdown-active": location === label.toLowerCase(), "hero-nav-dropdown-item": location })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
    </React.Fragment>
  );
}