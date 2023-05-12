import { useState } from "react";

export default function GithubUser(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      if (response.status !==200) {
        setError(new Error())
      }

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  function handleGetUserData(){
    fetchGithubUser(props.username)
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Search user</button>
      <button onClick={props.handleAdd}>Register</button>
      {data && (
        <>
          <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {data.name ? (<h1>{data.name}</h1>) : (<p><b>This account doesn't have login name!</b></p>)}
            <p>{data.login}</p>
          </div>
        </>
      )}
    </div>
  );
}
