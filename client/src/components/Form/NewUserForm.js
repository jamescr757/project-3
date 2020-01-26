import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";
import { NewUserHero } from "../Hero/NewUserHero";
import { Grid } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import "./Form.css"

const styles = {
    emailImage: {
        height: 300,
        width: "auto"
    }
}

const NewUserForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        API.newUser(email, password)
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
                    window.location.href = `/member/new/${email}`;
                    sessionStorage.setItem("userEmail", email);
                }
            })
            .catch((err) => {
                setErrorMessage("There's been an error. Please try again");
                setEmailSuccess(false)
                console.log(err.message);
            })
    };

    const checkAndSetPassword = (text) => {
        setPassword(text.substring(0, 20));

        if (!emailSuccess) {
            setErrorMessage("Please enter a valid email");
        } 

        if (text.length > 5) {
            setPasswordSuccess(true);
        } else {
            setPasswordSuccess(false);
        }
    }

    const checkAndSetEmail = (text) => {
        setEmail(text);
        setEmailSuccess(false);

        if (text.match(/.+@.+\....+/)) {
            setEmailSuccess(true);
            setErrorMessage();
        } 
    }

    const handleClick = () => {
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
        } else {
            setErrorMessage("Please enter a valid email")
        }
    }

    return (
        <React.Fragment>
            <NewUserHero />
            
                <Form className="mt-4 mb-4" style={{ width: "25vw", minWidth: 285, margin: "auto" }}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="" onChange={e => checkAndSetEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="password-input-group">
                        <Label for="password">Password</Label>
                        <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="must be at least 6 characters" onChange={e => checkAndSetPassword(e.target.value)} />
                        { showPassword ? 
                            <VisibilityOffIcon className="password-icon" fontSize="large" onClick={()=>setShowPassword(false)} />
                            :
                            <VisibilityIcon className="password-icon" fontSize="large" onClick={()=>setShowPassword(true)} />
                        }
                        
                    </FormGroup>

                    {passwordSuccess && emailSuccess ?
                        <Button color="success mb-3" onClick={handleSubmit}>Register</Button>
                        :
                        <Button onClick={handleClick} className="mb-3">Register</Button>
                    }
                    { errorMessage && 
                        <FormGroup>
                            <FormText color="muted" style={{ fontSize: 16 }}>
                                {errorMessage} 
                            </FormText>
                        </FormGroup>
                    }
                </Form>
                <Grid container justify="center" style={{ minHeight: 300 }}>
                <Grid item>
                    <img 
                        className="mb-5 mx-3 border"
                        style={ styles.emailImage }
                        src={`${process.env.PUBLIC_URL}/images/completed-email.png`}
                        alt="sample email screenshot"
                    />
                </Grid>
                <Grid item>
                    <img 
                        className="mb-5 mx-3 border"
                        style={ styles.emailImage }
                        src={`${process.env.PUBLIC_URL}/images/future-email.png`}
                        alt="sample email screenshot"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default NewUserForm;