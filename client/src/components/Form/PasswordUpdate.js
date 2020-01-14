import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Grid } from "@material-ui/core";
import API from "../../utils/API";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import "./Form.css"


export const PasswordUpdate = (props) => {

    const [newPassword, setNewPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [currentPasswordMatch, setCurrentPasswordMatch] = useState();
    const [currentPassword, setCurrentPassword] = useState();

    useEffect(() => {
        API.grabUserPassword(props.userEmail)
            .then(res => {
                if (res.data === "error") {
                    setErrorMessage("There's been an error. Please try again later")
                } else {
                    setErrorMessage()
                    setCurrentPasswordMatch(res.data.password)
                }
            })
    }, [])

    const setNewPasswordFxn = (text) => {
        setErrorMessage();
        setNewPassword(text);
    }

    const checkAndSetPassword = (text) => {
        setPasswordConfirm(text);

        if (text.length > 5 && text === newPassword) {
            setPasswordSuccess(true);
            setErrorMessage();
        } 
    }

    const checkCurrentPassword = (text) => {
        setErrorMessage();
        setCurrentPassword(text);
    }

    const handleSave = (userEmail) => {

        if (currentPassword !== currentPasswordMatch) {
            setErrorMessage("current password incorrect");
        } else {
            API.updateUserPassword(userEmail, newPassword)
                .then((res) => {
                    if (res.data === "error") {
                        setErrorMessage("There's something wrong with the password you entered")
                        setPasswordSuccess(false)
                    } else {
                        setErrorMessage("Success!")
                        window.location.href = `/member/dashboard/${userEmail}`;
                    }
                })
                .catch((err) => {
                    setErrorMessage("There's been an error. Please try again");
                    setPasswordSuccess(false)
                    console.log(err.message);
                })
        }
    }

    const handleClick = () => {
        if (currentPassword !== currentPasswordMatch) {
            setErrorMessage("Current password incorrect");
        } else if (newPassword.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
        } else if (newPassword !== passwordConfirm) {
            setErrorMessage("Confirmation password does not match")
        }
    }

    return (
        <Form className="my-3" style={{ width: "25vw", minWidth: 285, margin: "auto"}}>
            <FormGroup className="password-input-group">
                <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="current password" onChange={e => checkCurrentPassword(e.target.value)} />
                { showPassword ? 
                    <VisibilityOffIcon className="password-icon" fontSize="large" onClick={()=>setShowPassword(false)} />
                    :
                    <VisibilityIcon className="password-icon" fontSize="large" onClick={()=>setShowPassword(true)} />
                }
            </FormGroup>
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
                        Save
                    </Button>
                    :
                    <Button color="secondary" onClick={handleClick}>
                        Save
                    </Button>
                }
                
            </Grid>
            
            <FormGroup>
                <FormText color={errorMessage === "Success!" ? "success" : "muted"} className="mt-3 text-center" style={{ fontSize: 16 }}>
                    {errorMessage ? errorMessage : ""}
                </FormText>
            </FormGroup>
        </Form>
    );
}