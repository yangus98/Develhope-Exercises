import GithubUserList from "./GithubUserList"
import ShowGithubUser from "./ShowGithubUser"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"

export function App(){

    return(
        <>
        <Routes>
           <Route path="users" >
              <Route path=":username" element={<ShowGithubUser/>} />
              <Route path="list" element={<GithubUserList />} />
              <Route index element={<p>Add a user and select it</p>}/>
           </Route>
        </Routes>

        <p><Link to="users/yangus98">Link to my repo...</Link></p>
        <p><Link to="/">Link to Homepage...</Link></p>
        <p><Link to="users/list">Link to the list...</Link></p>
        </>
    )
}

