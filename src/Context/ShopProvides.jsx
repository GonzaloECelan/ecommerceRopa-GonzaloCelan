import { createContext } from "react";
import React from 'react'
import { useState } from "react";




 export const Shop = createContext(null);




const ShopProvides = ({children}) => {

    const [cart, setCart] = useState([]);
    console.log(cart)

    const addItem = (item)=>{
        const productoRepetido = isInCart(item.id)
        if(productoRepetido){
            const cartCantidad = cart.map(product =>{
                if(product.id === item.id){
                    product.quantity += item.quantity
                    return product

                } return product
            })
            console.log(cartCantidad);
            setCart(cartCantidad);

        }else{
            const cartModificado = [...cart, item]
            setCart(cartModificado);
        }

       
      
    }

    const isInCart = (id)=>{
       return cart.some(product => product.id === id)

    }

    const removeItem = (itemToRemove)=>{
        const filterProducts = cart.filter(item => item !== itemToRemove);
        setCart(filterProducts);

    }

    const clearCart = ()=>{
        setCart([]);
    }

    const total = ()=>{
        const total = cart.reduce((acc, product) => acc += product.quantity * product.price, 0)
        console.log("total:", total);
        return total;
    }

   

  return (
    <Shop.Provider value={{cart, addItem, removeItem, clearCart, total}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvides