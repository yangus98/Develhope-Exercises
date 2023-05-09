import React, { useState } from "react"
import Cart from "./Cart"

export default function App () {
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 20.99 },
        { id: 3, name: 'Product 3', price: 15.99 },
        { id: 4, name: 'Product 4', price: 8.99 },
        { id: 5, name: 'Product 5', price: 12.99 },
      ];

      const [cartItems, setCartItems] = useState([])

      const handleCart = (item) => {
        setCartItems([...cartItems, item])
        console.log(cartItems)
      }

      const total = cartItems.reduce((acc, curr) => acc + curr.price, 0)

      return(
        <>
        <h1>Prodotti</h1>
        {products.map((e, index) => { 
            return (
            <>
            <li key={index}>{e.name} - {e.price}</li>
            <button onClick={() => handleCart(e)}>Add</button>
            </>
            )
        })
        }
        <Cart arr={cartItems} sum={total}/>
        </>

      )

      
}