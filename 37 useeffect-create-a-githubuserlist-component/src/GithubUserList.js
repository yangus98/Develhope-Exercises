import {useState} from "react"
import GithubUser from "./GithubUser"

export default function GithubUserList (){
    const [names, setNames] = useState([])
    const [usernames, setUsernames] = useState ([])

    const HandleAdd = () => {
        setUsernames([...usernames, names])
    }

    return(
        <>
        <input type="text" onChange={(e) => setNames(e.target.value)}/>
        <button onClick={HandleAdd}>Register</button>
        
        <GithubUser username={names}/>
        <hr></hr>
        {usernames.map((e) =>{return <li>{e}</li>})}
        </>
    )
}