import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { LoginHero } from "../Hero/LoginHero";
import { Container, Grid } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import "./Form.css"

const LoginForm = (props) => {

    const [email, setEmail] = useState("a");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState();
    const [showUserMessage, setShowUserMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const checkAndSetEmail = (text) => {
        setEmail(text);
        setEmailSuccess(false);
        setShowForgotPassword();

        if (text.match(/.+@.+\....+/)) {
            API.grabUserPassword(text)
            .then(res => {
                if (res.data === "error") {
                    setErrorMessage("There's something wrong with the email you entered")
                    setEmailSuccess(false)
                } else if (!res.data) {
                    setErrorMessage("That email is not in our system")
                    setEmailSuccess(false)
                } else {
                    setErrorMessage()
                    setEmailSuccess(true)
                    setShowUserMessage(true)
                    setPasswordMatch(res.data.password)
                }
            })
        } else {
            setErrorMessage()
            setEmailSuccess(false)
        }
    }

    const checkAndSetPassword = (text) => {
        setPassword(text);
        setShowUserMessage(false);
        setErrorMessage();
        setShowForgotPassword();

        if (!emailSuccess) {
            setErrorMessage("Please enter a valid email");
        } else if (text === passwordMatch) {
            setPasswordSuccess(true);
            setErrorMessage();
        } else {
            setPasswordSuccess(false);
        }
    }

    const handleClick = event => {
        event.preventDefault();
        setErrorMessage("Password is incorrect");
    }

    const sendEmail = () => {
        API.checkIfUserEmailExists(email)
            .then(res => {
                if (res.data === "email not in system") {
                    setErrorMessage("That email is not in our system");
                } else {
                    API.sendForgotPasswordEmail(email) 
                        .then(res => {
                            if (res.data === "error") {
                                setShowUserMessage()
                                setErrorMessage("There's been an error. Please try again")
                            } else {
                                setShowUserMessage()
                                setErrorMessage();
                                setShowForgotPassword(true);
                            }
                        })
                }
            })
    }

    return (
        <React.Fragment>
            <LoginHero />
            <Container style={{ minHeight: 600 }}>
                <Form className="my-5" style={{ width: "25vw", minWidth: 285, margin: "auto"}}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="" onChange={e => checkAndSetEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="password-input-group">
                        <Label for="password">Password</Label>
                        <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="" onChange={e => checkAndSetPassword(e.target.value)} />
                        { showPassword ? 
                            <VisibilityOffIcon className="password-icon" fontSize="large" onClick={()=>setShowPassword(false)} />
                            :
                            <VisibilityIcon className="password-icon" fontSize="large" onClick={()=>setShowPassword(true)} />
                        }
                    </FormGroup>
                    <Grid container>
                    {!passwordSuccess ?  
                        <Button color={password.length > 5 ? "success" : "secondary"} onClick={handleClick}>Login</Button>
                        :
                        <Link to={`/member/dashboard/${email}`}>
                            <Button color="success">Login</Button>
                        </Link>
                    }
                        <Link to="/member/sign-in" onClick={sendEmail} style={{ fontSize: 16, marginTop: 8 }} color="white" className="ml-3">Forgot Password?</Link>
                    </Grid>
                    <FormGroup>
                        <FormText color="muted mt-3" style={{ fontSize: 16 }}>
                            {errorMessage ? errorMessage : ""}
                            {showUserMessage ? "That email is in our system!" : "" }
                            {showForgotPassword ? "Forgot password link sent to your email" : "" }
                        </FormText>
                    </FormGroup>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default LoginForm;