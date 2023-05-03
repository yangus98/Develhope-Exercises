import React from "react"
import { useState } from "react";
import Login from "./Login"
import { useRef } from "react"

export default function HandleForm() {

  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  const autoComplete = (e) => {
    setText({ name: e.target.value });
  };

  const autoComplete2 = (e) => {
    setPass({ pass: e.target.value });
  };

  const input = useRef(null)
  const input2 = useRef(null)

  return (
    <form>
      <input type="text" ref={input} onChange={autoComplete} />
      <input type="password" ref={input2} onChange={autoComplete2} />
      <Login text={text} pass={pass} input={input} input2={input2}/>
    </form>
  );
}