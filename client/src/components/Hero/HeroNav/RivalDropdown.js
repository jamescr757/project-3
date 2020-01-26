import React, { useContext } from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeroNav.css"
import { ParamsContext } from "../../../utils/ParamsContext";

const classNames = require("classnames");

export const RivalDropdown = () => {

    const { category, table, identifier, days, location, outcome, rival, ot, sort } = useContext(ParamsContext);

    return (
        <NavItem className="mx-md-3 hero-nav-switch-li">
            <Link 
                to={`/multiple/${category}/${table}/${identifier}/${days}/${location}/${outcome}/${rival === "true" ? "false" : "true"}/${ot}/${sort}`} 
                className={classNames({ "hero-nav-item-switch": rival })}
            >
                {category === "division" ? "Divisional Game" : "Rival"}
            </Link>
        </NavItem>
    );
}