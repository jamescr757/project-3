import React from "react";
import NavBar from "../components/NavBar";
import SignInForm from "../components/Form/SignInForm";
import { ParamsContext } from "../utils/ParamsContext";


const Member = (props) => { 

  return (
    <ParamsContext.Provider value={props.match.params}>
      <NavBar />
      <SignInForm />
    </ParamsContext.Provider>
  );
}

export default Member;