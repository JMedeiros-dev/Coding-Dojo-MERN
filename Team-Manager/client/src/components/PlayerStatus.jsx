import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';


const PlayerStatus = props => {
    const { gameId, playerId} = props;
    const [player, setPlayer] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${playerId}`)
            .then(res => setPlayer(res.data))
    }, [player])
    
    const GameStatusHandler = playerStatus => {
        axios.put(`http://localhost:8000/api/players/${playerId}`, {...player, status: 
        {
            ...player.status,
            [`game${gameId}`]: playerStatus
        }
    })
        .then(res => {setPlayer(player})
        .catch(err => {console.log(err)})
    }
    
    return (
        <>
            <button onClick={ (e) => GameStatusHandler(1)} className="btn ps-5 pe-5 btn-light" style={{backgroundColor: player && player.status[`game${gameId}`] === 1 ? "#198754" : "#FFF"}}>Playing</button>
            <button onClick={(e) => GameStatusHandler(-1)} className="btn ps-5 pe-5 btn-light" style={{backgroundColor: player && player.status[`game${gameId}`] === -1 ? "#dc3545" : "#FFF"}}> Not Playing</button>
            <button onClick={(e) => GameStatusHandler(0)} className="btn ps-5 pe-5 btn-warning" style={{backgroundColor: player && player.status[`game${gameId}`] === 0 ? "#ffc107" : "#FFF"}}>Undecided</button>
                        
        </>
    )
}

export default PlayerStatus;
