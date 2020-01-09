import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroNav.css"

const classNames = require("classnames");

export const OvertimeDropdown = (props) => {

    return (
        // <div style={{ display: "flex", alignItems: "center", marginLeft: 12 }}>
            <NavItem className="mx-md-3 hero-nav-switch-li">
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${props.ot === "true" ? "false" : "true"}/${props.sort}`} 
                    className={classNames({ "hero-nav-item-switch": props.ot })}
                >
                    Overtime
                </Link>
            </NavItem>
        // </div>
    );
}