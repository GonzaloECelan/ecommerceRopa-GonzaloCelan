import React from 'react'
import CartWidget from './CartWidget';
import "./style.css";

export const NavBar = () => {
  return (
    <div>
        <header>
            <div className='logo'>
                <h1>MANGO</h1>
            </div>
            <nav>
                <ul>
                    <a href="#">
                        <li>HOMBRE</li>
                    </a>
                    <a href="#">
                        <li>MUJERES</li>
                    </a>
                    <a href="#">
                        <li>ACCESORIOS</li>
                    </a>
                    <a href="#">
                        <li>SALE</li>
                    </a>
                    
                </ul>
            </nav>

            <CartWidget/>
        </header>
        


    </div>
  )
}
