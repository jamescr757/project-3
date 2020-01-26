import React, { useContext } from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroNav.css"
import { ParamsContext } from "../../../utils/ParamsContext";

const classNames = require("classnames");

export const SortDropdown = () => {

    const { type, category, table, identifier, days, location, outcome, rival, ot, sort, email } = useContext(ParamsContext);

    return (
        <NavItem className="mx-md-3 hero-nav-switch-li">                
            {!type ?
            <Link 
                to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}/${sort === "desc" ? "asc": "desc"}`} 
                className={classNames({ "hero-nav-item-switch": sort })}
            >
                Flip Order
            </Link>
            :
            <Link 
                to={`/member/scoreboard/${email}/${table}/${days}/${sort === "desc" ? "asc": "desc"}`} 
                className={classNames({ "hero-nav-item-switch": sort })}
            >
                Flip Order
            </Link>
            }
        </NavItem>
    );
}