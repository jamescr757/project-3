import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ScoresDate from "./pages/ScoresDate";
import NavBar from "./components/NavBar";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Fragment>
        <CssBaseline />
        <NavBar />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/date/:scoresDate" component={ScoresDate} />
          </Switch>
        </Router>

        <Footer />
    </Fragment>
  );
}

export default App;

// TODO: get equal sized team logos


// componentDidMount() {
  //   API.getYesterdayScores()
  //     .then(res => {
  //       const highlights = [];
  //       res.data.forEach((game) => {
  //         API.getHighlightYesterday(`${game.awayTeam}+${game.homeTeam}`)
  //           .then((res) => {
  //               highlights.push(res.data[0].id.videoId);
  //               this.setState({ gameHighlights: highlights });
  //           })
  //           .catch(error => console.log(error.message))
  //       })
  //       this.setState({
  //         gameInfo: res.data
  //       })
  //     })
  //     .catch(error => console.log(error.message))
  // }

  // <iframe 
  //             style={{ margin: "1rem" }}
  //             key={index}
  //             width="392"
  //             height="220.5"
  //             src={`https://www.youtube.com/embed/${highlight}`}
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen="allowfullscreen" />