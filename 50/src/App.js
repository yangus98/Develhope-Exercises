import GithubUserList from "./GithubUserList"
import ShowGithubUser from "./ShowGithubUser"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"

export function App(){

    return(
        <>
        <Routes>
           <Route path="/" element={<GithubUserList />} />
           <Route path="users" element={<ShowGithubUser />}>
              <Route path=":username" element={<ShowGithubUser />} />
           </Route>
        </Routes>

        <p><Link to="users/yangus98">Link to my repo...</Link></p>
        <p><Link to="/">Link to Homepage...</Link></p>
        <p><Link to="users/Lucone00">Link to my friend Luca...</Link></p>
        </>
    )
}

