import React from 'react';
import "../Filters.css"
import { DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const classNames = require("classnames");

export default function Rival(props) {

  const btnArray = ["Division", "All"];

  return (
    <React.Fragment>
        {btnArray.map((label, index) => {
            return (
                <Link
                    key={index}
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/all/all/${label.toLowerCase()}/${props.ot}`}
                > 
                    <DropdownItem 
                        className={classNames({ "active": props.rival === label.toLowerCase() })}
                    >
                        {label}
                    </DropdownItem>
                </Link>
            );
        })}
    </React.Fragment>
  );
}