import React from "react";
import { StandingsHero } from "../components/Hero";
import StandingsTable from "../components/StandingsTable/StandingsTable";
import NavBar from "../components/NavBar";


const Standings = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} category={false} />
      <StandingsHero {...props} />
      <StandingsTable {...props} />
    </React.Fragment>
  );
}

export default Standings;