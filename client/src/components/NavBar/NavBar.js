import React, { useState } from "react";
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { TeamDropdown } from "./TeamDropdown";
import { DivisionDropdown } from "./DivisionDropdown";
import { ConferenceDropdown } from "./ConferenceDropdown";
import { Member } from "./Member";
import { NewMemberMessage } from "./NewMemberMessage";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const revealMessage = () => setShowMessage(true);
  const hideMessage = () => setShowMessage(false);

  return (
      <Navbar color="light" light expand="md">
        <Link to="/"><span className="navbar-brand">NHL Scores</span></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <TeamDropdown />

            <DivisionDropdown />

            <ConferenceDropdown />

            {/* <Member /> */}
          </Nav>
          {/* <NavbarText>
            <Member />
          </NavbarText> */}
          {!props.match.params.type && !props.match.params.email &&
            <Nav navbar style={{ marginRight: "1rem"}}>
              <Member revealMessage={revealMessage} hideMessage={hideMessage} />
              {showMessage && <NewMemberMessage />}
            </Nav>
          }
          {props.match.params.type === "sign-in" && sessionStorage.getItem("userEmail") &&
            <Nav navbar style={{ marginRight: "1rem"}}>
              <Link
                  onClick={()=>sessionStorage.clear()}
                  to={`/`}
                  className="logout-nav-item"
              >
                <NavbarText className="logout-nav-item">
                  Logout
                </NavbarText>
              </Link>
            </Nav>
          }
          {props.match.params.type === "dashboard" &&
            <Nav navbar style={{ marginRight: "1rem"}}>
              <Link
                  onClick={()=>sessionStorage.clear()}
                  to={`/`}
                  className="logout-nav-item"
              >
                <NavbarText className="logout-nav-item">
                  Logout
                </NavbarText>
              </Link>
            </Nav>
          }
        </Collapse>
      </Navbar>
  );
}

export default NavBar;