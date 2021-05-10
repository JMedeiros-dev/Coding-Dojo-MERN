import React from 'react';

const Word = props => {
    return(
        isNaN(+props.input) === true  ? 
        <h1>The word is: {props.input}</h1> :
        <h1>The number is: {props.input} </h1>
    );
}

export default Word;