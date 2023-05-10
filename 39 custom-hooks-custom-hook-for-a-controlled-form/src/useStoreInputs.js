import { useState } from "react";
export function useStoreInputs() {
    const [text, setText] = useState("");
    const [pass, setPass] = useState("");

    const autoComplete = (e) => {
        setText({ name: e.target.value });
      };
    
      const autoComplete2 = (e) => {
        setPass({ pass: e.target.value });
      }
  
    const onLogin = (event) => {
      event.preventDefault();
      let memorizedValues = {
      name: text,
      password: pass,
      }
      console.log(memorizedValues)
     }
  
     return{
        onLogin: onLogin,
        autoComplete: autoComplete,
        autoComplete2: autoComplete2
      }


  
}