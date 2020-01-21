import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import StandingsLinks from "../Hero/Filters/StandingsLinks";

export const StandingsDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Standings
            </DropdownToggle>

            <DropdownMenu className="division-dropdown">
                <StandingsLinks {...props} />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}

