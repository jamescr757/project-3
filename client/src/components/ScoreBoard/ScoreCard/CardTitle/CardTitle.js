import React from "react";
import GameFinal from "./GameFinal";
import GameDate from "./GameDate";


const CardTitle = ({ date, overtime, winner, momentDate, gameTime, table }) => {

    if (!date && winner) {
        return <GameFinal overtime={overtime} />
    }
    else if (date && table === "future") {
        return <GameDate>{gameTime ? momentDate + " - " + gameTime : momentDate + " - TBA" }</GameDate>
    }
    else if (!date && !winner) {
        return <GameDate>{gameTime ? gameTime : "Time TBA"}</GameDate>;
    }
    else if (!overtime) {
        return <GameDate>{momentDate} - Final</GameDate>
    }
    else {
        return <GameDate>{momentDate} - Final/OT</GameDate>
    }
}

export default CardTitle;