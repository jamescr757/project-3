import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroNav.css"

const classNames = require("classnames");

export const RivalDropdown = (props) => {

    return (
        // <div style={{ display: "flex", alignItems: "center", marginLeft: 24 }}>
            <NavItem className="mx-md-3 hero-nav-switch-li">
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival === "true" ? "false" : "true"}/${props.ot}/${props.sort}`} 
                    className={classNames({ "hero-nav-item-switch": props.rival })}
                >
                    {props.category === "division" ? "Divisional Game" : "Rival"}
                </Link>
            </NavItem>
        // </div>
    );
}