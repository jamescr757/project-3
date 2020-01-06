import React, { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, NavItem, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";

// const classNames = require("classnames");

export const Member = (props) => {

    return (
        <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
                Members
            </DropdownToggle>

            <DropdownMenu style={{ minWidth: "5rem" }}>
                <Link
                    to={`/member/sign-in`}
                >
                    <DropdownItem>
                        Preferences
                    </DropdownItem>
                </Link>
                <div onMouseOver={props.revealMessage} onMouseLeave={props.hideMessage}>
                    <Link
                        to={`/member/new`}
                    >
                        <DropdownItem>
                            Sign-up
                        </DropdownItem>
                    </Link>
                </div>
            </DropdownMenu>

        </UncontrolledDropdown>
    );
}