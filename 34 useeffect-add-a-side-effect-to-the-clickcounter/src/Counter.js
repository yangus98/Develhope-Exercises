import React from 'react'
import { useState } from "react"
import OnCounterChange from './OnCounterChange';
 
export default function Counter() {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    };


    return (
        <div>
          <h1>{counter}</h1>
          <div>
            <OnCounterChange counter={counter}/>
            <button onClick={increase}>One more!</button>
          </div>
        </div>
      );
}