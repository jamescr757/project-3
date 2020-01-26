import React, { useContext } from 'react';
import "./Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { ParamsContext } from "../../../utils/ParamsContext";
import "./Button.css"

const classNames = require("classnames");

export default function DayFilters() {

  const { type, category, table, days, identifier, location, outcome, rival, ot, sort, email } = useContext(ParamsContext);

  const dayArr = ["1 day", "3 days", "7 days", "10 days", "2 weeks", "1 month", "All"];
  const dayValues = ["1", "3", "7", "10", "14", "30", "300"];

  return (  
      <React.Fragment>
          {dayArr.map((label, index) => {

            return (
                !type ?
                <Link
                    key={index}
                    to={`/multiple/${category}/${table}/${identifier}/${dayValues[index]}/${location}/${outcome}/${rival}/${ot}/${sort}`}
                    className="hero-nav-dropdown-item"    
                >
                    <DropdownItem 
                        className={classNames({ "hero-nav-dropdown-active": days === dayValues[index], "hero-nav-dropdown-item": days })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
                :
                <Link
                    key={index}
                    to={`/member/scoreboard/${email}/${table}/${dayValues[index]}/${sort}`}
                    className="hero-nav-dropdown-item"    
                >
                    <DropdownItem 
                        className={classNames({ "hero-nav-dropdown-active": days === dayValues[index], "hero-nav-dropdown-item": days })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
      </React.Fragment>
  );
}