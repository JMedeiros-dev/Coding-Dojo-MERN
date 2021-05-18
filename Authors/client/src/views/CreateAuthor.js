import React, { useState} from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default () => {
    const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => { (navigate('/')) })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });       
    }

    return(
        <>
        <Link to="/">Home</Link>
        <p className="colorPurple mt-2">Add a new author:</p>
        {errors.map((err, index) => {
            return <p className="text-danger" key={index}>{err}</p>}
        )} 
        <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName=""/>
        </>
    )
} 