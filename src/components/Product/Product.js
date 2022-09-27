
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props)

    const {name, img, seller, price, ratings} = props.product;
    // const {clickHandel} = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
                <p className='product_name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
                
            </div>
            <button  onClick={ () => props.clickHandel(props.product)} className='btn_cart'><p>add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        
        </div>
    );
};

export default Product;