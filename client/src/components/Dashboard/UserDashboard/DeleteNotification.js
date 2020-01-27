import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "reactstrap";


export const DeleteNotification = ({ email, handleDelete }) => {

    return (
        <Grid 
          container 
          justify="flex-end"
        >
            <Button 
              color="danger" 
              className="m-3" 
              onClick={()=>handleDelete(email.id)}
            >
                Delete
            </Button>
        </Grid>
    );
}