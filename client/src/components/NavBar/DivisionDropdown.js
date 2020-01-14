import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import DivisionBtns from "../Hero/Filters/DivisionBtns";

export const DivisionDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Division
            </DropdownToggle>

            <DropdownMenu className="division-dropdown">
                <DivisionBtns {...props} />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}

