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
        {data.name ? (<h1>{data.name}</h1>) : (<p><b>This account doesn't have login name!</b></p>)}
        <p>{data.login}</p>
        </div>
        </>
        )}
    </div>
}