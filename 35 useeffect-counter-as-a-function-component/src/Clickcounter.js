import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
 
export default function Clickcounter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      let prova = setInterval(() => {setCounter((count) => count + 1)},3000)

      return () => {
        clearInterval(prova)
        console.log("ciao")
      }
    }, [counter])

    return (
        <div>
          <h1>{counter}</h1>
        </div>
      );
}
