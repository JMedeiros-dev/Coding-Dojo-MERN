import React, { useState } from 'react';
import '../App.css';
import { Link } from '@reach/router';

export default props => {
    const{ initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName})
    }

    return(
        <div className="w-50">
            <form className="boxBorder p-4" onSubmit={onSubmitHandler}>
            <label for="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>

            <label for="lastName" className="form-label mt-2">Last Name</label>
            <input type="text" className="form-control" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>

            <div className="d-flex justify-content-between">
            <Link to={"/"} className="btn btn-dark mt-3 col-5">Cancel</Link><button type="submit" className="btn btn-dark mt-3 col-5">Submit</button>
            </div>
            </form>
        </div>

    )
}