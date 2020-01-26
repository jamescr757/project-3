import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import ConferenceBtns from "../Hero/Filters/ConferenceBtns";

export const ConferenceDropdown = () => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Conference
            </DropdownToggle>

            <DropdownMenu className="conference-dropdown">
                <ConferenceBtns />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}

