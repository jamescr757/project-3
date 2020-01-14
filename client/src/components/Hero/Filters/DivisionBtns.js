import React from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Button.css";


const DivisionBtns = (props) => {

    const divisions = ["Atlantic", "Metropolitan", "Central", "Pacific"];

    const toLogic = (division) => {
        
        if (props.category && props.match.params.table === "completed") {
            return `/multiple/division/completed/${division}/${props.match.params.days}/${props.match.params.location}/${props.match.params.outcome}/${props.match.params.rival}/${props.match.params.ot}/desc`;
        } else if (props.category && props.match.params.table === "future") {
            return `/multiple/division/future/${division}/${props.match.params.days}/${props.match.params.location}/${props.match.params.outcome}/${props.match.params.rival}/${props.match.params.ot}/asc`;
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