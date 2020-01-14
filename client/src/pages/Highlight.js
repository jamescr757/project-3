import React, { useState, useEffect } from "react";
import { HighlightHero } from "../components/Hero";
import HighlightVideo from "../components/ScoreBoard/HighlightVideo";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import moment from "moment";
import teamInfo from "../utils/teamInfo";


const Highlight = (props) => { 

    const [gameHighlight5, setGameHighlight5] = useState();
    const [gameHighlight9, setGameHighlight9] = useState();
    const [highlightDescription, setHighlightDescription] = useState();
    const [date, setDate] = useState();

    // const stripTeamsParam = (teams) => {
    //   const vsIndex = teams.indexOf("v", 3);
    //   const awayTeam = teams.slice(0, vsIndex - 1);
    //   const homeTeam = teams.slice(vsIndex + 3);
    //   const awayTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDePlus(awayTeam));
    //   const homeTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDePlus(homeTeam));
    //   setHighlightDescription(`${awayTeamFullName} vs. ${homeTeamFullName}`)
    // }

    useEffect(() => {
        API.getEmailHighlight(props.match.params.homeTeam, props.match.params.awayTeam, props.match.params.date, "5")
            .then((res) => {
                setGameHighlight5(res.data[0].id.videoId)
                setDate(moment(props.match.params.date, "YYYYMMDD").format("dddd M/D"));
            })
            .catch(error => console.log(error));

        API.getEmailHighlight(props.match.params.homeTeam, props.match.params.awayTeam, props.match.params.date, "9")
            .then((res) => {
                setGameHighlight9(res.data[0].id.videoId)
            })
            .catch(error => console.log(error));

        const awayTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDehyphenator(props.match.params.awayTeam));
        const homeTeamFullName = teamInfo.teamFullNameCaptilized(teamInfo.teamNameDehyphenator(props.match.params.homeTeam));
        setHighlightDescription(`${awayTeamFullName} vs. ${homeTeamFullName}`);

    }, [])

    return (
      <React.Fragment>
        <NavBar {...props} />
        <HighlightHero date={date} description={highlightDescription} />
        <HighlightVideo 
          gameHighlight5={gameHighlight5} 
          gameHighlight9={gameHighlight9} 
        />
      </React.Fragment>
    );
}

export default Highlight;