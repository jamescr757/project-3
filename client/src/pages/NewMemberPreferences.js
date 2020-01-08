import React from "react";
import NavBar from "../components/NavBar";
import NewSettingsForm from "../components/Form/NewSettingsForm";
import { UserDashboard } from "../components/Dashboard/UserDashboard";
import { AccountDetails } from "../components/Dashboard/AccountDetails";


const NewMemberPreferences = (props) => { 

  return (
    <React.Fragment>
      <NavBar {...props} />
      
      { props.match.params.type === "new" && <NewSettingsForm {...props} /> }
      { props.match.params.type === "dashboard" && <UserDashboard {...props} /> }
      { props.match.params.type === "my-account" && <AccountDetails {...props} /> }
      { props.match.params.type === "update-email" && <AccountDetails {...props} /> }
      { props.match.params.type === "update-password" && <AccountDetails {...props} /> }
      
    </React.Fragment>
  );
}

export default NewMemberPreferences;