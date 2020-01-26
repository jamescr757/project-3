import React from "react";
import { StandingsHero } from "../components/Hero";
import NavBar from "../components/NavBar";
import WildcardTable from "../components/StandingsTable/WildcardTable";
import DivisionTable from "../components/StandingsTable/DivisionTable";
import ConferenceTable from "../components/StandingsTable/ConferenceTable";
import LeagueTable from "../components/StandingsTable/LeagueTable";
import PlayoffTable from "../components/StandingsTable/PlayoffTable";
import { ParamsContext } from "../utils/ParamsContext";


const Standings = (props) => { 

  const { order } = props.match.params;

  return (
    <ParamsContext.Provider value={props.match.params}>
      <NavBar category={false} />
      <StandingsHero />

      {order === "league" && <LeagueTable />}
      {order === "conference" && <ConferenceTable />}
      {order === "division" && <DivisionTable />}
      {order === "wildcard" && <WildcardTable />}
      {order === "playoffs" && <PlayoffTable />}
    </ParamsContext.Provider>
  );
}

export default Standings;