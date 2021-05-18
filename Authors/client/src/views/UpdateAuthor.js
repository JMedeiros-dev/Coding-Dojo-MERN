import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const { id } = props;
    const [errors, setErrors] = useState([]);
    const [author, setAuthor] =  useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id])


    const editAuthor = updatedAuthor => {
        axios.put('http://localhost:8000/api/authors/' + id, updatedAuthor)
            .then(res => { 
                console.log(res);
                (navigate('/'));
            })
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
        <p className="colorPurple mt-2">Edit this author:</p>
        {errors.map((err, index) => {
            return <p className="text-danger" key={index}>{err}</p>}
        )} 
        {loaded && (
        <AuthorForm onSubmitProp={editAuthor} initialFirstName={author.firstName}
                initialLastName={author.lastName}/>
        )}
        </>
    )
} 