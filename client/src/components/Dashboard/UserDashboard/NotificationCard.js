import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "reactstrap";


export const NotificationCard = ({ email, handleDelete }) => {

    return (
        <Grid 
            item 
            key={index} 
            xs={12}
            sm={12}
            md={6}
        >
            <Card className={classes.card}>
                <Grid container direction="column">
                    <CardContent 
                        className={classes.cardContent + " pb-0 px-2"}
                    >
                        <Grid item xs={12} >
                            <CardTitle category={email.category} identifier={email.identifier} />
                            <List className="pb-0">
                                <EmailFreq 
                                    email={email} 
                                    index={index} 
                                    editClick={handleEditClick} 
                                />
                                <NextEmail 
                                    email={email} 
                                    index={index} 
                                    editClick={handleEditClick} 
                                />
                                <GamesCircleCheck
                                    email={email}
                                    iconSwitch={email.completedTable}
                                    table="completed"
                                    text="Completed Games"
                                    editClick={handleEditClick}
                                />
                                <GamesCircleCheck
                                    email={email}
                                    iconSwitch={email.futureTable}
                                    table="future"
                                    text="Future Games"
                                    editClick={handleEditClick}
                                />
                            </List>
                        </Grid>
                    </CardContent>
                </Grid>
                <DeleteNotification 
                    email={email} 
                    handleDelete={handleDelete}
                />
            </Card>
        </Grid>
    );
}