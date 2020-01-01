import React from "react";
import GameFinal from "./GameFinal";
import GameDate from "./GameDate";


const CardTitle = ({ date, overtime, winner, momentDate}) => {

    if (!date && winner) {
        return <GameFinal overtime={overtime} />
    }
    else if (!winner) {
        return <GameDate>{momentDate}</GameDate>
    }
    else if (!overtime) {
        return <GameDate>{momentDate} - Final</GameDate>
    }
    else {
        return <GameDate>{momentDate} - Final/OT</GameDate>
    }
}

export default CardTitle;