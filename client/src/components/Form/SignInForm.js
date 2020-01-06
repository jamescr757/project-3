import React from "react";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import NewSettingsForm from "./NewSettingsForm";
import { UserDashboard } from "../Dashboard/UserDashboard";

const SignInForm = (props) => {

    return (
        <React.Fragment>
            {sessionStorage.getItem("userEmail") && <UserDashboard userEmail= {sessionStorage.getItem("userEmail")} {...props} />}

            {!sessionStorage.getItem("userEmail") && props.match.params.type === "sign-in" && <LoginForm {...props} />} 

            {props.match.params.type === "new" && <NewUserForm {...props} />}
        </React.Fragment>
    );
}

export default SignInForm;