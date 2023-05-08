import React from "react"
import { useState } from "react";
import Login from "./Login"

export default function HandleForm() {

  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState(false);

  const autoComplete = (e) => {
    setText({ name: e.target.value });
  };

  const autoComplete2 = (e) => {
    setPass({ pass: e.target.value });
  };

  const autoComplete3 = (e) => {
    setCheck({ remember: e.target.checked });
  };

  return (
    <form>
      <input type="text" onChange={autoComplete} />
      <input type="password" onChange={autoComplete2} />
      <input type="checkbox" onChange={autoComplete3} />
      <Login text={text} pass={pass} remember={check}/>
    </form>
  );
}