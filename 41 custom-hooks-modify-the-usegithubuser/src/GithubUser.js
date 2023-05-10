import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData(){
    onFetchUser(username)
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {data && (
        <>
          <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            <h1>{data.name}</h1>
            <p>{data.login}</p>
          </div>
        </>
      )}
    </div>
  );
}
