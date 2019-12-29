import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({

    radioRow: {
        marginTop: 16
    }

}));

export default function DayRadio(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(3);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Grid className={classes.radioRow} container spacing={2} justify="center">
        <FormControl component="fieldset">
        {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
                <FormControlLabel
                value={1}
                control=
                {<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/1`}>
                    <Radio color="primary" />
                </Link>}
                label="1 day"
                labelPlacement="end"
                />
                <FormControlLabel
                value="3 days"
                control=
                {<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/3`}>
                    <Radio color="primary" />
                </Link>}
                label="3 days"
                labelPlacement="end"
                />
                <FormControlLabel
                value="7 days"
                control=
                {<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/7`}>
                    <Radio color="primary" />
                </Link>}
                label="7 days"
                labelPlacement="end"
                />
                <FormControlLabel
                value={10}
                control=
                {<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/10`}>
                    <Radio color="primary" />
                </Link>}
                label="10 days"
                labelPlacement="end"
                />
                <FormControlLabel
                value="2 weeks"
                control=
                {<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/14`}>
                    <Radio color="primary" />
                </Link>}
                label="2 weeks"
                labelPlacement="end"
                />
                <FormControlLabel
                value="1 month"
                control={<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/30`}>
                <Radio color="primary" />
            </Link>}
                label="1 month"
                labelPlacement="end"
                />
                <FormControlLabel
                value="All"
                control=
                {<Link to={`/multiple/${props.category}/${props.table}/${props.identifier}/300`}>
                    <Radio color="primary" />
                </Link>}
                label="All"
                labelPlacement="end"
                />
            </RadioGroup>
        </FormControl>
    </Grid>
  );
}