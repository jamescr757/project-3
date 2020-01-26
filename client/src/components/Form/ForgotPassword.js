import React, { useState } from "react";
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import { Grid, Container } from "@material-ui/core";
import API from "../../utils/API";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ForgotPassHero } from "./ForgotPassHero";
import "./Form.css";


export const ForgotPassword = (props) => {

    const [newPassword, setNewPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const setNewPasswordFxn = (text) => {
        setErrorMessage();
        setNewPassword(text);

        if (text.length > 5 && text === passwordConfirm) {
            setPasswordSuccess(true);
            setErrorMessage();
        } 
    }

    const checkAndSetPassword = (text) => {
        setPasswordConfirm(text);

        if (text.length > 5 && text === newPassword) {
            setPasswordSuccess(true);
            setErrorMessage();
        } 
    }

    const handleSave = (userEmail) => {

        if (newPassword.length > 5 && passwordConfirm === newPassword) {

            API.updateUserPassword(userEmail, newPassword)
                .then((res) => {
                    if (res.data === "error") {
                        setErrorMessage("There's something wrong with the password you entered")
                        setPasswordSuccess(false)
                    } else {
                        setErrorMessage("Success!");
                        sessionStorage.setItem("userEmail", userEmail);
                        window.location.href = `/member/dashboard/${userEmail}`;
                    }
                })
                .catch((err) => {
                    setErrorMessage("There's been an error. Please try again");
                    setPasswordSuccess(false)
                    console.log(err.message);
                })
        } else {
            if (newPassword.length < 6) setErrorMessage("Password must be at least 6 characters");

            else if (passwordConfirm !== newPassword) setErrorMessage("Confirmation password must match")
        }
    }

    const handleClick = () => {
        if (newPassword.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
        } else if (newPassword !== passwordConfirm) {
            setErrorMessage("Confirmation password does not match")
        }
    }

    return (
        <React.Fragment>
        <ForgotPassHero />
        <Container style={{ minHeight: 600 }}>
                <Form className="my-3" style={{ width: "25vw", minWidth: 285, margin: "auto"}}>
                <FormGroup className="password-input-group">
                    <Input type={showConfirmPassword ? "text" : "password"} name="password" id="password" placeholder="new password" onChange={e => setNewPasswordFxn(e.target.value)} />
                    { showConfirmPassword ? 
                        <VisibilityOffIcon className="password-icon" fontSize="large" onClick={()=>setShowConfirmPassword(false)} />
                        :
                        <VisibilityIcon className="password-icon" fontSize="large" onClick={()=>setShowConfirmPassword(true)} />
                    }
                </FormGroup>
                <FormGroup className="password-input-group">
                    <Input type={showConfirmPassword ? "text" : "password"} name="password" id="password" placeholder="confirm new password" onChange={e => checkAndSetPassword(e.target.value)} />
                </FormGroup>
                <Grid container justify="flex-end">
                    { passwordSuccess ? 
                        <Button color="success" onClick={()=>handleSave(props.userEmail)}>
                            Update
                        </Button>
                        :
                        <Button color="secondary" onClick={handleClick}>
                            Update
                        </Button>
                    }
                    
                </Grid>
                
                <FormGroup>
                    <FormText color={errorMessage === "Success!" ? "success" : "muted"} className="mt-3 text-center" style={{ fontSize: 16 }}>
                        {errorMessage ? errorMessage : ""}
                    </FormText>
                </FormGroup>
            </Form>
        </Container>
        </React.Fragment>
    );
}