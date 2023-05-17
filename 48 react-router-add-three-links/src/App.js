import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"

export function App(){

    return(
        <>
        <Routes>
            <Route path="users/:username" element={<ShowGithubUser />} />       
        </Routes>
        <p><Link to="users/yangus98">Link to my repo...</Link></p>
        <p><Link to="users/rushizo">Link to my friend Danilo...</Link></p>
        <p><Link to="users/Lucone00">Link to my friend Luca...</Link></p>
        </>
    )
}