import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SignInForm from "../components/Form/SignInForm";


const Member = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} />
      {/* <MemberHero 
        
      /> */}
      <SignInForm {...props} />
      
    </React.Fragment>
  );
}

export default Member;