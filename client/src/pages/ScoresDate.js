import React, { Fragment, useState } from "react";
import Hero from "../components/Hero";
import ScoreBoardDynamic from "../components/ScoreBoardDynamic";
import moment from "moment";

const ScoresDate = (props) => { 

  const [date, setDate] = useState(moment().subtract(1, "days").format("YYYYMMDD"));

  return (
    <Fragment>
      <Hero date={date} />
      <ScoreBoardDynamic {...props} date={date} />
    </Fragment>
  );
}

export default ScoresDate;