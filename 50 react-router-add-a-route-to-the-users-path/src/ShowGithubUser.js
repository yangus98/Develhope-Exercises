import GithubUser from "./GithubUser"
import { useParams } from "react-router-dom"

export default function ShowGithubUser(){
    const {username = "INVALID-NAME"} = useParams()

    return(
        <>
        <GithubUser username={username}/>
        </>
    )
}