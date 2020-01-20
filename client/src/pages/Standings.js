import React from "react";
import { StandingsHero } from "../components/Hero";
import StandingsTable from "../components/StandingsTable/StandingsTable";
import NavBar from "../components/NavBar";
import WildcardTable from "../components/StandingsTable/WildcardTable";


const Standings = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} category={false} />
      <StandingsHero {...props} />
      { props.match.params.order !== "wildcard" ? 
        <StandingsTable {...props} /> 
        :
        <WildcardTable {...props} />
      }
    </React.Fragment>
  );
}

export default Standings;