import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//functions
import { shorten, isIncCart, quantityCount } from '../../helper/functions';
//context
import { CartContext } from '../../context/CartContextProvider';
//icons
import trashIcon from '../../assets/icons/trash.svg';

const Product = ({productData}) => {
    const {image, title, price, id} = productData;
    const {state, dispatch} = useContext(CartContext);
    return (
        <div>
           <img src = {image} alt = "product"/> 
           <h3>{shorten(title)}</h3>
           <p>{price}</p>
           <div>
               <Link to = {`/products/${id}`}>Details</Link>
               <div>
               {
               isIncCart(state, id) ? 
               <button onClick = {() => dispatch({type: "INCREASE", payload: productData})}>+</button>:
               <button onClick = {() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
               }
               {quantityCount(state, id) ===1 && <button onClick = {() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src = {trashIcon} alt = "trash"/></button>}
               {quantityCount(state, id) > 1 && <button onClick = {() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
               </div>
           </div>
        </div>
    );
};

export default Product;