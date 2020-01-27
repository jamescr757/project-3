import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import { UserDashboard } from "../Dashboard/UserDashboard/UserDashboard";
import { ParamsContext } from "../../utils/ParamsContext";

const SignInForm = () => {

    const params = useContext(ParamsContext);

    return (
        <React.Fragment>
            {sessionStorage.getItem("userEmail") && params.type === "sign-in" && <UserDashboard userEmail= {sessionStorage.getItem("userEmail")} />}

            {!sessionStorage.getItem("userEmail") && params.type === "sign-in" && <LoginForm />} 

            {params.type === "new" && <NewUserForm />}
        </React.Fragment>
    );
}

export default SignInForm;