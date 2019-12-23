import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";
import SubHeading from "./SubHeading";
import HeroButtons from "./HeroButtons";

const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    }

  }));

const Hero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Title />
                <SubHeading />
                <HeroButtons {...props}/>
            </Container>
        </div>
    );
}

export default Hero;