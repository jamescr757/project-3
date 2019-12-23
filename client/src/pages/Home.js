import React, { useState } from "react";
import Hero from "../components/Hero";
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

  return (
    <React.Fragment>
      <Hero 
        date={date} 
        onBackClick={handleBackClick} 
        onForwardClick={handleForwardClick} 
        />
      <ScoreBoard date={date} />
    </React.Fragment>
  );
}

export default Home;