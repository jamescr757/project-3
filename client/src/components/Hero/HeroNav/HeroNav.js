import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import { DurationDropdown } from "./DurationDropdown";
import { LocationDropdown } from "./LocationDropdown";
import { ResultDropdown } from "./ResultDropdown";
import { RivalDropdown } from "./RivalDropdown";
import { OvertimeDropdown } from "./OvertimeDropdown";
import { SortDropdown } from "./SortDropdown";
import { ParamsContext } from "../../../utils/ParamsContext";
import "./HeroNav.css";

const HeroNav = () => {

  const { category, table } = useContext(ParamsContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="my-3">
        <NavbarBrand>Filters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <DurationDropdown />

            {category === "team" && <LocationDropdown />}

            {category === "team" && table === "completed" && <ResultDropdown />}

            <div className="hero-nav-container">
              {table === "completed" && <OvertimeDropdown />}

              {category === "conference" || <RivalDropdown />}

              <SortDropdown />
            </div>

          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeroNav;