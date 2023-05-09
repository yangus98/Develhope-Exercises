import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
 
export default function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
      let interval = setInterval(function () {setCounter(counter + 1)},1000)

      return () => {
        clearInterval(interval, 1000)
      }
    }, [counter])

    return (
        <div>
          <h1>{counter}</h1>
        </div>
      );
}
