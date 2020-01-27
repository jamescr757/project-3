import React, { useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { ParamsContext } from "../../utils/ParamsContext";
import API from "../../utils/API";


export const Unsubscribe = () => {

    const { email } = useContext(ParamsContext);

    useEffect(() => {

        API.deleteEmailData(email) 
            .then(() => {
                window.location.href = `/member/dashboard/${email}`
            })
            .catch(err => {
                console.log("There's been an error with unsubscribe link");
            })

    }, [])

    return (
        <div style={{ minHeight: "75vh", maxWidth: 700, margin: "auto" }}>
            <Typography variant="body1" className="mt-5">
                You will no longer receive emails. If this page does not redirect, please refresh the page or send an email directly to jamesriddle757@gmail.com to unsubscribe.
            </Typography>
        </div>
        
    );
}