import React from 'react';
import { Link } from '@reach/router';

const AddList = () => {
    
    return (
        <div className="container">
            <div className="d-flex flex-row bd-highlight mb-3">
            <Link className="mt-2 me-2" to="/players/list"><h4>List</h4></Link> 
            <span className="divider pt-0 align-self-baseline"> | </span>
            <Link className="mt-2 ms-2" to="/players/addplayer"><h4>Add Player</h4></Link>
            </div>
        </div>
    )
}

export default AddList;