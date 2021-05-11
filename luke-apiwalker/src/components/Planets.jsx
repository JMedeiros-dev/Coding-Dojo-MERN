import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import { Link } from '@reach/router';
import axios from 'axios';

const Planets = props => {
    const {id} = props;
    const  [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id + '/')
        .then(response => {setResult(response.data)})
        .catch(() => navigate('/error'));
    }, [id]);
    
    return(

        <div className="container">
                <h1 className="fw-bolder">{result.name}</h1>
                <p><span className="fw-bold">Diameter: </span>{result.diameter} km</p>
                <p><span className="fw-bold">Population: </span>{result.population}</p>
                <p><span className="fw-bold">Gravity: </span>{result.gravity}</p>
                <p className="mt-3"><span className="fw-bold">Climate: </span>{result.climate}</p>
                <p><span className="fw-bold">Terrain: </span>{result.terrain}</p>
                <p><span className="fw-bold">Rotation Period: </span>{result.rotation_period} hours</p>
                <Link to = "/">Clear</Link>
                </div>
    );

}

export default Planets;