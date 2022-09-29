import React from 'react'
import CartWidget from './CartWidget';
import "./style.css";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
        <header>
            <div className='logo'>
                <h1>MANGO</h1>
            </div>
            <nav>
                <ul>
                    <Link to="/category/men's clothing">
                        <li>HOMBRE</li>
                    </Link >
                    <Link  to="/category/women's clothing">
                        <li>MUJERES</li>
                    </Link >
                    <Link  href="#">
                        <li>ACCESORIOS</li>
                    </Link >
                    <Link  href="#">
                        <li>SALE</li>
                    </Link >
                    
                </ul>
            </nav>

            <CartWidget/>
        </header>
        


    </div>
  )
}
