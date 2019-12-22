import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ScoreBoard from "./components/ScoreBoard";
import Footer from "./components/Footer";
// import API from "./utils/API";
import { CssBaseline } from "@material-ui/core";


class App extends Component {

  // state = {
  //   gameInfo: [],
  //   gameHighlights: []
  // }

  // componentDidMount() {
  //   API.getYesterdayScores()
  //     .then(response => {
  //       this.setState({
  //         gameInfo: response.data
  //       })
  //     })
  //     .catch(error => {
  //       console.log("error in component did mount, get yesterday scores");
  //       console.log(error.message);
  //     })
  // }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <Hero />
        <ScoreBoard />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;


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