import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser (username){
    const {data} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        data
    }   
}