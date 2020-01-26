import React from "react";
import NavBar from "../components/NavBar";
import NewSettingsForm from "../components/Form/NewSettingsForm";
import { UserDashboard } from "../components/Dashboard/UserDashboard";
import { AccountDetails } from "../components/Dashboard/AccountDetails";
import { ForgotPassword } from "../components/Form/ForgotPassword";
import { ParamsContext } from "../utils/ParamsContext";


const MemberPreferences = (props) => { 

  const { type, email } = props.match.params;

  return (
    <ParamsContext.Provider value={props.match.params}>
      <NavBar />
      
      { type === "new" && <NewSettingsForm /> }
      { type === "dashboard" && <UserDashboard /> }
      { type === "my-account" && <AccountDetails /> }
      { type === "update-email" && <AccountDetails /> }
      { type === "update-password" && <AccountDetails /> }
      { type === "forgot-password" && <ForgotPassword userEmail={email} /> }
      
    </ParamsContext.Provider >
  );
}

export default MemberPreferences;