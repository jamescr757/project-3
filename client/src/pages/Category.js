import React from "react";
import { CategoryHero } from "../components/Hero";
import CategoryScoreBoard from "../components/ScoreBoard/CategoryScoreBoard";
import NavBar from "../components/NavBar";
import { ParamsContext } from "../utils/ParamsContext";


const Category = (props) => { 

  return (
    <ParamsContext.Provider value={props.match.params}>
      <NavBar category={true} />
      <CategoryHero />
      <CategoryScoreBoard />
    </ParamsContext.Provider>
  );
}

export default Category;