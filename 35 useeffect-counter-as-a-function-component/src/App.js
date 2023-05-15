import Clickcounter from "./Clickcounter"
import { useState } from "react"

export default function App() {
    const [showCounter, setShowCounter] = useState(true)

    function handleToggleCounter(){
        setShowCounter(val => !val)

    }

    return(
        <div>
        {showCounter ?(<p> <Clickcounter /></p>): false}
        <button onClick={handleToggleCounter}>Remove component</button>
        </div>
    )
}