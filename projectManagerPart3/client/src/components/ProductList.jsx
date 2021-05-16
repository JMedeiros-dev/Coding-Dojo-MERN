import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


export default props => {

    const {removeFromDom} = props;

    const deletedProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div className="text-center align-items-center">
            <h1>All Products:</h1>
            {props.products.map((product, i) => {
                return <p><Link to={`/${product._id}`} key={i} >{product.title}</Link><button onClick={(e)=>{deletedProduct(product._id)}} className="btn btn-sm btn-secondary mb-3 ms-2">Delete</button></p>
            })}
        </div>
    )
}