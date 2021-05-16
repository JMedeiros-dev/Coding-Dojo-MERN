import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from "@reach/router";



export default props => {
    const { id } = props;
    const [product,  setProduct] =  useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
    },[])

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
        .then(navigate('/'))
    }

    return (
        <div className="container text-center mt-5">
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/" + id + "/edit"}>Edit</Link>
            <Link className="ms-2" to="/">Go Back</Link>
            <button onClick={(e)=>{deleteProduct(id)}} className="btn btn-sm btn-secondary mb-3 ms-2">Delete</button>
        </div>
    )
}