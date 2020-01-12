import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TeamSelect } from "./TeamSelect";
import { DivisionSelect } from "./DivisionSelect";
import { ConferenceSelect } from "./ConferenceSelect";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Button as MaterialBtn, Grid, Container } from "@material-ui/core";
import { NewSettingHero } from "../Hero/NewSettingHero";
import "../Hero/Filters/Button.css"

const NewSettingsForm = (props) => {

    const [category, setCategory] = useState("Team");
    const [identifier, setIdentifier] = useState("ducks");
    const [frequency, setFrequency] = useState();
    const [completedTable, setCompleted] = useState(false);
    const [futureTable, setFuture] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [entrySuccess, setEntrySuccess] = useState(false);
    const [dbSuccessMessage, setDbSuccessMessage] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        const data = { 
            category: category.toLowerCase(),
            identifier,
            frequency: parseInt(frequency), 
            completedTable, 
            futureTable 
        }

        if (dbSuccessMessage) {
            setDbSuccessMessage();
            setErrorMessage("Please change something to add another notification");
        } else {

            API.addEmail(data, props.match.params.email || props.userEmail)
            .then(() => {
                setEntrySuccess(false);
                setErrorMessage("");
                setDbSuccessMessage("Notification added to your account!");
            })
            .catch((err) => {
                console.log(err.message);
            });
        }
    }

    const checkForValidEntries = (value, table) => {

        if (!parseInt(frequency) || frequency < 1 || frequency > 30) {
            setEntrySuccess(false);
            setErrorMessage("Please enter a valid frequency");
        } else if (!value && table === "completed" && !futureTable) {
            setEntrySuccess(false);
            setErrorMessage("Please check a game type");
        } else if (!value && table === "future" && !completedTable) {
            setEntrySuccess(false);
            setErrorMessage("Please check a game type");
        } else {
            setEntrySuccess(true);
            setErrorMessage();
        }
    }

    const checkForValidEntriesAgain = (bool) => {

        if (!parseInt(frequency) || frequency < 1 || frequency > 30) {
            setEntrySuccess(false);
            if (bool) setErrorMessage("Please enter a valid frequency")
        } else if (!completedTable && !futureTable) {
            setEntrySuccess(false);
            if (bool) setErrorMessage("Please check a game type")
        } else {
            setEntrySuccess(true);
            setErrorMessage();
        }
    }

    const handleCategoryChange = e => {
        setCategory(e.target.value);
        setErrorMessage("");
        setDbSuccessMessage();

        switch (e.target.value) {
            case "Team":
                setIdentifier("ducks");
                break;
            case "Division":
                setIdentifier("Atlantic");
                break;
            default:
                setIdentifier("Eastern");
                break;
        }

        checkForValidEntriesAgain(false);
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        if (dbSuccessMessage) {
            setDbSuccessMessage();
            setErrorMessage("Please change something to add another notification");
        } else {
            checkForValidEntriesAgain(true);
        }
    }

    const identifierChange = (value) => {
        setIdentifier(value);
        setErrorMessage("");
        setDbSuccessMessage();
        checkForValidEntriesAgain(false);
    } 

    const frequencyChange = (e) => {
        const value = e.target.value;
        setFrequency(value);
        setDbSuccessMessage();

        if (parseInt(value) && value > 0 && value < 31) {
            setErrorMessage("");
            if (completedTable || futureTable) {
                setEntrySuccess(true);
            }
        } else if (value === "") {
            setErrorMessage("");
            setEntrySuccess(false);
        } else {
            setErrorMessage("Please enter a valid frequency");
        }
    }

    const futureChange = (e) => {
        setFuture(!futureTable);
        checkForValidEntries(!futureTable, "future");
        setDbSuccessMessage();
    }
    
    const completedChange = (e) => {
        setCompleted(!completedTable);
        checkForValidEntries(!completedTable, "completed");
        setDbSuccessMessage();
    }

    return (
        <React.Fragment>
            <NewSettingHero />
            <Container style={{ minHeight: "50vw" }}>
                <Form className="my-5" style={{ width: "30vw", minWidth: 285, margin: "auto"}}>
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
                            <MaterialBtn className="my-3 border border-secondary bg-secondary text-white new-settings-add-btn" onClick={handleClick}>Add</MaterialBtn>
                            :
                            <MaterialBtn className="my-3 border border-success bg-success text-white new-settings-add-btn" onClick={handleSubmit}>Add</MaterialBtn>
                        }
                        <Link to={`/member/dashboard/${props.match.params.email || props.userEmail}`} className="account-btn-link">
                            <MaterialBtn color="primary" className="my-3 border">
                                My Account
                            </MaterialBtn>
                        </Link>
                    </Grid>
                    <FormGroup>
                        <FormText color={dbSuccessMessage ? "success" : "secondary"} style={{ fontSize: 16, fontWeight: "bold" }}>
                            {dbSuccessMessage ? dbSuccessMessage : "" }  
                            {errorMessage ? errorMessage : "" }  
                        </FormText>
                    </FormGroup>
                    {/* <Button>View Dashboard</Button> */}
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default NewSettingsForm;