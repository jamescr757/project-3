import React from "react";
import { StandingsHero } from "../components/Hero";
import NavBar from "../components/NavBar";
import WildcardTable from "../components/StandingsTable/WildcardTable";
import DivisionTable from "../components/StandingsTable/DivisionTable";
import ConferenceTable from "../components/StandingsTable/ConferenceTable";
import LeagueTable from "../components/StandingsTable/LeagueTable";
import PlayoffTable from "../components/StandingsTable/PlayoffTable";


const Standings = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} category={false} />
      <StandingsHero {...props} />

      {props.match.params.order === "league" && <LeagueTable {...props} />}
      {props.match.params.order === "conference" && <ConferenceTable {...props} />}
      {props.match.params.order === "division" && <DivisionTable {...props} />}
      {props.match.params.order === "wildcard" && <WildcardTable {...props} />}
      {props.match.params.order === "playoffs" && <PlayoffTable {...props} />}
    </React.Fragment>
  );
}

export default Standings;