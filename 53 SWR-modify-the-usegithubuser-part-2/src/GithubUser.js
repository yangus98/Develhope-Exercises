import { useGithubUser } from "./useGithubUser"

export default function GithubUser({username}){
    const {data, error} = useGithubUser(username)
    
    return <div>
        {error && <h1>Error</h1>}
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