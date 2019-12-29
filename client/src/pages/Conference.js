import React, { useState } from "react";
import { ConferenceHero } from "../components/Hero";
import ConferenceScoreBoard from "../components/ScoreBoard/ConferenceScoreBoard";
import NavBar from "../components/NavBar";


const Conference = (props) => { 

  return (
    <React.Fragment>
      <NavBar />
      <ConferenceHero {...props} />
      <ConferenceScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Conference;