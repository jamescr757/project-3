import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroNav.css"

const classNames = require("classnames");

export const SortDropdown = (props) => {

    return (
        // <div style={{ display: "flex", alignItems: "center", marginLeft: 24 }}>
            <NavItem className="mx-md-3 hero-nav-switch-li">                
                {!props.type ?
                <Link 
                    to={`/multiple/${props.category}/${props.table}/${props.identifier}/${props.days}/${props.location}/${props.outcome}/${props.rival}/${props.ot}/${props.sort === "desc" ? "asc": "desc"}`} 
                    className={classNames({ "hero-nav-item-switch": props.sort })}
                >
                    Flip Order
                </Link>
                :
                <Link 
                    to={`/member/scoreboard/${props.email}/${props.table}/${props.days}/${props.sort === "desc" ? "asc": "desc"}`} 
                    className={classNames({ "hero-nav-item-switch": props.sort })}
                >
                    Flip Order
                </Link>
                }
            </NavItem>
        // </div>
    );
}