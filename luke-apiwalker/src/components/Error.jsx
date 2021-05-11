import React from 'react';
import { Link } from '@reach/router';

const Error = props => {
    return(
       <div className="container mt-4">
            <h1 className="text-center">Opps! These aren't the driods you are looking for..</h1>
        <div className="d-flex justify-content-center">
        <img className="mt-3" src="https://media4.giphy.com/media/147ZkGrVP2Hra0/giphy.gif" alt="Obi Wan"/>
        </div>
        <div className="d-flex justify-content-center mt-3">
        <Link to = "/">Back</Link>
        </div>
       </div>
    );
}

export default Error;