import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import { Link } from '@reach/router';
import axios from 'axios';

const Species = props => {
    const {id} = props;
    const  [result, setResult] = useState([]);
    const  [home, setHome] = useState({ name: "n/a" });


    useEffect(() => {
        axios.get('https://swapi.dev/api/species/' + id + '/')
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
                <p className="mt-3"><span className="fw-bold">Classification: </span>{result.classification}</p>
                <p><span className="fw-bold">Designation: </span>{result.designation}</p>
                <p><span className="fw-bold">Average Height: </span>{result.average_height} cm</p>
                <p><span className="fw-bold">Average Lifespan: </span>{result.average_lifespan} kg</p>
                <p><span className="fw-bold">Language: </span>{result.language}</p>
                <p><span className="fw-bold">Home World: </span>{home.name}</p>
                <Link to = "/">Clear</Link>
                </div>
    );

}

export default Species;