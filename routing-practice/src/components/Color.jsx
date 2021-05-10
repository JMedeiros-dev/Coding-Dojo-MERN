import React from 'react';

const Color = props => {

    const {input, color, bg} = props;

    return(
        <div style={{ backgroundColor: color }}>
        <h1 style={{color: bg}}>The word is: {input}</h1>
        </div>
    );
}

export default Color;