import React, { useState } from "react";
import { MultiHero } from "../components/Hero";
import MultiScoreBoard from "../components/ScoreBoard/MultiScoreBoard";
import NavBar from "../components/NavBar";


const Multiple = (props) => { 

  return (
    <React.Fragment>
      <NavBar />
      <MultiHero />
      <MultiScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Multiple;