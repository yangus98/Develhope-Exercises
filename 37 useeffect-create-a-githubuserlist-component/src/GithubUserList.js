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
        <GithubUser username={names} handleAdd={HandleAdd} userfinal={usernames} />
        <hr></hr>
        {usernames.map((e) =>{return <li>{e}</li>})}
        </>
    )
}