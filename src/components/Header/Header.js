import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
           <nav className='navbar'>
            <img src={logo} alt="" />
            <div className="menu">
                <a href="/shop" className='active'>Shop</a>
                <a href="/oder">Oder</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
           </nav>
        </div>
    );
};

export default Header;