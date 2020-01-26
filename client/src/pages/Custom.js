import React from "react";
import { CustomHero } from "../components/Hero";
import CustomScoreBoard from "../components/ScoreBoard/CustomScoreBoard";
import NavBar from "../components/NavBar";
import { ParamsContext } from "../utils/ParamsContext";


const Custom = (props) => { 

  return (
    <ParamsContext.Provider value={props.match.params}>
      <NavBar category={false} />
      <CustomHero />
      <CustomScoreBoard />
    </ParamsContext.Provider >
  );
}

export default Custom;