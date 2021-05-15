import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product,  setProduct] =  useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    },[])
    return (
        <div className="container text-center mt-5">
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}