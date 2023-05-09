import React from 'react'
import { useEffect } from "react"
 
export default function Clickcounter(props) {
  
  useEffect(() => props.change, [props.counter,props.change])
      
    return (
        <div>
          <h1>{props.counter}</h1>
          <div>
            <button onClick={props.increase}>One more!</button>
          </div>
        </div>
      );
}

