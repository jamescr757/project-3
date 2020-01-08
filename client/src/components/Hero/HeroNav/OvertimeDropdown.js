import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroNav.css"

const classNames = require("classnames");

export const OvertimeDropdown = (props) => {

    return (
        <div style={{ display: "flex", alignItems: "center", marginLeft: 12 }}>
            <NavItem>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${props.ot === "true" ? "false" : "true"}/${props.sort}`} 
                    // className={classNames({ "hero-nav-active": props.ot === "true", "hero-nav-item": props.ot !== "true" })}
                    className={classNames({ "hero-nav-item": props.ot })}
                >
                    Overtime
                </Link>
            </NavItem>
        </div>
    );
}