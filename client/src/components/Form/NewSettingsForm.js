import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TeamSelect } from "./TeamSelect";
import { DivisionSelect } from "./DivisionSelect";
import { ConferenceSelect } from "./ConferenceSelect";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Button as MaterialBtn, Grid } from "@material-ui/core";

const NewSettingsForm = (props) => {

    const [category, setCategory] = useState("Team");
    const [identifier, setIdentifier] = useState("bruins");
    const [frequency, setFrequency] = useState();
    const [completedTable, setCompleted] = useState(false);
    const [futureTable, setFuture] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [entrySuccess, setEntrySuccess] = useState(false);
    const [dbSuccess, setDbSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        const data = { 
            category: category.toLowerCase(),
            identifier,
            frequency: parseInt(frequency), 
            completedTable, 
            futureTable 
        }

        API.addEmail(data, props.match.params.email || props.userEmail)
            .then(() => {
                setEntrySuccess(false);
                setErrorMessage("");
                setDbSuccess(true);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const checkForValidEntries = (value, table) => {

        if (!parseInt(frequency) || frequency < 1 || frequency > 30) {
            setEntrySuccess(false);
            setErrorMessage("Please enter a valid email frequency");
        } else if (!value && table === "completed" && !futureTable) {
            setEntrySuccess(false);
            setErrorMessage("Please check a game type");
        } else if (!value && table === "future" && !completedTable) {
            setEntrySuccess(false);
            setErrorMessage("Please check a game type");
        } else if (dbSuccess) {
            setErrorMessage("Please change something to add another");
            setDbSuccess(false);
        } else {
            setEntrySuccess(true);
            setErrorMessage();
        }
    }

    const handleCategoryChange = e => {
        setCategory(e.target.value);
        setErrorMessage("");
        setDbSuccess(false);

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
        checkForValidEntries();
    }

    const identifierChange = (value) => {
        setIdentifier(value);
        setErrorMessage("");
        setDbSuccess(false);
    } 

    const frequencyChange = (e) => {
        const value = e.target.value;
        setFrequency(value);
        setDbSuccess(false);

        if (parseInt(value) && value > 0 && value < 31) {
            setErrorMessage("");
        }
    }

    const futureChange = (e) => {
        setFuture(!futureTable);
        checkForValidEntries(!futureTable, "future");
        setDbSuccess(false);
    }
    
    const completedChange = (e) => {
        setCompleted(!completedTable);
        checkForValidEntries(!completedTable, "completed");
        setDbSuccess(false);
    }

    return (
        <Form className="my-4" style={{ width: "30vw", minWidth: 285, margin: "auto"}}>
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
            <Grid container justify="space-between">
                {!entrySuccess ? 
                    <MaterialBtn className="my-3 border border-secondary bg-secondary text-white" onClick={handleClick}>Add</MaterialBtn>
                    :
                    <MaterialBtn className="my-3 border border-success bg-success text-white" onClick={handleSubmit}>Add</MaterialBtn>
                }
                <Link to={`/member/dashboard/${props.match.params.email || props.userEmail}`}>
                    <MaterialBtn color="primary" className="my-3 border">
                        My Account
                    </MaterialBtn>
                </Link>
            </Grid>
            <FormGroup>
                <FormText>
                    {dbSuccess ? "Custom email added to your account." : "" }  
                    {errorMessage ? errorMessage : "" }  
                </FormText>
            </FormGroup>
            {/* <Button>View Dashboard</Button> */}
        </Form>
    );
}

export default NewSettingsForm;


// TODO: change success message