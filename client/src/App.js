import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
         <iframe className="trailerBox" 
                width = "392"
                height = "220.5"
                src = "https://www.youtube.com/embed/H6FJkgd-gv0"
                frameborder = "0"
                allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen = "allowfullscreen" />
      </div>
    );
  }
}

export default App;

// video id in res.items[0].id.videoId
// the following query gets nhl highlight videos
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=API_KEY&maxResults=1&q=NHL%20highlights%20islanders%20red+wings%2012/02/19