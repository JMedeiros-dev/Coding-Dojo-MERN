import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {

    return (
        <div className="text-center">
            <h1>All Products:</h1>
            {props.products.map((product, i) => {
                return <p><Link to={`/${product._id}`} key={i} >{product.title}</Link></p>
            })}
        </div>
    )
}