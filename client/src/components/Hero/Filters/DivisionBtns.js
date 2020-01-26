import React, { useContext } from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Button.css";
import { ParamsContext } from "../../../utils/ParamsContext";


const DivisionBtns = (props) => {

    const { table, days, location, outcome, rival, ot } = useContext(ParamsContext);

    const divisions = ["Atlantic", "Metropolitan", "Central", "Pacific"];

    const toLogic = (division) => {
        
        if (props.category && table === "completed") {
            return `/multiple/division/completed/${division}/${days}/${location}/${outcome}/${rival}/${ot}/desc`;
        } else if (props.category && table === "future") {
            return `/multiple/division/future/${division}/${days}/${location}/${outcome}/${rival}/${ot}/asc`;
        } else {
            return `/multiple/division/completed/${division}/3/all/all/false/false/desc`;
        }
    }

    return (
        <React.Fragment>
            {divisions.map((division, index) => {
                return (
                    <Link
                        key={index} 
                        to={toLogic(division)}
                        className="btn-link team-dropdown-item"
                    >
                        <DropdownItem className="non-team-dropdown-item">
                            {division}  
                        </DropdownItem>
                    </Link>
                );
            })}
        </React.Fragment>
    );
}

export default DivisionBtns;