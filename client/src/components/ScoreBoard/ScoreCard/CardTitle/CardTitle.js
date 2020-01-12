import React from "react";
import GameFinal from "./GameFinal";
import GameDate from "./GameDate";


const CardTitle = ({ date, overtime, winner, momentDate, gameTime, table }) => {

    if (!date && winner) {
        return <GameFinal overtime={overtime} />
    }
    else if (date && table === "future") {
        return <GameDate>{momentDate + " - " + gameTime}</GameDate>
    }
    else if (!date && !winner) {
        return <GameDate>{gameTime}</GameDate>;
    }
    else if (!overtime) {
        return <GameDate>{momentDate} - Final</GameDate>
    }
    else {
        return <GameDate>{momentDate} - Final/OT</GameDate>
    }
}

export default CardTitle;