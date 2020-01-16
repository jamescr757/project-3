import React from "react";
import { CustomHero } from "../components/Hero";
import CustomScoreBoard from "../components/ScoreBoard/CustomScoreBoard";
import NavBar from "../components/NavBar";


const Custom = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} category={false} />
      <CustomHero {...props} />
      <CustomScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Custom;