import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Clickcounter from "./Clickcounter"

export function App() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Clickcounter />} />
        </Routes>
        </>
    )
}