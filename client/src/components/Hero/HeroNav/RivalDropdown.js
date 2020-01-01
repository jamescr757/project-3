import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Rival from "../Filters/CategoryExtra/Rival";

export const RivalDropdown = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Rivalry
            </DropdownToggle>

            <DropdownMenu>
                <Rival {...props} />
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}