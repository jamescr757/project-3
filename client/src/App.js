import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Multiple from "./pages/Multiple";
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
            <Route exact path="/multiple/team/:team" component={Multiple} />
          </Switch>
        </Router>

        <Footer />
    </Fragment>
  );
}

export default App;