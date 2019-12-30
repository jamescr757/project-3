import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Multiple from "./pages/Multiple";
import Category from "./pages/Category";
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
            <Route exact path="/multiple/:category/:table/:identifier/:days/:location/:outcome/:rival/:ot" component={Category} />
          </Switch>
        </Router>

        <Footer />
    </Fragment>
  );
}

export default App;