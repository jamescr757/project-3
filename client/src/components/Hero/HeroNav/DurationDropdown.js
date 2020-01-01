import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import DayFilters from "../Filters/DayFilters";

export const DurationDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Duration
            </DropdownToggle>
            <DropdownMenu>
                <DayFilters {...props} />
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}