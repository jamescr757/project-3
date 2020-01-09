import React, { useState, useEffect } from "react";
import { HighlightHero } from "../components/Hero";
import HighlightVideo from "../components/ScoreBoard/HighlightVideo";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import moment from "moment";
import teamInfo from "../utils/teamInfo";


const Highlight = (props) => { 

    const [gameHighlight, setGameHighlight] = useState();
    const [highlightDescription, setHighlightDescription] = useState();
    const [date, setDate] = useState();

    const stripTeamsParam = (teams) => {
      const vsIndex = teams.indexOf("v", 3);
      const awayTeam = teams.slice(0, vsIndex - 1);
      const homeTeam = teams.slice(vsIndex + 3);
      const awayTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDePlus(awayTeam));
      const homeTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDePlus(homeTeam));
      setHighlightDescription(`${awayTeamFullName} vs. ${homeTeamFullName}`)
    }

    useEffect(() => {
        API.getHighlight(props.match.params.teams, props.match.params.date, props.match.params.type)
            .then((res) => {
                setGameHighlight(res.data[0].id.videoId)
                setDate(moment(props.match.params.date, "YYYYMMDD").format("dddd M/D"));
                stripTeamsParam(props.match.params.teams)
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