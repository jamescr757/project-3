import React, { useState, useEffect } from "react";
import { HighlightHero } from "../components/Hero";
import HighlightVideo from "../components/ScoreBoard/HighlightVideo";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import moment from "moment";


const Highlight = (props) => { 

    const [gameHighlight, setGameHighlight] = useState();
    const [highlightDescription, setHighlightDescription] = useState();
    const [date, setDate] = useState();

    const stripHighlightTitle = (title) => {
      const arr = title.split(" ");
      const date = arr[arr.length - 1];
      setDate(moment(date).format("dddd M/D"))
    }

    const stripHighlightDescription = (description) => {
      const arr = description.split(" ");
      const teams = arr.splice(4, 7).join(" ").replace(/\./, "");
      setHighlightDescription(teams)
    }

    useEffect(() => {
        API.getHighlight(props.match.params.teams, props.match.params.date, props.match.params.type)
            .then((res) => {
                setGameHighlight(res.data[0].id.videoId)
                stripHighlightTitle(res.data[0].snippet.title)
                stripHighlightDescription(res.data[0].snippet.description)
            })
            .catch(error => console.log(error));
    }, [])

    return (
      <React.Fragment>
        <NavBar {...props} />
        <HighlightHero date={date} description={highlightDescription} />
        <HighlightVideo gameHighlight={gameHighlight} />
      </React.Fragment>
    );
}

export default Highlight;