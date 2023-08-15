import React from 'react';
import { Link } from 'react-router-dom';
//functions
import { shorten } from '../../helper/functions';

const Product = ({productData}) => {
    const {image, title, price, id} = productData;
    return (
        <div>
           <img src = {image} alt = "product"/> 
           <h3>{shorten(title)}</h3>
           <p>{price}</p>
           <div>
               <Link to = {`/products/${id}`}>Details</Link>
               <div>
               <button>Add to Cart</button>
               </div>
           </div>
        </div>
    );
};

export default Product;