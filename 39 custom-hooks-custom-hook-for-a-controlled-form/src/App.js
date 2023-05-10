import React from "react"
import { useStoreInputs } from "./useStoreInputs";

export default function HandleForm() {
  const {onLogin, autoComplete, autoComplete2} = useStoreInputs()

  return (
    <form>
      <input type="text" onChange={autoComplete} />
      <input type="password" onChange={autoComplete2} />
      <button onClick={onLogin} type="submit">Login</button>
    </form>
  );
}