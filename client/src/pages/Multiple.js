import React, { useState } from "react";
import { MultiHero } from "../components/Hero";
import MultiScoreBoard from "../components/ScoreBoard/MultiScoreBoard";
import NavBar from "../components/NavBar";
import moment from "moment";


const Multiple = (props) => { 

//   const [date, setDate] = useState(moment().subtract(1, "days").format("YYYYMMDD"));

  return (
    <React.Fragment>
      <NavBar />
      <MultiHero />
      <MultiScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Multiple;