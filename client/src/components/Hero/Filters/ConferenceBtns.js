import React, { useContext } from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Button.css";
import { ParamsContext } from "../../../utils/ParamsContext";


const ConferenceBtns = (props) => {

    const { table, days, location, outcome, rival, ot } = useContext(ParamsContext);

    const conferences = ["Eastern", "Western", "All Teams"];

    const toLogic = (conference) => {
        
        if (props.category && table === "completed") {
            return `/multiple/conference/completed/${conference}/${days}/${location}/${outcome}/${rival}/${ot}/desc`;
        } else if (props.category && table === "future") {
            return `/multiple/conference/future/${conference}/${days}/${location}/${outcome}/${rival}/${ot}/asc`;
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