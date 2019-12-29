import React, { useState } from "react";
import { DivisionHero } from "../components/Hero";
import DivisionScoreBoard from "../components/ScoreBoard/DivisionScoreBoard";
import NavBar from "../components/NavBar";


const Division = (props) => { 

  return (
    <React.Fragment>
      <NavBar />
      <DivisionHero {...props} />
      <DivisionScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Division;