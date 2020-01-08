import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { DurationDropdown } from "./DurationDropdown";
import { LocationDropdown } from "./LocationDropdown";
import { ResultDropdown } from "./ResultDropdown";
import { RivalDropdown } from "./RivalDropdown";
import { OvertimeDropdown } from "./OvertimeDropdown";
import { SortDropdown } from "./SortDropdown";

const HeroNav = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="my-3">
        <NavbarBrand>Filters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <DurationDropdown {...props} />

            {props.category === "team" && <LocationDropdown {...props} />}

            {props.category === "team" && props.table === "completed" && <ResultDropdown {...props} />}

            {props.table === "completed" && <OvertimeDropdown {...props} />}

            {props.category === "conference" || <RivalDropdown {...props} />}

            <SortDropdown {...props} />

          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeroNav;