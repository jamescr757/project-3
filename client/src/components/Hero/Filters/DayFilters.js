import React from 'react';
import "./Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const classNames = require("classnames");

export default function DayFilters(props) {

  const dayArr = ["1 day", "3 days", "7 days", "10 days", "2 weeks", "1 month", "All"];
  const dayValues = [1, 3, 7, 10, 14, 30, 300];

  return (  
      <React.Fragment>
          {dayArr.map((label, index) => {

            return (
                <Link
                    key={index}
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${dayValues[index]}/${props.location}/${props.outcome}/${props.rival}/${props.ot}`}
                >
                    <DropdownItem 
                        className={classNames({ "active": props.days == dayValues[index] })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
      </React.Fragment>
  );
}