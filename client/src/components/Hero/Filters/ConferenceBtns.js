import React from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";


const ConferenceBtns = () => {

    const conferences = ["Eastern", "Western", "All Teams"];

    return (
        <React.Fragment>
            {conferences.map((conference, index) => {
                return (
                    <Link
                        key={index}
                        to={`/multiple/conference/completed/${conference}/3/all/all/false/false/desc`}
                    >
                        <DropdownItem>
                            {conference} {conference !== "All Teams" && "Conference"}
                        </DropdownItem>
                    </Link>
                );
            })}
        </React.Fragment>
    );
}

export default ConferenceBtns;