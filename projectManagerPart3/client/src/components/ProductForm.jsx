import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return(
    <div className="container">
        <h1 className="text-center">Product Manager</h1>
        <form className="mt-3 col-6 offset-3" onSubmit={onSubmitHandler}>
            <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" type="text" placeholder="Title" aria-label="Title" onChange={(e)=>setTitle(e.target.value)} value={title} />
            </div>
            <div className="mb-3">
            <label className="form-label">Price</label>
            <input className="form-control" type="number" placeholder="Price" aria-label="Price" onChange={(e)=>setPrice(e.target.value)} value={price} />
            </div>
            <div className="mb-3">
            <label className="form-label">Description</label>
            <input className="form-control" type="text" placeholder="Description" aria-label="Description" onChange={(e)=>setDescription(e.target.value)} value={description} />
            </div>
            <button type="submit" className="btn btn-primary mb-3">Create</button>
        </form>
        </div>
    )
}

