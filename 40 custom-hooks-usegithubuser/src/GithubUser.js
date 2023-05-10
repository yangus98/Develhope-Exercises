import { useGithubUser } from "./useGithubUser"

export default function GithubUser({username}){
    const {data} = useGithubUser(username)
    
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