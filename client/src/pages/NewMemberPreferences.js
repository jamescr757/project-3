import React from "react";
import NavBar from "../components/NavBar";
import NewSettingsForm from "../components/Form/NewSettingsForm";
import { UserDashboard } from "../components/Dashboard/UserDashboard";


const NewMemberPreferences = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} />
      
    { props.match.params.type === "new" && <NewSettingsForm {...props} /> }
    { props.match.params.type === "dashboard" && <UserDashboard {...props} /> }
      
    </React.Fragment>
  );
}

export default NewMemberPreferences;