import React from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Button.css";


const StandingsLinks = (props) => {

    const standingsPagesMobile = ["Division", "Wildcard", "Conference"];
    const standingsPages = ["Division", "Wildcard", "Conference", "League"];

    return (
        window.innerWidth > 500 ? 
        <React.Fragment>
            {standingsPages.map((page, index) => {
                return (
                    <Link
                        key={index} 
                        to={`/standings/${page.toLowerCase()}`}
                        className="btn-link team-dropdown-item"
                    >
                        <DropdownItem className="non-team-dropdown-item">
                            {page}  
                        </DropdownItem>
                    </Link>
                );
            })}
        </React.Fragment>
        : 
        <React.Fragment>
            {standingsPagesMobile.map((page, index) => {
                return (
                    <Link
                        key={index} 
                        to={`/standings/${page.toLowerCase()}`}
                        className="btn-link team-dropdown-item"
                    >
                        <DropdownItem className="non-team-dropdown-item">
                            {page}  
                        </DropdownItem>
                    </Link>
                );
            })}
        </React.Fragment>
    );
}

export default StandingsLinks;