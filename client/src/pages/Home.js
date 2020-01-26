import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { DateHero } from "../components/Hero";
import ScoreBoard from "../components/ScoreBoard";
import moment from "moment";
import { ParamsContext } from "../utils/ParamsContext";


const Home = (props) => { 

  const [date, setDate] = useState(moment().utcOffset(-7).subtract(1, "days").format("YYYYMMDD"));
  const [noData, setNoData] = useState(false);

  const handleBackClick = () => {
    const newDate = moment(date).subtract(1, "days").format("YYYYMMDD");
    setDate(newDate);
    setNoData(false);
  }

  const handleForwardClick = () => {
    const newDate = moment(date).add(1, "days").format("YYYYMMDD");
    setDate(newDate);
    setNoData(false);
  }

  const handleChange = date => {
    setDate(moment(date).format("YYYYMMDD"));
  };

  return (
    <ParamsContext.Provider value={props.match.params}>
      <NavBar category={false} />
      <DateHero 
        date={moment(date).format("MM/DD/YYYY")} 
        dateDay={moment(date).format("ddd")} 
        onBackClick={handleBackClick} 
        onForwardClick={handleForwardClick} 
        handleChange={handleChange}
      />
      <ScoreBoard 
        date={date} 
        displayDate={moment(date).format("dddd, MMMM Do")}
        noData={noData}
        setNoData={setNoData}
      />
    </ParamsContext.Provider >
  );
}

export default Home;