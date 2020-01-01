import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Overtime from "../Filters/CategoryExtra/Overtime";

export const OvertimeDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Overtime
            </DropdownToggle>

            <DropdownMenu>
                <Overtime {...props} />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}