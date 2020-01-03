import React from "react";
import GameFinal from "./GameFinal";
import GameDate from "./GameDate";


const CardTitle = ({ date, overtime, winner, momentDate, table }) => {

    if (!date && winner) {
        return <GameFinal overtime={overtime} />
    }
    else if (date && table === "future") {
        return <GameDate>{momentDate}</GameDate>
    }
    else if (!date && !winner) {
        return null;
    }
    else if (!overtime) {
        return <GameDate>{momentDate} - Final</GameDate>
    }
    else {
        return <GameDate>{momentDate} - Final/OT</GameDate>
    }
}

export default CardTitle;