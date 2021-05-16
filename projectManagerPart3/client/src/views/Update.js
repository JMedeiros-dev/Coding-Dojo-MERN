import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";


export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .then(navigate('/' + id ))
    }

    return(
        <>
        <h1 className="text-center">Update a Product</h1>
        <form className="mt-3 col-6 offset-3" onSubmit={updateProduct}>
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
            <button type="submit" className="btn btn-primary mb-3">Update</button>
        </form>
    </>
    )

}