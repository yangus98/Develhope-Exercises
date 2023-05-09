import Clickcounter from "./Clickcounter";
import { useState } from "react"

export default function App() {
    const [counter, setCounter] = useState(0);
    const increase = () => {
      setCounter(count => count + 1);
    };

    
   

    return(
        <>
        <Clickcounter increase={increase} counter={counter} change={function onCounterChange(){console.log(`Il counter ora è  ${counter+1}` )}}/>
        </>
    )
}