import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shope.css';

const Shope = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


        useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])

        const clickHandel = (product) =>{
            // console.log(product)
            const newCart = [...cart, product];
            setCart(newCart);
        }

        
        
    return (
        <div className='shope_Conainer'>
           <div className="products_container">

        {
              products.map(product=><Product 
                key={product.id}
                product={product}
                clickHandel={clickHandel}
                ></Product>)
        }

           </div>
           <div className="shope_container">
            <h4>oder summery</h4>
            <p>selected items: {cart.length}</p>
           </div>
        </div>
    );
};
export default Shope;