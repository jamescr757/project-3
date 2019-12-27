import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import ConferenceBtns from "./Filters/ConferenceBtns";
import DivisionBtns from "./Filters/DivisionBtns";
import TeamBtns from "./Filters/TeamBtns";
import "./Filters/Filters.css";

const useStyles = makeStyles(theme => ({
  
    heroFilters: {
        cursor: "default"
    },
    filterContainer: {
        marginBottom: 8
    }

}));

const HeroFilters = props => {
  const classes = useStyles();

  const [hideConference, setHideConference] = useState(1);
  const [hideDivision, setHideDivision] = useState(1);
  const [hideTeams, setHideTeams] = useState(1);

  const renderFilter = text => {
    switch (text) {
      case "conference":
        setHideConference(0);
        setHideDivision(1);
        setHideTeams(1);
        break;
      case "division":
        setHideDivision(0);
        setHideConference(1);
        setHideTeams(1);
        break;
      case "team":
        setHideTeams(0)
        setHideDivision(1);
        setHideConference(1);
        break;
      default: 
        setHideTeams(1)
        setHideDivision(1);
        setHideConference(1);
        break;
    }
  };

  return (
    <React.Fragment>
      <Grid className={classes.filterContainer} container spacing={2} justify="center">
        <Grid item>
          <Button
            onMouseOver={() => renderFilter("conference")}
            className={classes.heroFilters}
          >
            By Conference 
          </Button>
        </Grid>
        <Grid item>
          <Button
            onMouseOver={() => renderFilter("division")}
            className={classes.heroFilters}
          >
            By Division 
          </Button>
        </Grid>
        <Grid item>
          <Button
            onMouseOver={() => renderFilter("team")}
            className={classes.heroFilters}
          >
            By Team 
          </Button>
        </Grid>
      </Grid>
      {hideConference ? <div className="hide-div"></div> : <ConferenceBtns handleBtnClick={()=>renderFilter("")} />}
      {hideDivision ? <div className="hide-div"></div> : <DivisionBtns handleBtnClick={()=>renderFilter("")} />}
      {hideTeams ? <div className="hide-div"></div> : <TeamBtns handleBtnClick={()=>renderFilter("")} />}
    </React.Fragment>
  );
};

export default HeroFilters;
