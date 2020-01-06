import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TeamSelect } from "./TeamSelect";
import { DivisionSelect } from "./DivisionSelect";
import { ConferenceSelect } from "./ConferenceSelect";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Button as MaterialBtn } from "@material-ui/core";

const NewSettingsForm = (props) => {

    const [category, setCategory] = useState("Team");
    const [identifier, setIdentifier] = useState("bruins");
    const [frequency, setFrequency] = useState();
    const [completedTable, setCompleted] = useState(false);
    const [futureTable, setFuture] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [entrySuccess, setEntrySuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if (!parseInt(frequency) || frequency < 1 || frequency > 30) {
            setErrorMessage("Please enter a valid email frequency");
        } else if (!completedTable && !futureTable) {
            setErrorMessage("Please check a game type");
        } else if (errorMessage === "Please change something to add another") {
            setErrorMessage("Please change something to add another");
        } else {
            const data = { 
                category: category.toLowerCase(),
                identifier,
                frequency: parseInt(frequency), 
                completedTable, 
                futureTable 
            }
    
            API.addEmail(data, props.match.params.email || props.userEmail)
                .then(() => {
                    setEntrySuccess(true);
                    setErrorMessage("");
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    const handleCategoryChange = e => {
        setCategory(e.target.value);
        setErrorMessage("");
        setEntrySuccess();

        switch (e.target.value) {
            case "Team":
                setIdentifier("bruins");
                break;
            case "Division":
                setIdentifier("Atlantic");
                break;
            default:
                setIdentifier("Eastern");
                break;
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setEntrySuccess(false);
        setErrorMessage("Please change something to add another");
    }

    const identifierChange = (value) => {
        setIdentifier(value);
        setErrorMessage("");
        setEntrySuccess();
    } 

    const frequencyChange = (e) => {
        const value = e.target.value;
        setFrequency(value)
        setEntrySuccess();

        if (parseInt(value) && value > 0 && value < 31) {
            setErrorMessage("");
        }
    }

    const futureChange = (e) => {
        setFuture(!futureTable);
        setErrorMessage("");
        setEntrySuccess();
    }

    const completedChange = (e) => {
        setCompleted(!completedTable);
        setErrorMessage("");
        setEntrySuccess();
    }

    return (
        <Form className="my-4" style={{ width: "50vw", margin: "auto"}}>
            <FormGroup>
                {/* <Label for="categorySelect">Category</Label> */}
                <Input type="select" name="select" id="categorySelect" onChange={handleCategoryChange} >
                    <option>Team</option>
                    <option>Division</option>
                    <option>Conference</option>
                </Input>
            </FormGroup>
            <FormGroup>
                { category === "Team" && <TeamSelect identifierChange={identifierChange} /> }
                { category === "Division" && <DivisionSelect identifierChange={identifierChange} /> }
                { category === "Conference" && <ConferenceSelect identifierChange={identifierChange} /> }
            </FormGroup>
            <FormGroup>
                <Label for="frequency">How often do you want to be updated?</Label>
                <Input type="number" min="1" max="30" step="1" name="select" id="frequency" placeholder="every # days" onChange={frequencyChange} />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={completedChange} />{' '}
                    Completed Games
                </Label>
            </FormGroup>
            <FormGroup check className="mt-2">
                <Label check>
                    <Input type="checkbox" onChange={futureChange} />{' '}
                    Future Games
                </Label>
            </FormGroup>
            {!entrySuccess ? 
                <MaterialBtn className="my-3 border border-secondary bg-secondary text-white" onClick={handleSubmit}>Add</MaterialBtn>
                :
                <Link to={`/member/dashboard/${props.match.params.email || props.userEmail}`}>
                    <MaterialBtn className="my-3 border border-success bg-success text-white" onClick={handleSubmit}>Add</MaterialBtn>
                </Link>
            }
            <Link to={`/`}>
                <MaterialBtn color="primary" style={{ float: "right" }} className="my-3 border">
                    Home
                </MaterialBtn>
            </Link>
            {/* <Link to={`/member/dashboard/${props.match.params.email || props.userEmail}`}>
                <MaterialBtn color="primary" style={{ float: "right" }} className="my-3 mx-4 border">
                    Notifications
                </MaterialBtn>
            </Link> */}
            <FormGroup>
                <FormText>
                    {entrySuccess ? "Custom email added to your account." : "" }  
                    {errorMessage ? errorMessage : "" }  
                </FormText>
            </FormGroup>
            {/* <Button>View Dashboard</Button> */}
        </Form>
    );
}

export default NewSettingsForm;


// TODO: change success message