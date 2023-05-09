import { useEffect, useState } from "react"

export default function GithubUser(props){
    const [data, setData]= useState(null)

    useEffect(() =>{
        fetch (`https://api.github.com/users/${props.username}`)
        .then(response =>{
            return response.json()
        })
        .then(json =>{
            console.log(json)

            setData(json)
        })
    }, [props.username])

    return <div>
        {data && (
        <>
        <div>
        <h1>{data.name}</h1>
        <p>{data.login}</p>
        </div>
        </>
        )}
    </div>
}