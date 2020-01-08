import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Highlight from "./pages/Highlight";
import Category from "./pages/Category";
import Member from "./pages/Member";
import NewMemberPreferences from "./pages/NewMemberPreferences";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Fragment>
        <CssBaseline />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/highlight/:teams/date/:date" component={Highlight} />
            <Route exact path="/member/:type" component={Member} />
            {/* <Route exact path="/member/:email" component={MemberPreferences} /> */}
            <Route exact path="/member/:type/:email" component={NewMemberPreferences} />
            <Route exact path="/multiple/:category/:table/:identifier/:days/:location/:outcome/:rival/:ot/:sort" component={Category} />
            <Route component={Home} />
          </Switch>
        </Router>

        <Footer />
    </Fragment>
  );
}

export default App;

// TODO: change new member prefs to just member prefs