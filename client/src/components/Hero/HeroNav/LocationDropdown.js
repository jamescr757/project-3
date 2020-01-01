import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import HomeAway from "../Filters/CategoryExtra/HomeAway";

export const LocationDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Location
            </DropdownToggle>

            <DropdownMenu>
                <HomeAway {...props} />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}