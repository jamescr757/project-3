import React, { useState, useEffect } from "react";
import { HighlightHero } from "../components/Hero";
import HighlightVideo from "../components/ScoreBoard/HighlightVideo";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import moment from "moment";
import teamInfo from "../utils/teamInfo";
import { ParamsContext } from "../utils/ParamsContext";


const Highlight = (props) => { 

    const { homeTeam, awayTeam, date } = props.match.params;

    const [gameHighlight5, setGameHighlight5] = useState();
    const [gameHighlight9, setGameHighlight9] = useState();
    const [highlightDescription, setHighlightDescription] = useState();
    const [heroDate, setHeroDate] = useState();

    useEffect(() => {
        API.getEmailHighlight(homeTeam, awayTeam, date, "5")
            .then((res) => {
                setGameHighlight5(res.data[0].id.videoId)
                setHeroDate(moment(date, "YYYYMMDD").format("dddd M/D"));
            })
            .catch(error => console.log(error));

        API.getEmailHighlight(homeTeam, awayTeam, date, "9")
            .then((res) => {
                setGameHighlight9(res.data[0].id.videoId)
            })
            .catch(error => console.log(error));

        const awayTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDehyphenator(awayTeam));
        const homeTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDehyphenator(homeTeam));
        setHighlightDescription(`${awayTeamFullName} vs. ${homeTeamFullName}`);

    }, [])

    return (
      <ParamsContext.Provider value={props.match.params}>
        <NavBar />
        <HighlightHero date={heroDate} description={highlightDescription} />
        <HighlightVideo 
          gameHighlight5={gameHighlight5} 
          gameHighlight9={gameHighlight9} 
        />
      </ParamsContext.Provider >
    );
}

export default Highlight;