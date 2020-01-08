import React from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";


const DivisionBtns = () => {

    const divisions = ["Atlantic", "Metropolitan", "Central", "Pacific"]

    return (
        <React.Fragment>
            {divisions.map((division, index) => {
                return (
                    <Link
                        key={index} 
                        to={`/multiple/division/completed/${division}/3/all/all/false/false/desc`}
                    >
                        <DropdownItem>
                            {division}  
                        </DropdownItem>
                    </Link>
                );
            })}
        </React.Fragment>
    );
}

export default DivisionBtns;