import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import { Link } from '@reach/router';
import axios from 'axios';

const People = props => {
    const {id} = props;
    const  [result, setResult] = useState([]);
    const  [home, setHome] = useState({ name: "loading data from a galaxy far far away... " });

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id + '/')
        .then(response => {setResult(response.data)})
        .catch(() => navigate('/error'));
    }, [id]);

    useEffect(() => {
        axios.get(result.homeworld)
        .then(response => {setHome(response.data)})
        .catch(console.log);
    }, [id, result]);
    
    return(

        <div className="container">
                <h1 className="fw-bolder">{result.name}</h1>
                <p className="mt-3"><span className="fw-bold">Gender: </span>{result.gender}</p>
                <p><span className="fw-bold">Birth Year: </span>{result.birth_year}</p>
                <p><span className="fw-bold">Height: </span>{result.height} cm</p>
                <p><span className="fw-bold">Mass: </span>{result.mass} kg</p>
                <p><span className="fw-bold">Hair Color: </span>{result.hair_color}</p>
                <p><span className="fw-bold">Skin Color: </span>{result.skin_color}</p>
                <p><span className="fw-bold">Home World: </span>{home.name}</p>
                <Link to = "/">Clear</Link>
                </div>
    );

}

export default People;