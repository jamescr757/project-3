import React, { useState } from "react";
import { TeamHero } from "../components/Hero";
import TeamScoreBoard from "../components/ScoreBoard/TeamScoreBoard";
import NavBar from "../components/NavBar";


const Team = (props) => { 

  return (
    <React.Fragment>
      <NavBar />
      <TeamHero {...props} />
      <TeamScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Team;