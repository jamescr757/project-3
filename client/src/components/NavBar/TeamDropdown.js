import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import TeamBtns from "../Hero/Filters/TeamBtns";

export const TeamDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Team
            </DropdownToggle>

            <DropdownMenu className="team-dropdown">
                <TeamBtns />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}

