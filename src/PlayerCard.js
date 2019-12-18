import React, { useState } from "react"

const PlayerCard = (props) => {
    const [ playerName, setPlayerName ] = useState("")
    const [ contentEditable, setContentEditable ] = useState(true)

    return (
        <div className="playerCard">
            <h4>Player {props.id}</h4>
            <h2>{props.name}</h2>
            <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} disabled={!contentEditable} placeholder="Enter player name"></input>
            <p><button onClick={() => setContentEditable(!contentEditable)}>{contentEditable === true ? "Submit" : "Edit"}</button></p>
        </div>
    )
}

export default PlayerCard