import React, { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import Overtime from "../Filters/CategoryExtra/Overtime";
import "./HeroNav.css"

const classNames = require("classnames");

export const RivalDropdown = (props) => {

    const [rival, setRival] = useState(Boolean(props.rival));

    const handleClick = () => {
        setRival(!rival);
    }

    return (
        <div onClick={handleClick} style={{ display: "flex", alignItems: "center", marginLeft: 24 }}>
            <NavItem>
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${rival}/${props.ot}`} 
                    className={classNames({ "hero-nav-active": props.rival === "true", "hero-nav-item": props.rival !== "true" })}
                >
                    {props.category === "division" ? "Divisional Game" : "Rival"}
                </Link>
            </NavItem>
        </div>
    );
}

// <UncontrolledDropdown nav inNavbar>

        //     <DropdownToggle nav caret>
        //         Rivalry
        //     </DropdownToggle>

        //     <DropdownMenu>
        //         <Rival {...props} />
        //     </DropdownMenu>

        // </UncontrolledDropdown>