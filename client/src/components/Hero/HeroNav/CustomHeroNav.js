import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import { DurationDropdown } from "./DurationDropdown";
import { SortDropdown } from "./SortDropdown";
import "./HeroNav.css";

const CustomHeroNav = (props) => {
  
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

            <div className="hero-nav-container">
              <SortDropdown />
            </div>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomHeroNav;