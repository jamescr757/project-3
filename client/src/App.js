import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Multiple from "./pages/Multiple";
import Division from "./pages/Division";
import Conference from "./pages/Conference";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Fragment>
        <CssBaseline />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/multiple" component={Multiple} />
            <Route exact path="/multiple/conference/:table/:conference" component={Conference} />
            <Route exact path="/multiple/division/:table/:division" component={Division} />
            <Route exact path="/multiple/team/:table/:team" component={Team} />
          </Switch>
        </Router>

        <Footer />
    </Fragment>
  );
}

export default App;


// TODO: integrate overtime db boolean into score card display