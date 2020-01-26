import React, { useState, useContext } from "react";
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText
} from 'reactstrap';
import { TeamDropdown } from "./TeamDropdown";
import { DivisionDropdown } from "./DivisionDropdown";
import { ConferenceDropdown } from "./ConferenceDropdown";
import { Member } from "./Member";
import { NewMemberMessage } from "./NewMemberMessage";
import { Link } from "react-router-dom";
import { StandingsDropdown } from "./StandingsDropdown";
import { ParamsContext } from "../../utils/ParamsContext";

const NavBar = (props) => {

  const params = useContext(ParamsContext);
  
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

            <StandingsDropdown />

          </Nav>
          {!params.type && !params.email &&
            <Nav navbar style={{ marginRight: "1rem"}}>
              <Member revealMessage={revealMessage} hideMessage={hideMessage} />
              {showMessage && <NewMemberMessage />}
            </Nav>
          }
          {params.type === "scoreboard" &&
            <Nav navbar style={{ marginRight: "1rem"}}>
              <Member revealMessage={revealMessage} hideMessage={hideMessage} />
              {showMessage && <NewMemberMessage />}
            </Nav>
          }
          {params.type === "sign-in" && sessionStorage.getItem("userEmail") &&
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
          {params.type === "dashboard" &&
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