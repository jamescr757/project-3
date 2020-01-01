import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { DateHero } from "../components/Hero";
import ScoreBoard from "../components/ScoreBoard";
import moment from "moment";


const Home = () => { 

  const [date, setDate] = useState(moment().subtract(1, "days").format("YYYYMMDD"));

  const handleBackClick = () => {
    const newDate = moment(date).subtract(1, "days").format("YYYYMMDD");
    setDate(newDate);
  }

  const handleForwardClick = () => {
    const newDate = moment(date).add(1, "days").format("YYYYMMDD");
    setDate(newDate);
  }

  const handleChange = date => {
    setDate(moment(date).format("YYYYMMDD"));
  };

  return (
    <React.Fragment>
      <NavBar />
      <DateHero 
        date={moment(date).format("MM/DD/YYYY")} 
        onBackClick={handleBackClick} 
        onForwardClick={handleForwardClick} 
        handleChange={handleChange}
      />
      <ScoreBoard 
        date={date} 
        displayDate={moment(date).format("dddd, MMMM Do")}
      />
    </React.Fragment>
  );
}

export default Home;