import React,{useContext} from 'react';
//Context
import { ProductsContext } from './../context/ProductContextProvider';
//components
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div>
          {products.map(product => <Product key = {product.id} productData = {product}/>)}  
        </div>
    );
};

export default Store;