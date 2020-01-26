import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import DayFilters from "../Filters/DayFilters";

export const DurationDropdown = () => {

    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Time Period
            </DropdownToggle>
            <DropdownMenu>
                <DayFilters />
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}