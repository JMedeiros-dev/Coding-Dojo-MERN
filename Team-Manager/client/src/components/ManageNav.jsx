import React from 'react';
import { Link } from '@reach/router';

const ManageNav = () => {
    
    return (
        <div className="container">
            <div className="d-flex flex-row bd-highlight mb-3">
            <Link className="mt-4 me-2" to="/players/list"><h5>Manage Players</h5></Link> 
            <span className="divider align-self-end"> | </span>
            <Link className="mt-4 ms-2" to="/status/game/1"><h5>Manage Player Status</h5></Link>
            </div>
        </div>
    )
}

export default ManageNav;