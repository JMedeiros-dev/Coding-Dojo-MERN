import React, { useState } from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';


export default () => {
    const [errors, setErrors] = useState({});
    const [myForm, SetMyForm] = useState({});
    const [isEnabled, setIsEnabled] = useState(false);

    const onChangeHandler = e => {
        if(e.target.value.length < 2) {
            setIsEnabled(false);
        } else {
            SetMyForm({...myForm, [e.target.name]: e.target.value})
            setIsEnabled(true);
        }
        console.log(myForm);
    }
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/new', myForm)
            .then(res=> {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);

                } else {
                    (navigate('/players/list'))
                }
            })
    }


    
    return (
        <div className="container">
            <form className="boxBorder p-4" onSubmit={onSubmitHandler} >
            
            <div className="form-group">
            <label htmlFor="name" className="form-label">Player Name<sup>*</sup></label>
            <input type="text" className="form-control" name="name" onChange={onChangeHandler} />
                {
                    errors.name ? <span className="text-danger">{errors.name.message}</span> : ""
                }
            </div>
            
            <div className="form-group">
            <label htmlFor="preferredPosition" className="form-label mt-2">Preferred Position</label>
            <input type="text" className="form-control" name="preferredPosition" onChange={onChangeHandler} />
            </div>
            <button type="submit" disabled={!isEnabled} className="btn btn-success mt-3 ps-5 pe-5 ">Add</button>
            <p className="float-end">* required</p>
            </form>
        </div>
    )
}