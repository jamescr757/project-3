import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";
import { Link } from "react-router-dom";

const NewUserForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [newPasswordSuccess, setNewPasswordSuccess] = useState(false);

    const handleSubmit = e => {
        API.newUser(email, password)
            .then((res) => {
                if (res.data === "error") {
                    setErrorMessage("There's been an error. Please try again");
                    setEmailSuccess(false)
                } 
            })
            .catch((err) => {
                setErrorMessage("There's been an error. Please try again");
                setEmailSuccess(false)
                console.log(err.message);
            })

        sessionStorage.setItem("userEmail", email);
    };

    const checkAndSetPassword = (text) => {
        setPassword(text);
        if (!emailSuccess) {
            setErrorMessage("Please enter a valid email");
        } else if (text.length > 5) {
            setNewPasswordSuccess(true);
            setErrorMessage("");
        } else {
            setNewPasswordSuccess(false);
        }
    }

    const checkAndSetEmail = (text) => {
        setEmail(text);
        setEmailSuccess(false);

        if (text.match(/.+@.+\....+/)) {
            API.checkUserEmail(text, "default")
            .then(res => {
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
                    setErrorMessage("");
                    setEmailSuccess(true)
                }
            })
        } 
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
            { errorMessage && 
                <FormGroup>
                    <FormText color="muted">
                        {errorMessage} 
                    </FormText>
                </FormGroup>
            }
            { emailSuccess && 
                <FormGroup>
                    <FormText color="muted">
                        Email input is good. Password must be at least 6 characters. 
                    </FormText>
                </FormGroup>
            }

            {!newPasswordSuccess && <Button>Register</Button>}

            {newPasswordSuccess &&
                <Link to={`/member/new/${email}`}>
                    <Button color="success" onClick={handleSubmit}>Register</Button>
                </Link>
            }
        </Form>
    );
}

export default NewUserForm;