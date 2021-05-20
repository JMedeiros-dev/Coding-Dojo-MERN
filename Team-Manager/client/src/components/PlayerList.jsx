import React, { useState, useEffect } from 'react';
import axios from 'axios'

const PlayerList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
    }, [])
    
    
    const deletedPlayer = playerId => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
        .then(res=>{
            setPlayers(players.filter(player => player._id !== playerId));
        })
    }

    return (
        <div className="container">
            <table className="table table-secondary table-striped mt-2">
                    <thead>
                <tr>
                <th scope="col">Player Name</th>
                <th scope="col">Preferred Position</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) => {
                    return <tr>
                        <td>{player.name}</td>
                        <td>{player.preferredPosition}</td>
                        <td><button onClick={(e)=>{ if (window.confirm('Are you sure you want to delete ' + player.name + '?')) deletedPlayer(player._id)}} className="btn ps-5 pe-5 btn-danger">Delete</button></td>
                </tr>
                })}
            </tbody>
        </table>
        </div>
    )
}

export default PlayerList;