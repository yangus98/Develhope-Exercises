import React from "react"
import { useState } from "react";
import Login from "./Login"

export default function HandleForm() {

  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  const autoComplete = (e) => {
    setText({ name: e.target.value });
  };

  const autoComplete2 = (e) => {
    setPass({ pass: e.target.value });
  };

  return (
    <form>
      <input type="text" onChange={autoComplete} />
      <input type="password" onChange={autoComplete2} />
      <Login text={text} pass={pass} />
    </form>
  );
}