import React from "react"

export default function Login(props) {
    const onLogin = (event) => {
        event.preventDefault();
        let memorizedValues = {
        name: props.text,
        password: props.pass,
        remember: props.remember
    }
    console.log(memorizedValues)
    }

    
    return(
        <>
        <button disabled={!props.text || !props.pass} onClick={onLogin}>Login</button>
        </>
    )

}