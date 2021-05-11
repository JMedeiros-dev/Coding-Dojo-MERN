import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import { Link } from '@reach/router';
import axios from 'axios';

const Starships = props => {
    const {id} = props;
    const  [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id + '/')
        .then(response => {setResult(response.data)})
        .catch(() => navigate('/error'));
    }, [id]);
    
    return(

        <div className="container">
                <h1 className="fw-bolder">{result.name}</h1>
                <p className="mt-3"><span className="fw-bold">Manufacturer: </span>{result.manufacturer}</p>
                <p><span className="fw-bold">Model: </span>{result.model}</p>
                <p><span className="fw-bold">Starship Class: </span>{result.starship_class}</p>
                <p><span className="fw-bold">Hyperdrive Rating: </span>{result.hyperdrive_rating}</p>
                <p><span className="fw-bold">Cargo Capacity: </span>{result.cargo_capacity} kg</p>
                <p><span className="fw-bold">Cost in Credits: </span> <img src="https://static.wikia.nocookie.net/starwars/images/3/3c/AurebeshSans-Serif_credit.png/revision/latest/scale-to-width-down/8?cb=20080415135725" alt=""/>{result.cost_in_credits}</p>
                <Link to = "/">Clear</Link>
                </div>
    );

}

export default Starships;