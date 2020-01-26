import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import WinLoss from "../Filters/CategoryExtra/WinLoss";

export const ResultDropdown = () => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Result
            </DropdownToggle>

            <DropdownMenu>
                <WinLoss />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}