import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    const catchThemAll = () => {
        return setClicked(true);
    }

    const Results = () => (
        <div className="container w-25">
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li className=" fs-4 mt-2 " key={index}>{pokemon.name}</li>)
            })}
        </div>
      )
    
    return(
    <>
        <div className="container d-flex justify-content-center w-50">
            
            <button className="btn btn-secondary mt-5 col-6" onClick={catchThemAll}>Fetch Pokemon</button>
        </div>
        { clicked ? <Results /> : null }
    </>
    );
}


export default Pokemon;