import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";
import { Link } from "react-router-dom";

const LoginForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState();
    const [showUserMessage, setShowUserMessage] = useState(false);

    const checkAndSetEmail = (text) => {
        setEmail(text);
        setEmailSuccess(false);

        if (text.match(/.+@.+\....+/)) {
            API.grabUserPassword(text)
            .then(res => {
                if (res.data === "error") {
                    setError(true)
                    setErrorMessage("There's something wrong with the email you entered")
                    setEmailSuccess(false)
                } else if (!res.data) {
                    setError(true)
                    setErrorMessage("That email is not in our system")
                    setEmailSuccess(false)
                } else {
                    setError(false)
                    setEmailSuccess(true)
                    setShowUserMessage(true)
                    setPasswordMatch(res.data.password)
                }
            })
        } else {
            setError(false)
            setEmailSuccess(false)
        }
    }

    const checkAndSetPassword = (text) => {
        setPassword(text);
        setShowUserMessage(false);
        setError(false);

        if (!emailSuccess) {
            setError(true)
            setErrorMessage("Please enter a valid email");
        } else if (text === passwordMatch) {
            setPasswordSuccess(true);
            setError(false);
        } else {
            setPasswordSuccess(false);
        }
    }

    const handleClick = event => {
        event.preventDefault();
        setError(true)
        setErrorMessage("Password is incorrect");
    }

    return (
        <Form className="my-4" style={{ width: "50vw", margin: "auto"}}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="" onChange={e => checkAndSetEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="" onChange={e => checkAndSetPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <FormText color="muted">
                    {error ? errorMessage : ""}
                    {showUserMessage ? "Thanks for being a member! Please enter your password." : "" }
                </FormText>
            </FormGroup>
            {!passwordSuccess ?  
                <Button color={password.length > 5 ? "success" : "secondary"} onClick={handleClick}>Login</Button>
                :
                <Link to={`/member/dashboard/${email}`}>
                    <Button color="success">Login</Button>
                </Link>
            }
        </Form>
    );
}

export default LoginForm;