import React from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Button.css";


const ConferenceBtns = (props) => {

    const conferences = ["Eastern", "Western", "All Teams"];

    const toLogic = (conference) => {
        
        if (props.category && props.match.params.table === "completed") {
            return `/multiple/conference/completed/${conference}/${props.match.params.days}/${props.match.params.location}/${props.match.params.outcome}/${props.match.params.rival}/${props.match.params.ot}/desc`;
        } else if (props.category && props.match.params.table === "future") {
            return `/multiple/conference/future/${conference}/${props.match.params.days}/${props.match.params.location}/${props.match.params.outcome}/${props.match.params.rival}/${props.match.params.ot}/asc`;
        } else {
            return `/multiple/conference/completed/${conference}/3/all/all/false/false/desc`;
        }
    }

    return (
        <React.Fragment>
            {conferences.map((conference, index) => {
                return (
                    <Link
                        key={index}
                        to={toLogic(conference)}
                        className="btn-link team-dropdown-item"
                    >
                        <DropdownItem className="non-team-dropdown-item">
                            {conference} {conference !== "All Teams" && "Conference"}
                        </DropdownItem>
                    </Link>
                );
            })}
        </React.Fragment>
    );
}

export default ConferenceBtns;