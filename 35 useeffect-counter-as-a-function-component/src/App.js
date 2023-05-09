import Clickcounter from "./Clickcounter"
import { useState } from "react"

export default function App() {
    const [showCounter, setShowCounter] = useState(true)

    function handleToggleCounter(){
        setShowCounter(val => !val)

    }

    return(
        <>
        {showCounter && <Clickcounter showCounter={showCounter} />}
        <button onClick={handleToggleCounter}>Remove component</button>
        </>
    )
}