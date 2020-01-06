import React, { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import Overtime from "../Filters/CategoryExtra/Overtime";
import "./HeroNav.css"

const classNames = require("classnames");

export const OvertimeDropdown = (props) => {

    const [ot, setOT] = useState(Boolean(props.ot));

    const handleClick = () => {
        setOT(!ot);
    }

    return (
        <div onClick={handleClick} style={{ display: "flex", alignItems: "center", marginLeft: 12 }}>
            <NavItem>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${ot}`} 
                    className={classNames({ "hero-nav-active": props.ot === "true", "hero-nav-item": props.ot !== "true" })}
                >
                    Overtime
                </Link>
            </NavItem>
        </div>
    );
}