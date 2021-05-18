import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import '../App.css';
import axios from 'axios';

export default () => {
const [authors, setAuthors] = useState([]);


useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
        .then(res => setAuthors(res.data))
}, [authors])

const deletedAuthor = authorId => {
    axios.delete('http://localhost:8000/api/authors/' + authorId)
    .then(res=>{
        setAuthors(authors.filter(author => author._id !== authorId));
    })
}

    return(
    <div className="container">
        <Link to="/new">Add an author</Link>
        <p className="colorPurple mt-4">We have quotes by:</p>
        <table className="table table-secondary table-striped mt-2 w-50">
                    <thead>
                <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author, i) => {
                    return <tr>
                        <td className="colorPurple">{author.firstName} {author.lastName}</td>
                        <td><Link to={`/edit/${author._id}`} className="btn btn-dark">Edit</Link><button onClick={(e)=>{deletedAuthor(author._id)}} className="btn ms-2 btn-purple">Delete</button></td>
                </tr>
                })}
            </tbody>
        </table>
    </div>

)
}