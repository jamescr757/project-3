import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Grid } from "@material-ui/core";
import API from "../../utils/API";


export const EmailUpdate = (props) => {

    const [newEmail, setNewEmail] = useState(false);
    const [emailConfirm, setEmailConfirm] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const setNewEmailFxn = (text) => {
        setErrorMessage();
        setNewEmail(text);
    }

    const checkAndSetEmail = (text) => {
        setEmailConfirm(text);

        if (text.match(/.+@.+\....+/) && text === newEmail) {
            setEmailSuccess(true);
            setErrorMessage();
        } 
    }

    const handleSave = (userEmail) => {
        
        API.updateUserEmail(userEmail, newEmail)
            .then((res) => {
                if (res.data === "already in system") {
                    setErrorMessage("That email already exists")
                    setEmailSuccess(false)
                } else if (res.data === "not an email") {
                    setErrorMessage("Please enter a valid email")
                    setEmailSuccess(false)
                } else if (res.data === "error") {
                    setErrorMessage("There's something wrong with the email you entered")
                    setEmailSuccess(false)
                } else {
                    setErrorMessage("Success!")
                    sessionStorage.setItem("userEmail", newEmail);
                    window.location.href = `/member/my-account/${newEmail}`;
                }
            })
            .catch((err) => {
                setErrorMessage("There's been an error. Please try again");
                setEmailSuccess(false)
                console.log(err.message);
            })
    }

    const handleClick = () => {
        if (!newEmail.match(/.+@.+\....+/)) {
            setErrorMessage("Please enter a valid email");
        } else if (newEmail !== emailConfirm) {
            setErrorMessage("Confirmation email does not match")
        } else if (!emailConfirm.match(/.+@.+\....+/)) {
            setErrorMessage("Please enter a valid email");
        }
    }

    return (
        <Form className="my-3" style={{ width: "25vw", minWidth: 285, margin: "auto"}}>
            <FormGroup>
                <Input type="email" name="new-email" id="new-email" placeholder="new email" onChange={e => setNewEmailFxn(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input type="email" name="confirm-email" id="confirm-email" placeholder="confirm email" onChange={e => checkAndSetEmail(e.target.value)} />
            </FormGroup>
            <Grid container justify="flex-end">
                { emailSuccess ? 
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
                <FormText color="muted mt-3 text-center" style={{ fontSize: 16 }}>
                    {errorMessage ? errorMessage : ""}
                </FormText>
            </FormGroup>
        </Form>
    );
}