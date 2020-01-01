import React from "react";
import { CategoryHero } from "../components/Hero";
import CategoryScoreBoard from "../components/ScoreBoard/CategoryScoreBoard";
import NavBar from "../components/NavBar";


const Category = (props) => { 

  return (
    <React.Fragment>
      <NavBar />
      <CategoryHero {...props} />
      <CategoryScoreBoard {...props} />
    </React.Fragment>
  );
}

export default Category;